const multer = require("multer");
const aws = require("aws-sdk");
const path = require("path");
const AppError = require("../utils/appError");
const sharp = require("sharp");
const catchAsync = require("../utils/catchAsync");
aws.config.update({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  region: process.env.REGION,
});

const multerFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image") ||
    file.mimetype.startsWith("application/pdf")
  ) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  // storage: multerStorage,
  fileFilter: multerFilter,
});

const s3 = new aws.S3();
exports.uploadFile = upload.array("photo");

exports.resizeImage = catchAsync(async (req, res, next) => {
  if (req.files.length > 0) {
    req.files.forEach(async (file, i) => {
      if (file && file.mimetype.startsWith("image") && file !== "undefined") {
        const timeStamp = Date.now();
        sharp(file.buffer)
          .resize(600, 600)
          .jpeg({ quality: 80 })
          .toBuffer()
          .then(async (buffer) => {
            await s3.putObject(
              {
                Bucket: process.env.BUCKET,
                Key: `file-${req.user.id}-${timeStamp}-${i}${path.extname(
                  file.originalname
                )}`,
                Body: buffer,
                ACL: "public-read",
              },
              (err, data) => {
                if (err)
                  next(new AppError("Image does not upload", 400, undefined));
              }
            );
          });
        req.files[i].key = `file-${req.user.id}-${timeStamp}-${i}${path.extname(
          file.originalname
        )}`;
      } else if (
        file &&
        file.mimetype.startsWith("application/pdf") &&
        file !== "undefined"
      ) {
        const timeStamp = Date.now();
        await s3.putObject(
          {
            Bucket: process.env.BUCKET,
            Key: `file-${req.user.id}-${timeStamp}-${i}${path.extname(
              file.originalname
            )}`,
            Body: file.buffer,
            ACL: "public-read",
          },
          (err, data) => {
            if (err) next(new AppError("file does not upload", 400, undefined));
          }
        );
        req.files[i].key = `file-${req.user.id}-${timeStamp}-${i}${path.extname(
          file.originalname
        )}`;
      }

      // console.log(i);
    });
  }
  next();
});

exports.deleteFileFromS3 = catchAsync(async (req, res, next) => {
  await s3.deleteObject(
    {
      Bucket: process.env.BUCKET,
      Key: req.body.image,
    },
    (err, data) => {
      if (err) next(new AppError("Image does not delete", 400, undefined));
      next();
    }
  );
});

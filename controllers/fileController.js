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
  if (file.mimetype.startsWith("image")) {
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
    req.files.forEach((file, i) => {
      const timeStamp = Date.now();
      sharp(file.buffer)
        .resize(600, 600)
        .toBuffer()
        .then(async (buffer) => {
          await s3.putObject(
            {
              Bucket: process.env.BUCKET,
              Key: `image-${req.user.id}-${timeStamp}${path.extname(
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
      // console.log(i);
      req.files[i].key = `image-${req.user.id}-${timeStamp}${path.extname(
        file.originalname
      )}`;
    });
  }
  next();
});

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";

import { getFavourites, deleteFavourite } from "../actions/favouriteAction";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
const Favourite = () => {
  const dispatch = useDispatch();

  const favourite = useSelector((state) => state.favourite);
  useEffect(() => {
    dispatch(getFavourites());
  }, []);
  return (
    <div className="container product-detail" style={{ marginTop: "30px" }}>
      <div className="row">
        <div id="content" className="col-sm-12">
          <h2>My Favourite</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <td className="text-center">Image</td>
                  <td className="text-center">Title</td>
                  <td className="text-center">Type</td>
                  <td className="text-center">Country</td>
                  <td className="text-center">Detail</td>
                  <td className="text-center">Action</td>
                </tr>
              </thead>
              <tbody>
                {favourite.favourites && favourite.favourites.length > 0 ? (
                  favourite.favourites &&
                  favourite.favourites.map((fav) => (
                    <tr>
                      <td className="text-center">
                        {fav.ad.adType !== "jobseeker" ? (
                          <img
                            src={fileURL(fav.ad.images[0])}
                            alt={fav.ad.adType}
                            width="50"
                          />
                        ) : (
                          <img
                            src={fileURL(fav.ad.images)}
                            alt={fav.ad.adType}
                            width="50"
                          />
                        )}
                      </td>
                      <td className="text-center">
                        {capitalizeFirstLetter(fav.ad.title)}
                      </td>
                      <td className="text-center">
                        {capitalizeFirstLetter(fav.ad.adType)}
                      </td>
                      <td className="text-center">
                        {capitalizeFirstLetter(fav.ad.country)}
                      </td>
                      <td className="text-center">
                        {fav.ad.adType === "surplus" ? (
                          <Link
                            to={`/surplus-detail/${fav.ad._id}`}
                            style={{ textDecoration: "underlinke" }}
                          >
                            View Detail
                          </Link>
                        ) : null}
                        {fav.ad.adType === "job" ? (
                          <Link
                            to={`/job-detail/${fav.ad._id}`}
                            style={{ textDecoration: "underlinke" }}
                          >
                            View Detail
                          </Link>
                        ) : null}
                        {fav.ad.adType === "jobseeker" ? (
                          <Link
                            to={`/job-seeker-detail/${fav.ad._id}`}
                            style={{ textDecoration: "underlinke" }}
                          >
                            view Detail
                          </Link>
                        ) : null}
                      </td>
                      <td className="text-center">
                        <Button
                          variant="contained"
                          color="error"
                          startIcon={
                            favourite.loading === true ? (
                              <CircularProgress sx={{ color: "#fff" }} />
                            ) : (
                              <DeleteIcon />
                            )
                          }
                          onClick={() => dispatch(deleteFavourite(fav._id))}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr style={{ padding: "15px" }}>
                    <td>Favourites not found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;

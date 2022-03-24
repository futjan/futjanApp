import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imageSkeleton from "../image/catalog/demo/product/travel/10-80x80.jpg";
import {
  getSurplusesPrivate,
  deleteSurplus,
  surplusActivate,
} from "../actions/surplusAction";
import Loader from "../../utils/Loader";
import { Link } from "react-router-dom";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import ReactPaginate from "react-paginate";
import { Button } from "@mui/material";
const SurplusTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(surplusFromStore.totalDocs / itemsPerPage));
    dispatch(getSurplusesPrivate(currentPage, itemsPerPage));
  }, [currentPage, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage((event.selected + 1) * 1);
  };

  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const surplusFromStore = useSelector((state) => state.surplus);
  // useEffect
  useEffect(() => {
    dispatch(getSurplusesPrivate(currentPage * 1, itemsPerPage));
  }, []);

  return (
    <>
      <h1>Surplus ({surplusFromStore.totalDocs})</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <td className="text-center">Image</td>
              <td className="text-left">Surplus info</td>
              <td className="text-center">Original Price</td>
              <td className="text-center">Offered Price</td>
              {/* <td className="text-left">Model</td> */}
              <td className="text-center">Action</td>
            </tr>
          </thead>
          <tbody>
            {surplusFromStore.privateSurpluses.length > 0 ? (
              surplusFromStore.privateSurpluses.map((surplus) => (
                <tr key={surplus._id}>
                  <td className="text-center">
                    {" "}
                    <Link to={`/surplus-detail/${surplus._id}`}>
                      {surplus &&
                      surplus.images &&
                      surplus.images.length > 0 ? (
                        <img
                          src={fileURL(surplus.images[0])}
                          className="img-thumbnail"
                          width="80"
                        />
                      ) : (
                        <img src={imageSkeleton} className="img-thumbnail" />
                      )}
                    </Link>{" "}
                  </td>
                  <td className="text-left">
                    <Link to={`/surplus-detail/${surplus._id}`}>
                      {surplus.name.length > 40
                        ? capitalizeFirstLetter(
                            surplus.name.substring(0, 50) + "..."
                          )
                        : capitalizeFirstLetter(surplus.name)}
                    </Link>{" "}
                    <br />
                    <small>
                      Categor:{" "}
                      {surplus.category &&
                        capitalizeFirstLetter(surplus.category)}
                    </small>{" "}
                    <br />
                    <small>
                      Business Type:{" "}
                      {surplus.businessType &&
                        capitalizeFirstLetter(surplus.businessType)}
                    </small>{" "}
                  </td>
                  <td className="text-center">$ {surplus.originalPrice}</td>
                  <td className="text-center">$ {surplus.offeredPrice}</td>
                  {/* <td className="text-left">Product 8</td> */}
                  <td className="text-center">
                    <div className="input-group btn-block">
                      {surplus.active === true ? (
                        // <button
                        //   type="button"
                        //   className="btn btn-success"

                        // >
                        //   DEACTIVE
                        // </button>
                        <Button
                          color="inherit"
                          size="large"
                          onClick={() =>
                            dispatch(
                              surplusActivate({
                                id: surplus._id,
                                active: false,
                              })
                            )
                          }
                          variant="contained"
                        >
                          DEACTIVE
                        </Button>
                      ) : (
                        // <button
                        //   type="button"
                        //   className="btn btn-light"

                        // >
                        //   ACTIVE
                        // </button>
                        <Button
                          color="success"
                          size="large"
                          variant="contained"
                          onClick={() =>
                            dispatch(
                              surplusActivate({
                                id: surplus._id,
                                active: true,
                              })
                            )
                          }
                        >
                          ACTIVE
                        </Button>
                      )}

                      <Button
                        size="large"
                        style={{ margin: "0 8px" }}
                        color="primary"
                        onClick={() => {
                          props.setTab("EDIT");
                          props.setId(surplus._id);
                        }}
                        variant="contained"
                      >
                        EDIT
                      </Button>

                      <Button
                        size="large"
                        color="error"
                        variant="contained"
                        onClick={() => dispatch(deleteSurplus(surplus._id))}
                      >
                        DELETE
                      </Button>
                      {/* <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteSurplus(surplus._id))}
                      >
                        DELETE
                      </button> */}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <p style={{ padding: "15px" }}>No result</p>
              </tr>
            )}
          </tbody>
        </table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
      {surplusFromStore.loading === true ? <Loader /> : null}
    </>
  );
};

export default SurplusTable;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imageSkeleton from "../image/catalog/demo/product/travel/10-80x80.jpg";
import {
  getSurplusesPrivate,
  getSurplusById,
  deleteSurplus,
  surplusActivate,
} from "../actions/surplusAction";
import Loader from "../../utils/Loader";
import { Link } from "react-router-dom";
import fileURL from "../../utils/fileURL";
import captilizeFirstLetter from "../../utils/captilizeFirstLetter";
import Skeleton from "react-loading-skeleton";
import ReactPaginate from "react-paginate";
import { Button, Grid, Box } from "@mui/material";
import Table from "../../adminpanel/utils/Table";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  boxShadow: 24,
  p: 3,
};

const SurplusTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  // New Table
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [id, setId] = useState("");
  const [modal, setModal] = useState(false);

  // get state from store

  // useEffect
  useEffect(() => {
    dispatch(getSurplusesPrivate(page, rowsPerPage));
  }, [page, rowsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage((event.selected + 1) * 1);
  };

  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const surplus = useSelector((state) => state.surplus);
  // useEffect
  useEffect(() => {
    dispatch(getSurplusesPrivate(page * 1, rowsPerPage));
  }, []);

  return (
    <>
      <h1>Surplus ({surplus.totalDocs})</h1>
      <div className="table-responsive">
        <Table
          title={"Surplus"}
          orderBy={orderBy}
          order={order}
          setOrder={setOrder}
          setOrderBy={setOrderBy}
          selected={selected}
          setSelected={setSelected}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          rows={surplus.privateSurpluses}
          setId={setId}
          getOneProduct={getSurplusById}
          setModal={setModal}
          headCells={[
            {
              id: "image",
              numeric: false,
              disablePadding: true,
              label: "Image",
            },
            {
              id: "title",
              numeric: false,
              disablePadding: false,
              label: "Title",
            },
            {
              id: "category",
              numeric: false,
              disablePadding: false,
              label: "Category",
            },
            {
              id: "active",
              numeric: false,
              disablePadding: false,
              label: "Status",
            },
            {
              id: "action",
              numeric: true,
              disablePadding: false,
              label: "Action",
            },
          ]}
        />

        <Modal
          open={modal}
          onClose={() => setModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h3>Surplus</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              {surplus &&
              surplus.surplus &&
              surplus.surplus.images &&
              surplus.loading === false ? (
                <img src={fileURL(surplus.surplus.images[0])} width="100" />
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Skeleton count={1} width="150px" height="150px" />
                </div>
              )}
              {/* <img  width="60" /> */}
            </div>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h5 style={{ margin: "0" }}>Title</h5>
                {surplus &&
                surplus.surplus &&
                surplus.surplus.title &&
                surplus.loading === false ? (
                  surplus &&
                  surplus.surplus &&
                  surplus.surplus.title && (
                    <p>{captilizeFirstLetter(surplus.surplus.title)}</p>
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}
                {/* <p>adasodiasjdoiadjiojsodijaodi</p> */}

                <h5 style={{ margin: "0" }}>Category</h5>

                {surplus &&
                surplus.surplus &&
                surplus.surplus.category &&
                surplus.loading !== true ? (
                  surplus &&
                  surplus.surplus &&
                  surplus.surplus.category && (
                    <p>{captilizeFirstLetter(surplus.surplus.category)}</p>
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}

                <h5 style={{ margin: "0" }}>Business Type</h5>
                {surplus &&
                surplus.surplus &&
                surplus.surplus.businessType &&
                surplus.loading !== true ? (
                  surplus &&
                  surplus.surplus &&
                  surplus.surplus.businessType && (
                    <p>{captilizeFirstLetter(surplus.surplus.businessType)}</p>
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}
                <h5 style={{ margin: "0" }}>Status</h5>
                {surplus && surplus.surplus && surplus.loading !== true ? (
                  surplus.surplus.active === true ? (
                    "active"
                  ) : (
                    "inactive"
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                <h5 style={{ margin: "0" }}>Posted Date</h5>
                {surplus.surplus &&
                surplus.surplus.createdAt &&
                surplus.loading !== true ? (
                  <p>{new Date(surplus.surplus.createdAt).toDateString()}</p>
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}

                <h5 style={{ margin: "0" }}>Original Price</h5>
                {surplus &&
                surplus.surplus &&
                surplus.surplus.originalPrice &&
                surplus.loading !== true ? (
                  surplus &&
                  surplus.surplus &&
                  surplus.surplus.originalPrice && (
                    <p>{surplus.surplus.originalPrice}</p>
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}

                <h5 style={{ margin: "0" }}>Offered Price / Discount</h5>
                {surplus && surplus.surplus && surplus.loading !== true ? (
                  surplus &&
                  surplus.surplus &&
                  surplus.surplus.offeredPrice > 0 ? (
                    <p>
                      {surplus.surplus.offeredPrice} /{" "}
                      {surplus.surplus.discount}% OFF
                    </p>
                  ) : (
                    "No Discount"
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}
              </Grid>
            </Grid>

            {surplus.loading === false &&
            surplus.surplus &&
            surplus.surplus._id ? (
              <div style={{ gap: "10px", display: "flex" }}>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/surplus-detail/${surplus.surplus._id}`}
                >
                  Details
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (surplus.surplus && surplus.surplus.active === true) {
                      dispatch(
                        surplusActivate({
                          id: surplus.surplus._id,
                          active: false,
                        })
                      );
                    } else {
                      dispatch(
                        surplusActivate({
                          id: surplus.surplus._id,
                          active: true,
                        })
                      );
                    }
                  }}
                >
                  {surplus.surplus.active === true ? "DE Activate" : "Activate"}
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    props.setId(surplus.surplus._id);
                    props.setTab("EDIT-SURPLUS");
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  className="warning"
                  onClick={() => {
                    dispatch(deleteSurplus(surplus.surplus._id));
                    setModal(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            ) : null}
          </Box>
        </Modal>
        {/* 
        <table className="table table-bordered"
          <thead>
            <tr>
              <td className="text-center">Image</td>
              <td className="text-left">Surplus info</td>
              <td className="text-center">Original Price</td>
              <td className="text-center">Offered Price</td>
             
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
                      {surplus.title.length > 40
                        ? capitalizeFirstLetter(
                            surplus.title.substring(0, 50) + "..."
                          )
                        : capitalizeFirstLetter(surplus.title)}
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
                  <td className="text-center">
                    {surplus && surplus.currency} {surplus.originalPrice}
                  </td>
                  <td className="text-center">
                    {surplus && surplus.currency} {surplus.offeredPrice}
                  </td>
                  
                  <td className="text-center">
                    <div className="input-group btn-block">
                      {surplus.active === true ? (
                        
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
        </table> */}
      </div>
    </>
  );
};

export default SurplusTable;

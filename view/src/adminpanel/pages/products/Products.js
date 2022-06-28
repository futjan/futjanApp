import React, { useEffect, useState } from "react";
// material
import { Container, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
// components
import Page from "../../utils/Page";
import Table from "../../utils/Table";
import {
  getAdminSurplus,
  getSurplusById,
  deleteSurplus,
  surplusActivate,
} from "../../../components/actions/surplusAction";
import fileURL from "../../../utils/fileURL";
import Skeleton from "react-loading-skeleton";
// import "../surplusBusiness/skeleton.css";
import "../../../components/surplusBusiness/skeleton.css";
import "react-loading-skeleton/dist/skeleton.css";
import captilizeFirstLetter from "../../../utils/captilizeFirstLetter";
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
// import {
//   ProductSort,
//   ProductList,
//   ProductCartWidget,
//   ProductFilterSidebar,
// } from "../sections/@dashboard/products";
// mock
// import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function Products() {
  const [openFilter, setOpenFilter] = useState(false);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [id, setId] = useState("");
  const [modal, setModal] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  // initialize hook
  const dispatch = useDispatch();
  // get state from store
  const surplus = useSelector((state) => state.surplus);

  // useEffect
  useEffect(() => {
    dispatch(getAdminSurplus(page, rowsPerPage));
  }, []);

  return (
    <Page title="Dashboard: Surplus">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Surplus
        </Typography>
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
          rows={surplus.adminSurpluses}
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
      </Container>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Job</h3>
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
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
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
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
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
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
              <h5 style={{ margin: "0" }}>Status</h5>
              {surplus && surplus.surplus && surplus.loading !== true ? (
                surplus.surplus.active === true ? (
                  "active"
                ) : (
                  "inactive"
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
            </Grid>
            <Grid item xs={6}>
              <h5 style={{ margin: "0" }}>Posted Date</h5>
              {surplus.surplus &&
              surplus.surplus.createdAt &&
              surplus.loading !== true ? (
                <p>{new Date(surplus.surplus.createdAt).toDateString()}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
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
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5 style={{ margin: "0" }}>Offered Price / Discount</h5>
              {surplus && surplus.surplus && surplus.loading !== true ? (
                surplus &&
                surplus.surplus &&
                surplus.surplus.offeredPrice > 0 ? (
                  <p>
                    {surplus.surplus.offeredPrice} / {surplus.surplus.discount}%
                    OFF
                  </p>
                ) : (
                  "No Discount"
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
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
                      surplusActivate({ id: surplus.surplus._id, active: true })
                    );
                  }
                }}
              >
                {surplus.surplus.active === true ? "DE Activate" : "Activate"}
              </Button>
              <Button
                variant="contained"
                color="error"
                className="warning"
                onClick={() => dispatch(deleteSurplus(surplus.surplus._id))}
              >
                Delete
              </Button>
            </div>
          ) : null}
        </Box>
      </Modal>
    </Page>
  );
}

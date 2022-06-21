import React, { useEffect, useState } from "react";
// material
import { Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
// components
import Page from "../../utils/Page";
import Table from "../../utils/Table";
import {
  getAllUsers,
  blockedUser,
  deletedUser,
  getUser,
} from "../../../components/actions/userAction";
import fileURL from "../../../utils/fileURL";
import Skeleton from "react-loading-skeleton";
// import "../surplusBusiness/skeleton.css";
import "../../../components/surplusBusiness/skeleton.css";
import "react-loading-skeleton/dist/skeleton.css";
import captilizeFirstLetter from "../../../utils/captilizeFirstLetter";
// import {
//   ProductSort,
//   ProductList,
//   ProductCartWidget,
//   ProductFilterSidebar,
// } from "../sections/@dashboard/products";
// mock
// import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

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
  const auth = useSelector((state) => state.auth);

  // useEffect
  useEffect(() => {
    dispatch(getAllUsers(page, rowsPerPage));
  }, []);

  return (
    <Page title="Dashboard: Surplus">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Users
        </Typography>
        <Table
          title={"Users"}
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
          rows={auth.users.map((user) => {
            return {
              title: user.name,
              category: user.email,
              active: !user.blocked,
              _id: user._id,
            };
          })}
          setId={setId}
          getOneProduct={getUser}
          setModal={setModal}
          headCells={[
            {
              id: "name",
              numeric: false,
              disablePadding: false,
              label: "name",
            },
            {
              id: "email",
              numeric: false,
              disablePadding: false,
              label: "email",
            },
            {
              id: "blocked",
              numeric: false,
              disablePadding: false,
              label: "Status",
            },
            {
              id: "action",
              numeric: false,
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
          <h3>User</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {auth.user &&
            auth.user &&
            auth.user.images &&
            auth.loading === false ? (
              <img src={fileURL(auth.user.images[0])} width="100" />
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
              <h5 style={{ margin: 0 }}>Name</h5>
              {auth.user && auth.loading === false ? (
                auth.user &&
                auth.user.name && <p>{captilizeFirstLetter(auth.user.name)}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
              {/* <p>adasodiasjdoiadjiojsodijaodi</p> */}

              <h5 style={{ margin: 0 }}>Emaill</h5>

              {auth.user &&
              auth.user &&
              auth.user.email &&
              auth.loading !== true ? (
                auth.user && <p>{auth.user.email}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5 style={{ margin: 0 }}>Contact</h5>
              {auth.user && auth.user.contact && auth.loading !== true ? (
                auth.user && <p>{auth.user.contact}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
              <h5 style={{ margin: 0 }}>Status</h5>
              {auth.user && auth.loading !== true ? (
                auth.user && (
                  <p>{auth.user.blocked === true ? "Blocked" : "Active"}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
            </Grid>
            <Grid item xs={6}>
              <h5 style={{ margin: 0 }}>Member since</h5>
              {auth.user && auth.loading !== true ? (
                <p>{new Date(auth.user.createdAt).toDateString()}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              {/* <h5 style={{margin:0}}>Type</h5>
              {auth.user &&
              auth.user &&
              auth.user.type &&
              auth.loading !== true ? (
                auth.user &&
                auth.user &&
                auth.user.type && <p>{captilizeFirstLetter(auth.user.type)}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )} */}

              {/* <h5 style={{margin:0}}>Gender</h5>
              {auth.user &&
              auth.user &&
              auth.user.gender &&
              auth.loading !== true ? (
                auth.user &&
                auth.user &&
                auth.user.gender && (
                  <p>{captilizeFirstLetter(auth.user.gender)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )} */}
            </Grid>
          </Grid>

          {auth.loading === false && auth.user && auth.user._id ? (
            <div style={{ gap: "10px", display: "flex" }}>
              {/* <Button
                variant="contained"
                component={Link}
                to={`/auth.user-detail/${auth.user._id}`}
              >
                Details
              </Button> */}
              <Button
                variant="contained"
                onClick={() => {
                  if (auth.user && auth.user.blocked === true) {
                    dispatch(
                      blockedUser(auth.user._id, {
                        blocked: false,
                      })
                    );
                  } else {
                    dispatch(
                      blockedUser(auth.user._id, {
                        blocked: true,
                      })
                    );
                  }
                }}
              >
                {auth.user && auth.user.active === true
                  ? "DE Activate"
                  : "Activate"}
              </Button>
              <Button
                variant="contained"
                color="error"
                className="warning"
                onClick={() => dispatch(deletedUser(auth.user._id))}
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

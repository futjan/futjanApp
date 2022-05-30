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
  getAdminJobs,
  getJobById,
  deleteJob,
  jobActivate,
} from "../../../components/actions/jobAction";
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
  const job = useSelector((state) => state.job);

  // useEffect
  useEffect(() => {
    dispatch(getAdminJobs(page, rowsPerPage));
  }, []);

  console.log(job);
  return (
    <Page title="Dashboard: Surplus">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          JOBS
        </Typography>
        <Table
          title={"Jobs"}
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
          rows={job.adminJobs}
          setId={setId}
          getOneProduct={getJobById}
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
          <h3>Surplus</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {job && job.job && job.job.images && job.loading === false ? (
              <img src={fileURL(job.job.images[0])} width="100" />
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
              <h5>Title</h5>
              {job && job.job && job.job.title && job.loading === false ? (
                job &&
                job.job &&
                job.job.title && <p>{captilizeFirstLetter(job.job.title)}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
              {/* <p>adasodiasjdoiadjiojsodijaodi</p> */}

              <h5>Category</h5>

              {job && job.job && job.job.category && job.loading !== true ? (
                job &&
                job.job &&
                job.job.category && (
                  <p>{captilizeFirstLetter(job.job.category)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5>SubCategory</h5>
              {job && job.job && job.job.subCategory && job.loading !== true ? (
                job &&
                job.job &&
                job.job.subCategory && (
                  <p>{captilizeFirstLetter(job.job.subCategory)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
            </Grid>
            <Grid item xs={6}>
              <h5>Posted Date</h5>
              {job.job && job.job.createdAt && job.loading !== true ? (
                <p>{new Date(job.job.createdAt).toDateString()}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5>Type</h5>
              {job && job.job && job.job.type && job.loading !== true ? (
                job &&
                job.job &&
                job.job.type && <p>{captilizeFirstLetter(job.job.type)}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5>Gender</h5>
              {job && job.job && job.job.gender && job.loading !== true ? (
                job &&
                job.job &&
                job.job.gender && <p>{captilizeFirstLetter(job.job.gender)}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
            </Grid>
          </Grid>

          {job.loading === false && job.job && job.job._id ? (
            <div style={{ gap: "10px", display: "flex" }}>
              <Button
                variant="contained"
                component={Link}
                to={`/job-detail/${job.job._id}`}
              >
                Details
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  if (job.job && job.job.active === true) {
                    dispatch(jobActivate({ id: job.job._id, active: false }));
                  } else {
                    dispatch(jobActivate({ id: job.job._id, active: true }));
                  }
                }}
              >
                {job.job && job.job.active === true
                  ? "DE Activate"
                  : "Activate"}
              </Button>
              <Button
                variant="contained"
                color="error"
                className="warning"
                onClick={() => dispatch(deleteJob(job.job._id))}
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

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
  getAdminJobSeekers,
  activateJobSeeker,
  getJobSeekerById,
  deleteJobSeeker,
} from "../../../components/actions/jobSeekersAction";
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

export default function JobSeeker() {
  const [openFilter, setOpenFilter] = useState(false);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [id, setId] = useState("");
  const [modal, setModal] = useState(false);
  // initialize hook
  const dispatch = useDispatch();
  // get state from store
  const jobSeeker = useSelector((state) => state.jobSeeker);

  // useEffect
  useEffect(() => {
    dispatch(getAdminJobSeekers(page, rowsPerPage));
  }, []);

  return (
    <Page title="Dashboard: Surplus">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Job Seeker
        </Typography>
        <Table
          title={"Job Seeker"}
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
          rows={jobSeeker.adminJobSeekers.map((cand) => {
            return {
              _id: cand._id,
              images: [cand.photo],
              title: cand.name,
              category: cand.title,
              active: cand.active,
            };
          })}
          setId={setId}
          getOneProduct={getJobSeekerById}
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
            {jobSeeker &&
            jobSeeker.jobSeeker &&
            jobSeeker.jobSeeker.photo &&
            jobSeeker.loading === false ? (
              <img src={fileURL(jobSeeker.jobSeeker.photo)} width="100" />
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
              <h5 style={{ margin: 0 }}>Title</h5>
              {jobSeeker &&
              jobSeeker.jobSeeker &&
              jobSeeker.jobSeeker.title &&
              jobSeeker.loading === false ? (
                jobSeeker &&
                jobSeeker.jobSeeker &&
                jobSeeker.jobSeeker.title && (
                  <p>{captilizeFirstLetter(jobSeeker.jobSeeker.title)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
              {/* <p>adasodiasjdoiadjiojsodijaodi</p> */}

              <h5 style={{ margin: 0 }}>Name</h5>

              {jobSeeker &&
              jobSeeker.jobSeeker &&
              jobSeeker.jobSeeker.name &&
              jobSeeker.loading !== true ? (
                jobSeeker &&
                jobSeeker.jobSeeker &&
                jobSeeker.jobSeeker.name && (
                  <p>{captilizeFirstLetter(jobSeeker.jobSeeker.name)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5 style={{ margin: 0 }}>Gender</h5>
              {jobSeeker &&
              jobSeeker.jobSeeker &&
              jobSeeker.jobSeeker.gender &&
              jobSeeker.loading !== true ? (
                jobSeeker &&
                jobSeeker.jobSeeker &&
                jobSeeker.jobSeeker.gender && (
                  <p>{captilizeFirstLetter(jobSeeker.jobSeeker.gender)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
              <h5 style={{ margin: 0 }}>Status</h5>
              {jobSeeker &&
              jobSeeker.jobSeeker &&
              jobSeeker.loading !== true ? (
                jobSeeker &&
                jobSeeker.jobSeeker &&
                jobSeeker.jobSeeker.active === true ? (
                  "active"
                ) : (
                  "inactive"
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
            </Grid>
            <Grid item xs={6}>
              <h5 style={{ margin: 0 }}>Posted Date</h5>
              {jobSeeker.jobSeeker &&
              jobSeeker.jobSeeker.createdAt &&
              jobSeeker.loading !== true ? (
                <p>{new Date(jobSeeker.jobSeeker.createdAt).toDateString()}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
              <h5 style={{ margin: 0 }}>Category</h5>

              {jobSeeker &&
              jobSeeker.jobSeeker &&
              jobSeeker.jobSeeker.category &&
              jobSeeker.loading !== true ? (
                jobSeeker &&
                jobSeeker.jobSeeker &&
                jobSeeker.jobSeeker.category && (
                  <p>{captilizeFirstLetter(jobSeeker.jobSeeker.category)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5 style={{ margin: 0 }}>SubCategory</h5>
              {jobSeeker &&
              jobSeeker.jobSeeker &&
              jobSeeker.jobSeeker.subCategory &&
              jobSeeker.loading !== true ? (
                jobSeeker &&
                jobSeeker.jobSeeker &&
                jobSeeker.jobSeeker.subCategory && (
                  <p>{captilizeFirstLetter(jobSeeker.jobSeeker.subCategory)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
            </Grid>
          </Grid>

          {jobSeeker.loading === false &&
          jobSeeker.jobSeeker &&
          jobSeeker.jobSeeker._id ? (
            <div style={{ gap: "10px", display: "flex" }}>
              <Button
                variant="contained"
                component={Link}
                to={`/jobSeeker-detail/${jobSeeker.jobSeeker._id}`}
              >
                Details
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  if (
                    jobSeeker.jobSeeker &&
                    jobSeeker.jobSeeker.active === true
                  ) {
                    dispatch(
                      activateJobSeeker({
                        id: jobSeeker.jobSeeker._id,
                        active: false,
                      })
                    );
                  } else {
                    dispatch(
                      activateJobSeeker({
                        id: jobSeeker.jobSeeker._id,
                        active: true,
                      })
                    );
                  }
                }}
              >
                {jobSeeker.jobSeeker && jobSeeker.jobSeeker.active === true
                  ? "DE Activate"
                  : "Activate"}
              </Button>
              <Button
                variant="contained"
                color="error"
                className="warning"
                onClick={() =>
                  dispatch(deleteJobSeeker(jobSeeker.jobSeeker._id))
                }
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

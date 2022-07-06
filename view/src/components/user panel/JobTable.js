import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";

import imageSkeleton from "../image/catalog/demo/product/travel/10-80x80.jpg";
import {
  getJobsPrivate,
  getJobById,
  deleteJob,
  jobActivate,
} from "../actions/jobAction";
import Loader from "../../utils/Loader";
import { Link } from "react-router-dom";
import fileURL from "../../utils/fileURL";
import Skeleton from "react-loading-skeleton";
// import "../../../components/surplusBusiness/skeleton.css";

import captilizeFirstLetter from "../../utils/captilizeFirstLetter";
import Table from "../../adminpanel/utils/Table";

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
const JobTable = (props) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(3);
  // const [pageCount, setPageCount] = useState(0);
  const [openFilter, setOpenFilter] = useState(false);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [id, setId] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getJobsPrivate(page, rowsPerPage));
  }, [page, rowsPerPage]);

  // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   setCurrentPage((event.selected + 1) * 1);
  // };

  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  // get state from store
  const job = useSelector((state) => state.job);
  // useEffect
  useEffect(() => {
    dispatch(getJobsPrivate(page, rowsPerPage));
  }, []);

  return (
    <>
      <h1>Jobs ({job.totalDocs})</h1>
      <div className="table-responsive">
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
          rows={job.privateJobs}
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
              id: "ad_id",
              numeric: false,
              disablePadding: false,
              label: "AD ID",
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
            <h3>JOB</h3>
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
                <h5 style={{ marginBottom: 0 }}>Title</h5>
                {job && job.job && job.job.title && job.loading === false ? (
                  job &&
                  job.job &&
                  job.job.title && <p>{captilizeFirstLetter(job.job.title)}</p>
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}
                {/* <p>adasodiasjdoiadjiojsodijaodi</p> */}

                <h5 style={{ marginBottom: 0 }}>Category</h5>

                {job && job.job && job.job.category && job.loading !== true ? (
                  job &&
                  job.job &&
                  job.job.category && (
                    <p>{captilizeFirstLetter(job.job.category)}</p>
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}

                <h5 style={{ marginBottom: 0 }}>SubCategory</h5>
                {job &&
                job.job &&
                job.job.subCategory &&
                job.loading !== true ? (
                  job &&
                  job.job &&
                  job.job.subCategory && (
                    <p>{captilizeFirstLetter(job.job.subCategory)}</p>
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}
                <h5 style={{ marginBottom: 0 }}>Views</h5>
                {job && job.job && job.job.views && job.loading !== true ? (
                  job && job.job && job.job.views ? (
                    <p>{job.job.views}</p>
                  ) : (
                    0
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                <h5 style={{ marginBottom: 0 }}>Posted Date</h5>
                {job.job && job.job.createdAt && job.loading !== true ? (
                  <p>{new Date(job.job.createdAt).toDateString()}</p>
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}

                <h5 style={{ marginBottom: 0 }}>Type</h5>
                {job && job.job && job.job.type && job.loading !== true ? (
                  job &&
                  job.job &&
                  job.job.type && <p>{captilizeFirstLetter(job.job.type)}</p>
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}

                <h5 style={{ marginBottom: 0 }}>Gender</h5>
                {job && job.job && job.job.gender && job.loading !== true ? (
                  job &&
                  job.job &&
                  job.job.gender && (
                    <p>{captilizeFirstLetter(job.job.gender)}</p>
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}
                <h5 style={{ marginBottom: 0 }}>Status</h5>
                {job && job.job && job.job.active && job.loading !== true ? (
                  job &&
                  job.job &&
                  job.job.active &&
                  job.job.active === true ? (
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
                  color="success"
                  onClick={() => {
                    props.setTab("EDIT-JOB");
                    props.setId(job.job._id);
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  className="warning"
                  onClick={() => {
                    dispatch(deleteJob(job.job._id));
                    setModal(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            ) : null}
          </Box>
        </Modal>
        {/* <table className="table table-bordered">
          <thead>
            <tr>
              <td className="text-center">Image</td>
              <td className="text-center">Job info</td>
              
              <td className="text-center">Job Type</td>
              <td className="text-center">Salary</td>
              <td className="text-center">Action</td>
            </tr>
          </thead>
          <tbody>
            {jobFromStore.privateJobs.length > 0 ? (
              jobFromStore.privateJobs.map((job) => (
                <tr key={job._id}>
                  <td className="text-center">
                    {" "}
                    <Link to={`/job-detail/${job._id}`}>
                      {job.images && job.images.length > 0 ? (
                        <img
                          src={fileURL(job.images[0])}
                          
                          className="img-thumbnail"
                          width="80"
                        />
                      ) : (
                        <img
                          src={imageSkeleton}
                          
                          className="img-thumbnail"
                        />
                      )}
                    </Link>{" "}
                  </td>
                  <td className="text-left">
                    <Link to={`/surplus-detail/${job._id}`}>
                      {job.title.length > 40
                        ? capitalizeFirstLetter(
                            job.title.substring(0, 50) + "..."
                          )
                        : capitalizeFirstLetter(job.title)}
                    </Link>{" "}
                    <br />
                    <small>
                      Categor:{" "}
                      {job &&
                        job.category &&
                        capitalizeFirstLetter(job.category)}
                    </small>{" "}
                    <br />
                    <small>
                      Sub Categor:{" "}
                      {job &&
                        job.subCategory &&
                        capitalizeFirstLetter(job.subCategory)}
                    </small>{" "}
                  </td>
                  <td className="text-center">
                    {job && job.type && capitalizeFirstLetter(job.type)}
                  </td>
                  <td className="text-center">
                    {" "}
                    {job.minSalary > 0 && job.maxSalary > 0
                      ? `${job && job.currency} ${job.minSalary} - ${
                          job.maxSalary
                        } / ${job.salaryType}`
                      : job.salaryType}
                  </td>

                  <td className="text-center">
                    <div className="input-group btn-block">
                      {
                        job.active === true ? (
                          

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
                        ) : null
                        
                      }

                      <Button
                        size="large"
                        style={{ margin: "0 8px" }}
                        color="primary"
                        onClick={() => {
                          props.setTab("EDIT-JOB");
                          props.setId(job._id);
                        }}
                        variant="contained"
                      >
                        EDIT
                      </Button>

                      <Button
                        size="large"
                        color="error"
                        variant="contained"
                        onClick={() => dispatch(deleteJob(job._id))}
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
        </table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        /> */}
      </div>
      {/* {jobFromStore.loading === true ? <Loader /> : null} */}
    </>
  );
};

export default JobTable;

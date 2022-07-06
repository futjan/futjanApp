import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";

import imageSkeleton from "../image/catalog/demo/product/travel/10-80x80.jpg";
import {
  getPrivateJobSeeker,
  activateJobSeeker,
  getJobSeekerById,
  deleteJobSeeker,
} from "../actions/jobSeekersAction";
import Loader from "../../utils/Loader";
import { Link } from "react-router-dom";
import fileURL from "../../utils/fileURL";

import Skeleton from "react-loading-skeleton";

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
const JobSeekerTable = (props) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [id, setId] = useState("");
  const [modal, setModal] = useState(false);
  useEffect(() => {
    // setPageCount(Math.ceil(jobSeeker.totalDocs / itemsPerPage));
    dispatch(getPrivateJobSeeker(page, rowsPerPage));
  }, [page, rowsPerPage]);

  // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   setCurrentPage((event.selected + 1) * 1);
  // };

  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const jobSeeker = useSelector((state) => state.jobSeeker);
  // useEffect
  useEffect(() => {
    dispatch(getPrivateJobSeeker(page, rowsPerPage));
  }, []);

  return (
    <>
      <h1>Jobseekers ({jobSeeker.totalDocs})</h1>
      <div className="table-responsive">
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
          rows={jobSeeker.privateJobSeeker.map((cand) => {
            return {
              _id: cand._id,
              images: [cand.images],
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
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
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
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
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
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
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
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                <h5 style={{ margin: 0 }}>Posted Date</h5>
                {jobSeeker.jobSeeker &&
                jobSeeker.jobSeeker.createdAt &&
                jobSeeker.loading !== true ? (
                  <p>
                    {new Date(jobSeeker.jobSeeker.createdAt).toDateString()}
                  </p>
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
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
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}

                <h5 style={{ margin: 0 }}>SubCategory</h5>
                {jobSeeker &&
                jobSeeker.jobSeeker &&
                jobSeeker.jobSeeker.subCategory &&
                jobSeeker.loading !== true ? (
                  jobSeeker &&
                  jobSeeker.jobSeeker &&
                  jobSeeker.jobSeeker.subCategory && (
                    <p>
                      {captilizeFirstLetter(jobSeeker.jobSeeker.subCategory)}
                    </p>
                  )
                ) : (
                  <Skeleton
                    count={1}
                    style={{ height: "18px", width: "100%" }}
                  />
                )}
                <h5 style={{ margin: 0 }}>Views</h5>
                {jobSeeker &&
                jobSeeker.jobSeeker &&
                jobSeeker.jobSeeker.views &&
                jobSeeker.loading !== true ? (
                  jobSeeker &&
                  jobSeeker.jobSeeker &&
                  jobSeeker.jobSeeker.views ? (
                    <p>{jobSeeker.jobSeeker.views}</p>
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
                  color="success"
                  onClick={() => {
                    props.setTab("EDIT-JOBSEEKER");
                    props.setId(jobSeeker.jobSeeker._id);
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  className="warning"
                  onClick={() => {
                    dispatch(deleteJobSeeker(jobSeeker.jobSeeker._id));
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
              <td className="text-center">Name</td>
              <td className="text-center">Job info</td>
              <td className="text-center">Email</td>
              <td className="text-center">Experience</td>
              <td className="text-center">Action</td>
            </tr>
          </thead>
          <tbody>
            {jobSeeker.privateJobSeeker.length > 0 ? (
              jobSeeker.privateJobSeeker.map((candidate) => (
                <tr key={candidate._id}>
                  <td className="text-center">
                    {" "}
                    <Link to={`/job-detail/${candidate._id}`}>
                      {candidate.photo ? (
                        <img
                          src={fileURL(candidate.photo)}
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
                  <td className="text-center">
                    <strong>
                      {" "}
                      <Link to={`/job-seeker-detail/${candidate._id}`}>
                        {" "}
                        {candidate &&
                          candidate.name &&
                          capitalizeFirstLetter(candidate.name)}
                      </Link>
                    </strong>
                  </td>
                  <td className="text-left">
                    <Link to={`/job-seeker-detail/${candidate._id}`}>
                      {candidate.title.length > 40
                        ? capitalizeFirstLetter(
                            candidate.title.substring(0, 50) + "..."
                          )
                        : capitalizeFirstLetter(candidate.title)}
                    </Link>{" "}
                    <br />
                    <small>
                      Categor:{" "}
                      {candidate &&
                        candidate.category &&
                        capitalizeFirstLetter(candidate.category)}
                    </small>{" "}
                    <br />
                    <small>
                      Sub Categor:{" "}
                      {candidate &&
                        candidate.subCategory &&
                        capitalizeFirstLetter(candidate.subCategory)}
                    </small>{" "}
                  </td>

                  <td className="text-center">
                    {candidate &&
                      candidate.experience &&
                      capitalizeFirstLetter(candidate.experience)}
                  </td>

                  <td className="text-center">
                    {candidate &&
                      candidate.email &&
                      capitalizeFirstLetter(candidate.email)}
                  </td>

                  <td className="text-center">
                    <div className="input-group btn-block">
                      {
                        candidate.active === true ? (
                         

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
                          props.setTab("EDIT-JOBSEEKER");
                          props.setId(candidate._id);
                        }}
                        variant="contained"
                      >
                        EDIT
                      </Button>

                      <Button
                        size="large"
                        color="error"
                        variant="contained"
                        onClick={() => dispatch(deleteJobSeeker(candidate._id))}
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
      {/* {jobSeeker.loading === true ? <Loader /> : null} */}
    </>
  );
};

export default JobSeekerTable;

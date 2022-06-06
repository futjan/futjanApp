import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import imageSkeleton from "../image/catalog/demo/product/travel/10-80x80.jpg";
import { getJobsPrivate, deleteJob } from "../actions/jobAction";
import Loader from "../../utils/Loader";
import { Link } from "react-router-dom";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import ReactPaginate from "react-paginate";

const JobTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(jobFromStore.totalDocs / itemsPerPage));
    dispatch(getJobsPrivate(currentPage, itemsPerPage));
  }, [currentPage, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage((event.selected + 1) * 1);
  };

  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const jobFromStore = useSelector((state) => state.job);
  // useEffect
  useEffect(() => {
    dispatch(getJobsPrivate(currentPage, itemsPerPage));
  }, []);

  return (
    <>
      <h1>Jobs ({jobFromStore.totalDocs})</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <td className="text-center">Image</td>
              <td className="text-center">Job info</td>
              {/* <td className="text-center">Original Price</td> */}
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
                          // alt="Bougainvilleas on Lombard Street,  San Francisco, Tokyo"
                          // title="Bougainvilleas on Lombard Street,  San Francisco, Tokyo"
                          className="img-thumbnail"
                          width="80"
                        />
                      ) : (
                        <img
                          src={imageSkeleton}
                          // alt="Bougainvilleas on Lombard Street,  San Francisco, Tokyo"
                          // title="Bougainvilleas on Lombard Street,  San Francisco, Tokyo"
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
                          // <button
                          //   type="button"
                          //   className="btn btn-success"
                          //   onClick={() =>
                          //     dispatch(
                          //       surplusActivate({
                          //         id: job._id,
                          //         active: false,
                          //       })
                          //     )
                          //   }
                          // >
                          //   DEACTIVE
                          // </button>

                          <Button
                            color="inherit"
                            size="large"
                            // onClick={() =>
                            //   dispatch(
                            //     surplusActivate({
                            //       id: surplus._id,
                            //       active: false,
                            //     })
                            //   )
                            // }
                            variant="contained"
                          >
                            DEACTIVE
                          </Button>
                        ) : null
                        //  <Button
                        //     color="success"
                        //     size="large"
                        //     variant="contained"
                        //     onClick={() =>
                        //       dispatch(
                        //         surplusActivate({
                        //           id: surplus._id,
                        //           active: true,
                        //         })
                        //       )
                        //     }
                        //   >
                        //     ACTIVE
                        //   </Button>
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
        />
      </div>
      {jobFromStore.loading === true ? <Loader /> : null}
    </>
  );
};

export default JobTable;

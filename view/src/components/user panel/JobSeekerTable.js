import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import imageSkeleton from "../image/catalog/demo/product/travel/10-80x80.jpg";
import {
  getPrivateJobSeeker,
  deleteJobSeeker,
} from "../actions/jobSeekersAction";
import Loader from "../../utils/Loader";
import { Link } from "react-router-dom";
import fileURL from "../../utils/fileURL";
import capitalizeFirstLetter from "../../utils/captilizeFirstLetter";
import ReactPaginate from "react-paginate";

const JobSeekerTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(jobSeeker.totalDocs / itemsPerPage));
    dispatch(getPrivateJobSeeker(currentPage, itemsPerPage));
  }, [currentPage, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage((event.selected + 1) * 1);
  };

  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const jobSeeker = useSelector((state) => state.jobSeeker);
  // useEffect
  useEffect(() => {
    dispatch(getPrivateJobSeeker(currentPage, itemsPerPage));
  }, []);

  return (
    <>
      <h1>Jobs ({jobSeeker.totalDocs})</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <td className="text-center">Image</td>
              <td className="text-center">Name</td>
              <td className="text-center">Job info</td>
              {/* <td className="text-center">Original Price</td> */}
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
                      {candidate.jobTitle.length > 40
                        ? capitalizeFirstLetter(
                            candidate.jobTitle.substring(0, 50) + "..."
                          )
                        : capitalizeFirstLetter(candidate.jobTitle)}
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
                          // <button
                          //   type="button"
                          //   className="btn btn-success"
                          //   onClick={() =>
                          //     dispatch(
                          //       surplusActivate({
                          //         id: candidate._id,
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
        />
      </div>
      {jobSeeker.loading === true ? <Loader /> : null}
    </>
  );
};

export default JobSeekerTable;

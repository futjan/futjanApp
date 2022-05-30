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
  getReportById,
  getReports,
} from "../../../components/actions/reportAction";
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
  const report = useSelector((state) => state.report);

  // useEffect
  useEffect(() => {
    dispatch(getReports(page, rowsPerPage));
  }, []);

  return (
    <Page title="Dashboard: Surplus">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Reports
        </Typography>
        <Table
          title={"Reports"}
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
          rows={report.reports.map((report) => {
            return {
              title: report.reason,
              _id: report._id,
              category: report.onModel,
            };
          })}
          setId={setId}
          getOneProduct={getReportById}
          setModal={setModal}
          headCells={[
            {
              id: "reason",
              numeric: false,
              disablePadding: true,
              label: "Reason",
            },
            {
              id: "onModel",
              numeric: false,
              disablePadding: false,
              label: "Ad type",
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
          <h3>Report</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {report &&
            report.report &&
            report.report.ad &&
            report.report.ad.images &&
            report.loading === false ? (
              report.report.onModel === "jobseekers" ? (
                <img src={fileURL(report.report.ad.images)} width="100" />
              ) : (
                <img src={fileURL(report.report.ad.images[0])} width="100" />
              )
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
          </div>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <h5 style={{ margin: "0" }}>Title</h5>
              {report &&
              report.report &&
              report.report.ad &&
              report.report.ad.title &&
              report.loading === false ? (
                report &&
                report.report &&
                report.report.ad &&
                report.report.ad.title && (
                  <p>{captilizeFirstLetter(report.report.ad.title)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5 style={{ margin: "0" }}>Category</h5>

              {report &&
              report.report &&
              report.report.ad &&
              report.report.ad.category &&
              report.loading !== true ? (
                report &&
                report.report &&
                report.report.ad &&
                report.report.ad.category && (
                  <p>{captilizeFirstLetter(report.report.ad.category)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5 style={{ margin: "0" }}>Reason</h5>
              {report &&
              report.report &&
              report.report.reason &&
              report.loading !== true ? (
                report &&
                report.report &&
                report.report.reason && (
                  <p>{captilizeFirstLetter(report.report.reason)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
            </Grid>
            <Grid item xs={6}>
              <h5 style={{ margin: "0" }}>Report Date</h5>
              {report.report &&
              report.report.createdAt &&
              report.loading !== true ? (
                <p>{new Date(report.report.createdAt).toDateString()}</p>
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5 style={{ margin: "0" }}>ad Type</h5>
              {report &&
              report.report &&
              report.report.onModel &&
              report.loading !== true ? (
                report &&
                report.report &&
                report.report.onModel && (
                  <p>{captilizeFirstLetter(report.report.onModel)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}

              <h5 style={{ margin: "0" }}>Description</h5>
              {report &&
              report.report &&
              report.report.description &&
              report.loading !== true ? (
                report &&
                report.report &&
                report.report.description && (
                  <p>{captilizeFirstLetter(report.report.description)}</p>
                )
              ) : (
                <Skeleton count={1} style={{ height: "18px", width: "100%" }} />
              )}
            </Grid>
          </Grid>

          {report.loading === false && report.report && report.report._id ? (
            <div style={{ gap: "10px", display: "flex" }}>
              {/* <Button
                variant="contained"
                component={Link}
                // to={`/job-detail/${job.job._id}`}
              >
                Details
              </Button> */}
              {/* <Button
                variant="contained"
                onClick={() => {
                  if (report.report && report.report.active === true) {
                    // dispatch(reportActivate({ id: report.report._id, active: false }));
                  } else {
                    // dispatch(reportActivate({ id: report.report._id, active: true }));
                  }
                }}
              >
                {report.report && report.report.active === true
                  ? "DE Activate"
                  : "Activate"}
              </Button> */}
              {/* <Button
                variant="contained"
                color="error"
                className="warning"
                // onClick={() => dispatch(deleteJob(job.job._id))}
              >
                Delete
              </Button> */}
            </div>
          ) : null}
        </Box>
      </Modal>
    </Page>
  );
}

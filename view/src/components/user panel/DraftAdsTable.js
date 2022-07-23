import React, { useEffect, memo } from "react";
import { getDrafts, deleteDraft, getDraft } from "../actions/draftAds";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function DraftAdsTable(props) {
  const draftAds = useSelector((state) => state.draft.draftAds);
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(getDrafts());
  }, []);
  const getDraftFunc = (id, type) => {
    dispatch(getDraft(id));
    props.setTab("ADD");
    if (type === "surplus") {
      props.setAdd("surplus");
    } else if (type === "job") {
      props.setAdd("job");
    } else if (type === "jobseeker") {
      props.setAdd("candidiate");
    }
  };
  return (
    <>
      <h1>Draft Ads</h1>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, fontSize: "16px" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                Sr#
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                Draft Id
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                Ad Type
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {draftAds.map((row, i) => (
              <TableRow
                key={row.draft_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  {i + 1}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  {row.draft_id}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  {row.ad_Type}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ marginRight: "10px" }}
                    onClick={() => {
                      getDraftFunc(row.draft_id, row.ad_Type);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    className="warning"
                    onClick={() => {
                      dispatch(deleteDraft(row.draft_id));
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default memo(DraftAdsTable);

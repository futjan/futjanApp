import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import DefaultAvatar from "../components/image/profile-thumbnail.png";
// import { Outlet } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
//
import DashboardNavbar from "./layout/DashboardNavbar";
// import DashboardSidebar from "./layout/DashboardSidebar";
// import Dashboard from "./pages/dashboard/DashboardApp";
import Products from "./pages/products/Products";
import Jobs from "./pages/products/Jobs";
import JobSeeker from "./pages/products/JobSeekers";
import User from "./pages/users/User";
import Report from "./pages/report/Reports";
import useResponsive from "./hooks/useResponsive";

import Scrollbar from "./utils/Scrollbar";
import NavSection from "./utils/NavSection";
import navConfig from "./utils/NavConfig";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyleMain = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState("surplus");

  // const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  const auth = useSelector((state) => state.auth);

  return (
    // <div>Hello From adminoanel</div>
    <RootStyleMain>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      {/* <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
        setComponent={setComponent}
      /> */}
      <RootStyle>
        {!isDesktop && (
          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: { width: DRAWER_WIDTH },
            }}
          >
            {/* {renderContent} */}
            <Scrollbar
              sx={{
                height: 1,
                "& .simplebar-content": {
                  height: 1,
                  display: "flex",
                  flexDirection: "column",
                },
              }}
            >
              <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}></Box>

              <Box sx={{ mb: 5, mx: 2.5 }}>
                <Link underline="none" component={RouterLink} to="#">
                  <AccountStyle>
                    <Avatar src={DefaultAvatar} alt="photoURL" />
                    {/* <Box sx={{ ml: 2 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "text.primary" }}
                      >
                        
                        Abdul Wahab
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        
                        admin
                      </Typography>
                    </Box> */}
                  </AccountStyle>
                </Link>
              </Box>
              <NavSection navConfig={navConfig} setComponent={setComponent} />
            </Scrollbar>
          </Drawer>
        )}

        {isDesktop && (
          <Drawer
            open
            variant="persistent"
            PaperProps={{
              sx: {
                width: DRAWER_WIDTH,
                bgcolor: "background.default",
                borderRightStyle: "dashed",
              },
            }}
          >
            <Scrollbar
              sx={{
                height: 1,
                "& .simplebar-content": {
                  height: 1,
                  display: "flex",
                  flexDirection: "column",
                },
              }}
            >
              {/* <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
                
              </Box> */}

              <Box sx={{ mb: 5, mx: 2.5 }}>
                <Link underline="none" component={"div"}>
                  <AccountStyle>
                    <Avatar src={DefaultAvatar} alt="photoURL" />
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "text.primary", fontSize: "16px" }}
                      >
                        {auth && auth.user && auth.user.name}
                        {/* Abdul Wahab */}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontSize: "14px" }}
                      >
                        {auth && auth.user && auth.user.role}
                      </Typography>
                    </Box>
                  </AccountStyle>
                </Link>
              </Box>
              <NavSection
                navConfig={navConfig}
                component={component}
                setComponent={setComponent}
              />
            </Scrollbar>
          </Drawer>
        )}
      </RootStyle>
      <MainStyle>
        {component === "surplus" ? <Products /> : null}
        {component === "job" ? <Jobs /> : null}
        {component === "job seeker" ? <JobSeeker /> : null}
        {component === "user" ? <User /> : null}
        {component === "report" ? <Report /> : null}
      </MainStyle>
    </RootStyleMain>
  );
}

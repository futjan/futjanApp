import { useState } from "react";
// import PropTypes from 'prop-types';
import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";
// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
//
import Iconify from "./Iconify";

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  fontSize: "16px",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 30,
  height: 30,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// ----------------------------------------------------------------------

// NavItem.propTypes = {
//   item: PropTypes.object,
//   active: PropTypes.func,
// };

function NavItem({ item, active, setComponent }) {
  const theme = useTheme();
  console.log(item);
  console.log(active);
  const isActiveRoot = active;

  const { title, icon, info, children } = item;

  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  };

  const activeSubStyle = {
    color: "text.primary",
    fontWeight: "fontWeightMedium",
  };

  // if (children) {
  //   return (
  //     <>
  //       <ListItemStyle
  //         onClick={handleOpen}
  //         sx={{
  //           ...(isActiveRoot && activeRootStyle),
  //         }}
  //       >
  //         <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
  //         <ListItemText disableTypography primary={title} />
  //         {info && info}
  //         <Iconify
  //           icon={
  //             open
  //               ? "eva:arrow-ios-downward-fill"
  //               : "eva:arrow-ios-forward-fill"
  //           }
  //           sx={{ width: 16, height: 16, ml: 1 }}
  //         />
  //       </ListItemStyle>

  //       <Collapse in={open} timeout="auto" unmountOnExit>
  //         <List component="div" disablePadding>
  //           {children.map((item) => {
  //             const { title } = item;
  //             const isActiveSub = active;

  //             return (
  //               <ListItemStyle
  //                 key={title}
  //                 component={"div"}
  //                 // to={path}
  //                 onClick={setComponent}
  //                 sx={{
  //                   ...(isActiveSub && activeSubStyle),
  //                 }}
  //               >
  //                 <ListItemIconStyle>
  //                   <Box
  //                     component="span"
  //                     sx={{
  //                       width: 4,
  //                       height: 4,
  //                       display: "flex",
  //                       borderRadius: "50%",
  //                       alignItems: "center",
  //                       justifyContent: "center",
  //                       bgcolor: "text.disabled",
  //                       transition: (theme) =>
  //                         theme.transitions.create("transform"),
  //                       ...(isActiveSub && {
  //                         transform: "scale(2)",
  //                         bgcolor: "primary.main",
  //                       }),
  //                     }}
  //                   />
  //                 </ListItemIconStyle>
  //                 <ListItemText disableTypography primary={title} />
  //               </ListItemStyle>
  //             );
  //           })}
  //         </List>
  //       </Collapse>
  //     </>
  //   );
  // }

  return (
    <ListItemStyle
      // component={RouterLink}
      component={"div"}
      // to={path}
      onClick={() => setComponent(title)}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

// NavSection.propTypes = {
//   navConfig: PropTypes.array,
// };

export default function NavSection({
  navConfig,
  component,
  setComponent,
  ...other
}) {
  // const { pathname } = useLocation();

  // const match = (path) =>
  //   path ? !!matchPath({ path, end: false }, pathname) : false;
  console.log(component);
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem
            key={item.title}
            item={item}
            active={component === item.title ? true : false}
            setComponent={() => setComponent(item.title)}
          />
        ))}
      </List>
    </Box>
  );
}

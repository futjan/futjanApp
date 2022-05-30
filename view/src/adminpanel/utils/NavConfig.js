// component
import Iconify from "../utils/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  // {
  //   title: "dashboard",
  //   // path: "/dashboard/app",
  //   icon: getIcon("eva:pie-chart-2-fill"),
  // },
  {
    title: "user",
    // path: "/dashboard/user",
    icon: getIcon("eva:people-fill"),
  },
  {
    title: "surplus",
    // path: "/dashboard/surplus",
    icon: getIcon("eva:shopping-bag-fill"),
  },
  {
    title: "job",
    // path: "/dashboard/job",
    icon: getIcon("eva:briefcase-fill"),
  },
  {
    title: "job seeker",
    // path: "/dashboard/job",
    icon: getIcon("eva:person-fill"),
  },
  {
    title: "report",
    // path: "/dashboard/job",
    icon: getIcon("eva:file-text-fill"),
  },
  // {
  //   title: "login",
  //   path: "/login",
  //   icon: getIcon("eva:lock-fill"),
  // },
  // {
  //   title: "register",
  //   path: "/register",
  //   icon: getIcon("eva:person-add-fill"),
  // },
  // {
  //   title: "Not found",
  //   path: "/404",
  //   icon: getIcon("eva:alert-triangle-fill"),
  // },
];

export default navConfig;

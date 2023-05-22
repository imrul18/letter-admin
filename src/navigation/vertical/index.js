import { Circle, Home, Users } from "react-feather";

export default [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Circle size={20} />,
    isAccess: true,
    navLink: "/dashboard",
  },
  {
    id: "post_office",
    title: "Post Office",
    icon: <Home size={20} />,
    isAccess: true,
    navLink: "/post_office",
  },
  {
    id: "user",
    title: "User",
    icon: <Users size={20} />,
    isAccess: true,
    navLink: "/user",
  },
];

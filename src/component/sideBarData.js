import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
export const SideBarData = [
  {
    title: "Trucks",
    icon: <LocalShippingIcon />,
    path: "/trucks",
  },
  {
    title: "Buses",
    icon: <DirectionsBusIcon />,
    path: "/buses",
  },
  {
    title: "Vans",
    icon: <AirportShuttleIcon />,
    path: "/vans",
  },

  {
    title: "Cars",
    icon: <DirectionsCarIcon />,
    path: "/cars",
  },
  {
    title: "MotorCycles",
    icon: <TwoWheelerIcon />,
    path: "/motors",
  },
];

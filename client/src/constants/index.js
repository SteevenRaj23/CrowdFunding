import { createCampaign, dashboard, logout, payment, profile } from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "Profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "Rewards",
    imgUrl: payment,
    link: "/",
    disabled: true,
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    
  },
];

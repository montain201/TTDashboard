/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Images
// import kal from "assets/images/kal-visuals-square.jpg";
// import marie from "assets/images/marie.jpg";
import ivana from "assets/images/ivana-square.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const profilesListData = [
  {
    image: team3,
    name: "مریم فتاحی",
    description: "سلام. جهت انجام این تسک به اطلاعات بیشتری ...",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "پاسخ",
    },
  },
  {
    image: team4,
    name: "مهدی یارلو",
    description: "پیچیدگی این تسک بالاست ...",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "پاسخ",
    },
  },
  {
    image: ivana,
    name: "خطیب زاده",
    description: "درخواست مرخصی ...",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "پاسخ",
    },
  },
  {
    image: team4,
    name: "رحمان پور",
    description: "عصر به خیر. لطفا در خصوص ...",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "پاسخ",
    },
  },
  {
    image: team3,
    name: "مهر علی",
    description: "جهت انجام این تسک اطلاعات بیشتری ...",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "پاسخ",
    },
  },
];

export default profilesListData;

/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SuiTypography>
      <SuiBox width="8rem">
        <SuiProgress value={value} color={color} variant="gradient" label={false} />
      </SuiBox>
    </SuiBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const projectsTableData = {
  columns: [
    { name: "پروژه", align: "left" },
    { name: "بودجه", align: "left" },
    { name: "وضعیت", align: "left" },
    { name: "پیشرفت", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      پروژه: [logoSpotify, "سامانه آزمایشگاه فولاد سازی"],
      بودجه: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $2,500
        </SuiTypography>
      ),
      وضعیت: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          اتمام
        </SuiTypography>
      ),
      پیشرفت: <Completion value={60} color="info" />,
      action,
    },
    {
      پروژه: [logoInvesion, "سامانه آزمایشگاه گندله سازی"],
      بودجه: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $5,000
        </SuiTypography>
      ),
      وضعیت: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          فاز تحلیل/در حال انجام
        </SuiTypography>
      ),
      پیشرفت: <Completion value={100} color="success" />,
      action,
    },
    {
      پروژه: [logoJira, "سامانه آزمایشگاه احیاء مستقیم"],
      بودجه: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $3,400
        </SuiTypography>
      ),
      وضعیت: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          ارائه پروپوزال فنی
        </SuiTypography>
      ),
      پیشرفت: <Completion value={30} color="error" />,
      action,
    },
    {
      پروژه: [logoSlack, "سامانه برنامه ریزی تولید فولاد سازی"],
      بودجه: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $1,400
        </SuiTypography>
      ),
      وضعیت: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          ارائه پروپوزال فنی جهت تکمیل
        </SuiTypography>
      ),
      پیشرفت: <Completion value={0} color="error" />,
      action,
    },
    {
      پروژه: [logoWebDev, "سامانه برنامه ریزی تولید گندله سازی"],
      بودجه: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $14,000
        </SuiTypography>
      ),
      وضعیت: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          در مرحله عقد قرارداد
        </SuiTypography>
      ),
      پیشرفت: <Completion value={80} color="info" />,
      action,
    },
    {
      پروژه: [logoXD, "پروژه مانیتورینگ تولید"],
      بودجه: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $2,300
        </SuiTypography>
      ),
      وضعیت: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          ارائه پروپوزال فنی
        </SuiTypography>
      ),
      پیشرفت: <Completion value={100} color="success" />,
      action,
    },
  ],
};

export default projectsTableData;

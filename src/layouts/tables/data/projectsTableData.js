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
    { name: "TicketNo", align: "left" },
    { name: "TicketType", align: "left" },
    { name: "وضعیت", align: "left" },
    { name: "پیشرفت", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      TicketNo: [logoSpotify, "سامانه آزمایشگاه فولاد سازی"],
      TicketType: (
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
    }
  ],
};

export default projectsTableData;

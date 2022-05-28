// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiProgress from "components/SuiProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "پروژه", align: "left" },
      { name: "أعضاء", align: "left" },
      { name: "بودجه", align: "center" },
      { name: "پیشرفت", align: "center" },
    ],

    rows: [
      {
        پروژه: [logoXD, "گندله سازی 2"],
        أعضاء: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </SuiBox>
        ),
        بودجه: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </SuiTypography>
        ),
        پیشرفت: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" variant="gradient" label={false} />
          </SuiBox>
        ),
      },
      {
        پروژه: [logoAtlassian, "مانیتورینگ"],
        أعضاء: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </SuiBox>
        ),
        بودجه: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </SuiTypography>
        ),
        پیشرفت: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={10} color="info" variant="gradient" label={false} />
          </SuiBox>
        ),
      },
      {
        پروژه: [logoSlack, "هوشمند سازی"],
        أعضاء: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </SuiBox>
        ),
        بودجه: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </SuiTypography>
        ),
        پیشرفت: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={100} color="success" variant="gradient" label={false} />
          </SuiBox>
        ),
      },
      {
        پروژه: [logoSpotify, "برنامه ریزی تولید"],
        أعضاء: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </SuiBox>
        ),
        بودجه: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </SuiTypography>
        ),
        پیشرفت: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={100} color="success" variant="gradient" label={false} />
          </SuiBox>
        ),
      },
      {
        پروژه: [logoJira, "هتلینگ"],
        أعضاء: (
          <SuiBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </SuiBox>
        ),
        بودجه: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            $500
          </SuiTypography>
        ),
        پیشرفت: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={25} color="info" variant="gradient" label={false} />
          </SuiBox>
        ),
      },
      {
        پروژه: [logoInvesion, "هات شارژ"],
        أعضاء: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </SuiBox>
        ),
        بودجه: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            $2,000
          </SuiTypography>
        ),
        پیشرفت: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={40} color="info" variant="gradient" label={false} />
          </SuiBox>
        ),
      },
    ],
  };
}

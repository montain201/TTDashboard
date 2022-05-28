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

// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Footer() {
  return (
    <SuiBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <SuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SuiTypography component="a" href="#" variant="body2" color="secondary">
                شرکت
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SuiTypography component="a" href="#" variant="body2" color="secondary">
                درباره ما
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <SuiTypography component="a" href="#" variant="body2" color="secondary">
                قوانین و مقررات
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SuiTypography component="a" href="#" variant="body2" color="secondary">
                محصولات
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SuiTypography component="a" href="#" variant="body2" color="secondary">
                وبلاگ
              </SuiTypography>
            </SuiBox>
            <SuiBox>
              <SuiTypography component="a" href="#" variant="body2" color="secondary">
                سفارشات
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <SuiBox display="flex" justifyContent="center" mt={1} mb={3}>
            <SuiBox mr={3} color="secondary">
              <FacebookIcon fontSize="small" />
            </SuiBox>
            <SuiBox mr={3} color="secondary">
              <TwitterIcon fontSize="small" />
            </SuiBox>
            <SuiBox mr={3} color="secondary">
              <InstagramIcon fontSize="small" />
            </SuiBox>
            <SuiBox mr={3} color="secondary">
              <PinterestIcon fontSize="small" />
            </SuiBox>
            <SuiBox color="secondary">
              <LinkedInIcon fontSize="small" />
            </SuiBox>
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <SuiTypography variant="body2" color="secondary">
            .کلیه حقوق این سامانه متعلق به شرکت سازه های نرم افزاری پایدار می باشد
          </SuiTypography>
        </Grid>
      </Grid>
    </SuiBox>
  );
}

export default Footer;

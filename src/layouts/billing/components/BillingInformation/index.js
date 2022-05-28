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
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <SuiBox pt={3} px={2}>
        <SuiTypography variant="h6" fontWeight="medium">
          اطلاعات مالی
        </SuiTypography>
      </SuiBox>
      <SuiBox pt={1} pb={2} px={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="مهدی صبوری"
            company="ارزش آفرینان پاسارگاد"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="منصور احمدی"
            company="تلاش گستر فن آوری"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="امور مالی"
            company="شرکت خدمات انفورماتیک"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default BillingInformation;

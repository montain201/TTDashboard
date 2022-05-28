/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";

// Images
import abolfazli from "assets/images/abolfazli.jpg";
import farid from "assets/images/farid.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" color="secondary">
          {email}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

function Function({ job, org }) {
  return (
    <SuiBox display="flex" flexDirection="column">
      <SuiTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SuiTypography>
      <SuiTypography variant="caption" color="secondary">
        {org}
      </SuiTypography>
    </SuiBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "نام", align: "left" },
    { name: "سمت", align: "left" },
    { name: "وضعیت", align: "center" },
    { name: "استخدام", align: "center" },
    { name: "فعالیت", align: "center" },
  ],

  rows: [
    {
      نام: <Author image={team2} name="قدیر فرزانه" email="montain201@gmail.com" />,
      سمت: <Function job="مدیر پروژه" org="سنپاد" />,
      وضعیت: (
        <SuiBadge variant="gradient" badgeContent="آنـلاین" color="success" size="xs" container />
      ),
      استخدام: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SuiTypography>
      ),
      فعالیت: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          ویرایش
        </SuiTypography>
      ),
    },
    {
      نام: <Author image={abolfazli} name="سلیمه ابوالفضلی" email="abolfazli@gmail.com" />,
      سمت: <Function job="برنامه نویس" org="پروژه آزمایشگاه گندله سازی" />,
      وضعیت: (
        <SuiBadge variant="gradient" badgeContent="آفـلاین" color="secondary" size="xs" container />
      ),
      استخدام: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SuiTypography>
      ),
      فعالیت: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          ویرایش
        </SuiTypography>
      ),
    },
    {
      نام: <Author image={farid} name="سجاد فرید" email="farid.sajad@gmail.com" />,
      سمت: <Function job="برنامه نویس" org="پروژه آزمایشگاه فولاد سازی" />,
      وضعیت: (
        <SuiBadge variant="gradient" badgeContent="آنـلاین" color="success" size="xs" container />
      ),
      استخدام: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SuiTypography>
      ),
      فعالیت: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          ویرایش
        </SuiTypography>
      ),
    },
    {
      نام: <Author image={team3} name="رضا فلاح" email="fallah.reza@gmail.com" />,
      سمت: <Function job="برنامه نویس" org="پروژه آزمایشگاه احیاء مستقیم" />,
      وضعیت: (
        <SuiBadge variant="gradient" badgeContent="آنـلاین" color="success" size="xs" container />
      ),
      استخدام: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SuiTypography>
      ),
      فعالیت: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          ویرایش
        </SuiTypography>
      ),
    },
    {
      نام: <Author image={team2} name="حسین امیری" email="amiri.hossein@gmail.com" />,
      سمت: <Function job="کارشناس فرآیند" org="سامانه برنامه ریزی تولید فولاد سازی" />,
      وضعیت: (
        <SuiBadge variant="gradient" badgeContent="آفـلاین" color="secondary" size="xs" container />
      ),
      استخدام: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </SuiTypography>
      ),
      فعالیت: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          ویرایش
        </SuiTypography>
      ),
    },
    {
      نام: <Author image={team4} name="الهام نصیری" email="nasirielham@yahoo.com" />,
      سمت: <Function job="برنامه نویس" org="سامانه برنامه ریزی تولید فولاد سازی" />,
      وضعیت: (
        <SuiBadge variant="gradient" badgeContent="آفـلاین" color="secondary" size="xs" container />
      ),
      استخدام: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SuiTypography>
      ),
      فعالیت: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          ویرایش
        </SuiTypography>
      ),
    },
  ],
};

export default authorsTableData;

import Card from "@mui/material/Card";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import { useSoftUIController, setDirection } from "context";
import SuiButton from "components/SuiButton";
import SuiBox from "components/SuiBox";
import Table from "examples/Tables/Table";
import projectsTableData from "layouts/tables/data/projectsTableData";
import SuiTypography from "components/SuiTypography";
import SuiAlert from "components/SuiAlert";
import Icon from "@mui/material/Icon";
import Modal from "./modalAdd";

export default function Ticket() {
  const [, dispatch] = useSoftUIController();
  const { columns, rows } = projectsTableData;
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, "rtl");

    return () => setDirection(dispatch, "ltr");
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiButton
        variant="contained"
        color="info"
        onClick={open}
        // data-bs-toggle="modal"
        // data-bs-target="#exampleModal"
      >
        ثبت تیکت جدید
      </SuiButton>
      {showDialog && (
        <SuiAlert color="dark" dismissible width="30%">
          <Icon fontSize="small">thumb_up</Icon>&nbsp;عملیات ثبت با موفقیت انجام شد
        </SuiAlert>
      )}
      <br />
      <br />
      <Card>
        <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <SuiTypography variant="h6">جدول پروژه ها</SuiTypography>
        </SuiBox>
        <SuiBox
          sx={{
            "& .MuiTableRow-root:not(:last-child)": {
              "& td": {
                borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              },
            },
          }}
        >
          <Table columns={columns} rows={rows} />
        </SuiBox>
      </Card>
      <Modal />
    </DashboardLayout>
  );
}

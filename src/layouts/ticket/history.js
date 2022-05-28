
import Grid from "@mui/material/Grid";
import * as AiIcons from 'react-icons/ai';
import Cookies from 'js-cookies';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { useEffect, useState } from "react";
import { useSoftUIController, setDirection } from "context" ;
import AddModal from "./modalAdd";
import { useLocation } from "react-router-dom";

import SuiButton from "components/SuiButton";
import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import { variables } from "components/Variables";
import Table from 'react-bootstrap/Table'
import TicketTitle from './tickettitle';
export default function History()
{
        const [, dispatch] = useSoftUIController();
        const [History, setHistory] = useState('');
        
        const {state} = useLocation();
        const { ticket } = state; // Read values passed on state

        useEffect(() => {
            setDirection(dispatch, "rtl");

            return () => setDirection(dispatch, "ltr");
          }, []);


    useEffect(() => {
      const token = Cookies.getItem('jwt');

        fetch(variables.API_URL+'Ticket/GetTicketDtl?tid='+ticket.TicketId,{
          method:'GET',
          headers:{
              'Authorization': 'Bearer '+token,
              'Content-Type':'application/json' }
          })
          .then(response=>response.json())
          .then(data=>{setHistory(data);
           });
          },[]);

   const ticketHistory = Array.from(History);

   function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
        .toString()
        .replace(/\d/g, x => farsiDigits[x]);
}


        return(
        <DashboardLayout>
         <DashboardNavbar />
         <SuiBox mb={3}>

        </SuiBox>
        <TicketTitle  ticket={ticket}/>
        <br />
           <Card>
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

                <Table responsive>
                <thead>
                    <tr>
                        <th><SuiTypography variant="h6">وضعیت</SuiTypography></th>
                        <th><SuiTypography variant="h6">کـاربر</SuiTypography></th>
                        <th><SuiTypography variant="h6">تاریخ</SuiTypography></th>
                        <th><SuiTypography variant="h6">شرح</SuiTypography></th>
                    </tr>
                </thead>
                <tbody>
                {ticketHistory.map(hst=>
                    <tr key={hst.TicketId}>
                    <td>
                      <SuiTypography variant="h6">{
                        hst.TicketState == "Created"? "ایجاد شده":
                        hst.TicketState == "UnderCheck"?"درحال بررسی":
                        hst.TicketState == "Done"?"انجام شده":
                        hst.TicketState == "RoleBack"?"مرجوع جهت بررسی مجدد": "مورد تایید"
                    }</SuiTypography>
                    </td>
                    <td><SuiTypography variant="h6">{hst.UserName}</SuiTypography></td>
                    <td><SuiTypography variant="h6">{toFarsiNumber(hst.CreationDate)}</SuiTypography></td>
                    <td><SuiTypography variant="h6">{hst.TicketStatusDescription }</SuiTypography></td>
                    </tr>
                    )}
                </tbody>
                </Table>
                </SuiBox>
          </Card>
        </DashboardLayout>
    );

}

import Grid from "@mui/material/Grid";
import * as AiIcons from 'react-icons/ai';
import Cookies from 'js-cookies';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { useEffect, useState } from "react";
import { useSoftUIController, setDirection } from "context" ;
import AddModal from "./modalAdd";
import {Route, useNavigate} from "react-router-dom";

import SuiButton from "components/SuiButton";
import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import { variables } from "components/Variables";
import Table from 'react-bootstrap/Table'
import editLogo from "assets/images/logos/edit12.png";
import recycleBin from "assets/images/logos/recyclebin10.png";
import status from "assets/images/logos/status15.png";
import history from "assets/images/logos/history3.png";

export default function Ticket()
{ 
        const [, dispatch] = useSoftUIController();
        const [tickets,setTickets] = useState('');
        const [modalTitle,setModalTitle] = useState('');
        const [TicketStatusId,setTicketStatusId] = useState('');
        const [TicketType,setTicketType] = useState('');
        const [TicketDescription,setTicketDescription] = useState('');
        const navigate = useNavigate()
        
        const [TicketToModal, ] = useState([
            {
              modalTitleVal: modalTitle,
              TicketStatusIdVal: TicketStatusId,
              TicketTypeVal : TicketType,
              TicketDescriptionVal : TicketDescription
            }
        ]);

        useEffect(() => {
            setDirection(dispatch, "rtl");
        
            return () => setDirection(dispatch, "ltr");
          }, []);
 
    
    useEffect(() => {
        const token = Cookies.getItem('jwt');
        fetch(variables.API_URL+'ticket',{
            method:'GET',
            headers:{'Authorization': 'Bearer '+token, 
                 'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(data=>{setTickets(data)
      });
      },[]);
      
    function  addClick()
      {
        setModalTitle("افزودن تیکت");
        setTicketStatusId(0);
        setTicketType("");
        setTicketDescription("");
       }
    const data = Array.from(tickets);
        return(
        <DashboardLayout>
         <DashboardNavbar />
         <SuiBox mb={3}>
            
        <Grid item xs={12} sm={6} xl={3}>
            <SuiButton
                variant="contained"
                color="info"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
            ثبت تیکت جدید
            </SuiButton>
        </Grid>
          
        </SuiBox>
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
            {/* <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                        <p>عملیات</p>
                        </div>
                    </div>
                   
                    {data.map(tck=>
                    <div className="row">
                       
                        <div className="col-sm-2">
                        <SuiTypography variant="h6">{tck.TicketStatusDescription}</SuiTypography>

                        </div>
                        <div className="col-sm-2">
                        <SuiTypography variant="h6">

                        </SuiTypography>

                        </div>
                    </div>

                    )}
            </div> */}
         

                <Table responsive>
                <thead>
                    <tr>
                        <th><SuiTypography variant="h6">شناسه</SuiTypography></th>
                        <th><SuiTypography variant="h6">شماره</SuiTypography></th>
                        <th><SuiTypography variant="h6">نوع</SuiTypography></th>
                        <th><SuiTypography variant="h6">وضعیت</SuiTypography></th>
                        <th><SuiTypography variant="h6">کاربر</SuiTypography></th>
                        <th><SuiTypography variant="h6">تاریخ</SuiTypography></th>
                        <th><SuiTypography variant="h6">توضیحات</SuiTypography></th>
                        <th><SuiTypography variant="h6">عملیات</SuiTypography></th>
                    </tr>
                </thead>
                <tbody>
                {data.map(tck=>
                    <tr key={tck.TicketStatusId}>
                    <td><SuiTypography variant="h6">{tck.TicketId}</SuiTypography></td>
                    <td><SuiTypography variant="h6">{tck.TicketNo}</SuiTypography></td>
                    <td><SuiTypography variant="h6">{tck.TicketType == "Development" ? "توسعه": "باگ"}</SuiTypography></td>
                    <td><SuiTypography variant="h6">{
                            tck.TicketState == "Created"? "ایجاد شده":
                            tck.TicketState == "UnderCheck"?"درحال بررسی":
                            tck.TicketState == "Done"?"انجام شده":
                            tck.TicketState == "RoleBack"?"مرجوع جهت بررسی مجدد":
                            "مورد تایید"
                        }</SuiTypography>
                    </td>
                    <td><SuiTypography variant="h6">{tck.UserName}</SuiTypography></td>
                    <td><SuiTypography variant="h6">{tck.CreationDate}</SuiTypography></td>
                    <td><SuiTypography variant="h6">{tck.TicketStatusDescription}</SuiTypography></td>
                    <td>
                        <SuiTypography variant="h6">
                         
                            <button type ="button" className="btn btn-light mr-1"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.addClick()} >
                            <SuiBox component="img" src={editLogo} alt="edit" mr={1} />
                            </button>
                            
                            <button type ="button" className="btn btn-light mr-1"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.addClick()} >
                            <SuiBox component="img" src={recycleBin} alt="edit" mr={1} />
                            </button>
                            
                            <button type ="button" className="btn btn-light mr-1" data-bs-toggle="modal"  data-bs-target="#ticketStateModal"   onClick={()=>this.editStatusClick(tck)}>
                            {/* <AiIcons.AiFillNotification /> */}
                            <SuiBox component="img" src={status} alt="edit" mr={1} />
                            </button>

                            <button type ="button" className="btn btn-light mr-1"  onClick={()=>navigate('/ticket/history', { state: { ticket: tck }})}>
                            <SuiBox component="img" src={history} alt="edit" mr={1} />
                                
                            </button>
                        </SuiTypography>
                    </td>
                    </tr>
                    )}
                </tbody>
                </Table>
                </SuiBox>
          </Card>
           
        <AddModal  ticketToModal={TicketToModal} />
        {/* { OpenModal&<HistoryModal   ticketToModal={CurrentTicket} />}             */}
        </DashboardLayout>
    );
  
}

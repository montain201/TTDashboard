import React from "react";
import SuiButton from "components/SuiButton";
import { variables } from "components/Variables";

import { useEffect, useState } from "react";
import Cookies from 'js-cookies';

export default function HistoryModal(ticketToModal) {
  const[TicketId,setTicketId] = useState("");
  const [TicketHistory,setTicketHistory] = useState('');
  
function RefreshHistory(ticketId){
  
  const token = Cookies.getItem('jwt');
  
  fetch(variables.API_URL+'Ticket/GetTicketDtl?tid='+ticketId,{
      method:'GET',
      headers:{
          'Authorization': 'Bearer '+token, 
          'Content-Type':'application/json' }
      })
      .then(response=>response.json())
      .then(data=>{setTicketHistory({data});
       });
      }
  
      useEffect(() => {
        setTicketId(ticketToModal.TicketId);
        RefreshHistory(TicketId);
      });
      
    const ticketHistory = Array.from(TicketHistory);
  return (
    <div className="modal fade" id="tickethistorymodal" tableindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
          <b>{ticketHistory.TicketNo}</b>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <h5 className="moal-title">ثبت تیکت</h5>
          </div>
          <div className="modal-body">
            
          <table className="table table-striped tablertl">
                                    <thead>
                                        <tr>
                                            <th>State</th>
                                            <th>User</th>
                                            <th>Date</th>
                                            <th>Description</th>
                                        
                                        </tr>
                                    </thead>
                                        <tbody>
                                        {ticketHistory.map(tck=>
                                                <tr>
                                                    <td>{tck.TicketState}</td>
                                                    <td>{tck.UserName}</td>
                                                    <td>{tck.CreationDate}</td>
                                                    <td>{tck.TicketStatusDescription}</td>
                                                </tr>
                                                )}
                                        </tbody>
                                </table>

          </div>
        </div>
      </div>
    </div>
  );
}

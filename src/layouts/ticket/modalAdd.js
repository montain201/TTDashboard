import React from "react";
import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";
import SuiTypography from "components/SuiTypography";
import { variables } from "components/Variables";

import { useState } from "react";
import Cookies from 'js-cookies';

export default function AddModal(props) {
  const[TicketType,setTicketType] = useState("");
  const[TicketDescription,setTicketDescription] = useState("");

  function AttachmentUpload(e)
  {
    e.preventDefault();

    const formData = new FormData();
    const files = e.target.files;

        for (let i = 0; i < files.length; i++) {
            formData.append(`attachment[${i}]`, files[i])
        }
    //formData.append("file",e.target.files[2],e.target.files[2].name);
    
    fetch(variables.API_URL+'employee/savefile',{
        method:'POST',
        body:formData,
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        this.setState({Attachment:data});
    })
}

function CreateClick(){
  const tt = TicketType;
  const token = Cookies.getItem('jwt');
  if(tt == '' || tt == 'Please Select')
  {return;}
  fetch(variables.API_URL+'ticket',{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Authorization': 'Bearer '+token, 
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          TicketType:TicketType,
          TicketDescription:TicketDescription,
          // DateOfJoining:this.state.DateOfJoining,
           //Attachment:this.state.Attachment,
      })
  })
  .then(res=>res.json())
  .then((result)=>{
      alert(result);
      this.refreshList();
  },(error)=>{
      alert('Failed');
  });
}

  return (
    <div className="modal fade" id="exampleModal" tableindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <h5 className="moal-title">{props.modalTitleVal}</h5>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-row bd-highlight mb-2">
              <div className="p-2 w-100 bd-highlight">
                <select className="form-select" onChange={event => setTicketType(event.target.options.selectedIndex)} value={props.TicketTypeVal}>
                  <option key="NoOne">نوع تیکت</option>
                  <option key="Development">درخواست توسعه</option>
                  <option key="Bug">باگ نرم افزاری</option>
                </select>
                <SuiInput placeholder="شرح تیکت..." multiline rows={5} onChange={event => setTicketDescription(event.target.value)} value={props.TicketDescriptionVal} />
                <SuiInput type="file" className="form-control" onChange={AttachmentUpload} multiple/>
                <SuiTypography variant="overline" color="info" textGradient>
                  امکان انتخاب چندین فایل وجود دارد
                </SuiTypography>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <SuiButton
              variant="contained"
              color="success"
              onClick={()=>CreateClick()}
            >
              ثبت تیکت جدید
            </SuiButton>
          </div>
        </div>
      </div>
    </div>
  );
}



import { useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import {Navigate } from 'react-router-dom';
import { variables } from 'components/Variables';
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import { useSoftUIController, setDirection } from "context";

function SignIn(props) {
  const [rememberMe, setRememberMe] = useState(true);
  const [, dispatch] = useSoftUIController();
  const [username,setUserName] = useState('');
  const[redirect,setRedirect] = useState(false);
  const [password,setPassword] = useState('');

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
// Changing the direction to rtl
    useEffect(() => {
      setDirection(dispatch, "rtl");

      return () => setDirection(dispatch, "ltr");
    }, []);
    
  const submit = async (e: SyntheticEvent)=>{
    e.preventDefault();

    const response =  await fetch(variables.API_AUTH +'Login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        credentials:'include',
        body:JSON.stringify({
            username,
            password
        })
    });
    const content = await response.json();
   
    if(content.message == 'success')
     { 
        setRedirect(true);
     }
     else
     {
         alert(variables.API_AUTH+content.message);
     }
  }
  if(redirect)
  {
      return(<Navigate  to="/dashborad" />)
  }
  

  return (
   
    <CoverLayout
      title="احـراز هویت"
      description="نام کاربری و کلمه عبور خود را وارد نمایید"
      image={curved9}
    >
        <SuiBox component="form" role="form"  onSubmit={submit}>
          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                نام کاربری(پست الکترونیک)
              </SuiTypography>
            </SuiBox>
            <SuiInput  placeholder="نام کاربری" onChange={event => setUserName(event.target.value)}/>
          </SuiBox>
          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                کلمه عبور
              </SuiTypography>
            </SuiBox>
            <SuiInput type="password" placeholder="کلمه عبور" onChange={event => setPassword(event.target.value)}/>
          </SuiBox>
          <SuiBox display="flex" alignItems="center">
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <SuiTypography
              variant="button"
              fontWeight="regular"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;مرا به خاطر بسپار
            </SuiTypography>
          </SuiBox>
          <SuiBox mt={4} mb={1}>
            <SuiButton type="submit" variant="gradient" color="info" fullWidth>
              ورود
            </SuiButton>
          </SuiBox>
          <SuiBox mt={3} textAlign="center">
            <SuiTypography variant="button" color="text" fontWeight="regular">
              آیا اطلاعات کاربری ندارید؟
              {/* Don&apos;t have an account?{" "} */}
              <SuiTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                ثبت نام کنید
              </SuiTypography>
            </SuiTypography>
          </SuiBox>
        </SuiBox>
    </CoverLayout>
  );
}

export default SignIn;

import React from "react";
import { Container, Row } from "rsuite";
import FormLogin from "../Components/Forms/FormLogin";

function Login() {
  return (
    <Container>
      <div className="d-flex flex-column mt-5  align-items-center ">
        <FormLogin/>
      </div>
      
    </Container>
  );
}

export default Login;

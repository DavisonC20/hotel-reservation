import React, { useEffect, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, Row, Schema } from "rsuite";
import { useAuth } from "../../Context/AuthProvider";

const model = Schema.Model({
  username: Schema.Types.StringType().isRequired("This field is required."),
  password: Schema.Types.StringType().isRequired("Please enter a Password"),
});
const TextField = ({ name, label, accepter, ...rest }) => (
  <Form.Group controlId={name}>
    <Form.ControlLabel>{label} </Form.ControlLabel>
    <Form.Control size="sm" name={name} accepter={accepter} {...rest} />
  </Form.Group>
);

function FormLogin() {
  const [formDatalogin, setFormDatalogin] = useState({});
  const { isLoggedIn, login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (e) {
      login();
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/managehotels/listhotels");
    }
  }, [isLoggedIn]);

  return (
    <Form
      model={model}
      style={{ marginLeft: "4%", marginTop: "2%" }}
      onChange={setFormDatalogin}
      onSubmit={handleSubmit}
    >
      <Row>
        <h4 className="mb-4 text-center ">
          Inicia sesión para gestionar <br /> tu establecimiento
        </h4>
        <p className="mb-4 text-center text-secondary">user: any , pass: any </p>
        <TextField name="username" label="Usuario" />
        <TextField name="password" label="Contraseña" type="password" />
        <p className="text-center" > <a href="/">¿Tienes problemas para iniciar sesión? </a></p>
      </Row>
      <Row className="d-flex  justify-content-center">
        <Button type="submit" className="btn-custom flex-fill ">
          Iniciar Sesión
        </Button>
      </Row>
    </Form>
  );
}

export default FormLogin;

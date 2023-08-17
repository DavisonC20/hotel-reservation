import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row, Schema } from "rsuite";

const model = Schema.Model({
  name: Schema.Types.StringType().isRequired("This field is required."),
  email: Schema.Types.StringType().isEmail(
    "Please enter a valid email address."
  ),
});
const TextField = ({ name, label, accepter, ...rest }) => (
  <Form.Group controlId={name}>
    <Form.ControlLabel>{label} </Form.ControlLabel>
    <Form.Control size="sm" name={name} accepter={accepter} {...rest} />
  </Form.Group>
);

function FormLogin() {
  const [formDatalogin, setFormDatalogin] = useState({});

  const handleSubmit = (e) => {
    if (e) {
      console.log(formDataRoom);
    }
  };

  return (
    <Form
      model={model}
      style={{ marginLeft: "4%", marginTop: "2%" }}
      onChange={setFormDatalogin}
      onSubmit={handleSubmit}
    >
      <Row>
      <h4 className="mb-4 text-center">Inicia sesión para gestionar <br/> tu establecimiento</h4>

        <TextField name="name" label="Nombre" />
        <TextField name="lastname" label="Apellidos" />
        <p className="text-center">¿Tienes problemas para iniciar sesión?</p>
      </Row>
      <Row className="d-flex bd-highlight">
        <Link to={'listhotels'}>
        <Button className="flex-fill bd-highlight">Iniciar Sesión</Button>
        </Link>
      </Row>
    </Form>
  );
}

export default FormLogin;

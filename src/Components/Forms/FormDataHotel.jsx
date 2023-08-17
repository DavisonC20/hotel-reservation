import React, { useState } from "react";
import { Button, Form, Row, Schema, Uploader } from "rsuite";

const model = Schema.Model({
  name: Schema.Types.StringType().isRequired("This field is required."),
  email: Schema.Types.StringType().isEmail(
    "Please enter a valid email address."
  ),
});
const TextField = ({ name, label, accepter, ...rest }) => (
  <Form.Group className="m-3" controlId={name}>
    <Form.ControlLabel>{label} </Form.ControlLabel>
    <Form.Control size="sm" name={name} accepter={accepter} {...rest} />
  </Form.Group>
);

function FormDataHotel() {
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
      <Row className="d-flex">
        <TextField name="name" label="Nombre" />
        <TextField name="lastname" label="Apellidos" />
        <TextField
          name="lastname"
          label="Adjuntar Foto del Hotel"
          accepter={Uploader}
          listType="picture-text"
          action="//jsonplaceholder.typicode.com/posts/"
        />
      </Row>
      <Row className="d-flex bd-highlight">
        <Button className="flex-fill bd-highlight">Iniciar Sesión</Button>
      </Row>
    </Form>
  );
}

export default FormDataHotel;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button, Form, Input, InputNumber, InputPicker, Schema } from "rsuite";

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
function FormReservation() {
  const selectGen = ["Masculino", "Femenino"].map((item) => ({
    label: item,
    value: item,
  }));
  const selectTypeID = ["CC", "Pasaporte"].map((item) => ({
    label: item,
    value: item,
  }));
  return (
    <Form model={model} style={{ marginLeft: "4%", marginTop: "5%" }}>
      <Row>
        <Col>
          <TextField name="name" label="Nombre" />
        </Col>
        <Col>
          <TextField name="lastname" label="Apellidos" />
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <TextField name="birthdate" label="Fecha de Nacimiento" />
        </Col>
        <Col>
          <TextField
            name="genero"
            label="Genero"
            accepter={InputPicker}
            data={selectGen}
            style={{ width: "300px" }}
            placeholder="selecciona el genéro"
          />
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <TextField
            name="IDtype"
            label="Tipo de Documento"
            accepter={InputPicker}
            data={selectTypeID}
            style={{ width: "300px" }}
            placeholder="seleccione el tipo de ID"
          />
        </Col>
        <Col>
          <TextField
            name="numberID"
            label="Numero de Documento"
            accepter={Input}
            type="number"
          />
        </Col>
        <Col></Col>
        </Row>
        <Row>
          <Col>
            <TextField name="email" label="Email" />
          </Col>
          <Col>
            <TextField
              name="telefono"
              label="Telefono de Contacto"
              accepter={Input}
              type="number"
            />
          </Col>
          <Col></Col>
      </Row>
        <Row className="mt-3 mb-3">
        <span>Contacto de Emergencia:</span>
        </Row>
      <Row>
          <Col>
            <TextField name="email" label="Email" />
          </Col>
          <Col>
            <TextField
              name="telefono"
              label="Telefono de Contacto"
              accepter={Input}
              type="number"
            />
          </Col>
          <Col></Col>
      </Row>
      {/*       <Button appearance="primary" type="submit" >
        Submit
      </Button> */}
    </Form>
  );
}

export default FormReservation;

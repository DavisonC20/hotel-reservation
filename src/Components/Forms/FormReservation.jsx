import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  InputPicker,
  Schema,
} from "rsuite";
import ReviewPassIcon from "@rsuite/icons/ReviewPass";
import ReviewRefuseIcon from "@rsuite/icons/ReviewRefuse";

const model = Schema.Model({
  name: Schema.Types.StringType().isRequired("This field is required."),
  lastname: Schema.Types.StringType().isRequired("Please enter lastname"),
  birthdate: Schema.Types.DateType().isRequired("Please enter your BirthDate"),
  genero: Schema.Types.StringType().isRequired("Please enter your genero"),
  IDtype: Schema.Types.StringType().isRequired("Please enter your tipo of ID"),
  numberID: Schema.Types.NumberType().isRequired("Please enter your number ID"),
});
const TextField = ({ name, label, accepter, ...rest }) => (
  <Form.Group controlId={name}>
    <Form.ControlLabel>{label} </Form.ControlLabel>
    <Form.Control size="sm" name={name} accepter={accepter} {...rest} />
  </Form.Group>
);

function FormReservation({ closeModal }) {
  const [formDataRoom, setFormDataRoom] = useState({
    name: "",
    lastname: "",
    // ... otros campos del formulario
  });

  const selectGen = ["Masculino", "Femenino"].map((item) => ({
    label: item,
    value: item,
  }));
  const selectTypeID = ["CC", "Pasaporte"].map((item) => ({
    label: item,
    value: item,
  }));

  const handleSubmit = (e) => {
    if (e) {
      console.log(formDataRoom);
    }
  };

  return (
    <Form
      model={model}
      style={{ marginLeft: "4%", marginTop: "5%" }}
      onChange={setFormDataRoom}
      onSubmit={handleSubmit}
    >
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
          <TextField
            name="birthdate"
            label="Fecha de Nacimiento"
            accepter={DatePicker}
            style={{ width: "300px" }}
          />
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
            name="phonenumber"
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
          <TextField name="emailCEmergency" label="Email" />
        </Col>
        <Col>
          <TextField
            name="telefonoCEmergency"
            label="Telefono de Contacto"
            accepter={Input}
            type="number"
          />
        </Col>
        <Col></Col>
      </Row>
      <Button
        className="mt-4 btn-custom"
        startIcon={<ReviewPassIcon />}
        type="submit"
      >
        Completar Reserva
      </Button>
      <Button
        className="mt-4"
        startIcon={<ReviewRefuseIcon />}
        onClick={() => closeModal()}
        style={{ marginLeft: "10px" }}
      >
        Cancelar
      </Button>
    </Form>
  );
}

export default FormReservation;

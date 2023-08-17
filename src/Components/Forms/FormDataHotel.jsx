import React, { useState } from "react";
import { Button, Form, Row, Schema, Toggle, Uploader } from "rsuite";

const model = Schema.Model({
  namehotel: Schema.Types.StringType().isRequired("This field is required."),
  ubication: Schema.Types.StringType().isRequired(
    "The Ubication is required"
  ),
  typeroom: Schema.Types.StringType().isRequired(
    "The type room is required"
  ),
  costtype: Schema.Types.StringType().isRequired(
    "The type price  is required"
  ),
  impuesto: Schema.Types.StringType().isRequired(
    "The impuesto is required"
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
      style={{ marginLeft: "4%" }}
      onChange={setFormDatalogin}
      onSubmit={handleSubmit}
    >
      <Row>
        <h5>Detalles Hotel</h5>
      </Row>
      <Row className="d-flex">
        <TextField name="namehotel" label="Nombre Hotel" />
        <TextField name="ubication" label="Ubicación" />
        <TextField
          name="imghotel"
          label="Adjuntar Foto del Hotel"
          accepter={Uploader}
          listType="picture-text"
          action="//jsonplaceholder.typicode.com/posts/"
        />
      </Row>
      <Row>
        <TextField
          label="Activar / Inactivar"
          name="statushotel"
          accepter={Toggle}
          checkedChildren="Activo"
          unCheckedChildren="Inactivo"
        />
      </Row>
      <Row>
        <Button  className="btn-custom" size="sm">Nueva Habitación</Button>
      </Row>
      <Row className="d-flex">
        <TextField name="typeroom" label="Tipo de Habitación" />
        <TextField name="costtype" label="Costo Base" />
        <TextField
          name="imgroom"
          label="Adjuntar Foto del Hotel"
          accepter={Uploader}
          listType="picture-text"
          action="//jsonplaceholder.typicode.com/posts/"
        />
      </Row>
      <Row className="d-flex">
        <TextField name="impuesto" label="Impuesto (IVA)" />
        <TextField name="totalroom" label="Total Habitación" />
      </Row>
      <Row>
      <TextField
          label="Activar / Inactivar"
          name="statusroom"
          accepter={Toggle}
          checkedChildren="Activo"
          unCheckedChildren="Inactivo"
        />
      </Row>
      <Row className="d-flex">
        <Button className="btn-custom">Editar Hotel</Button>
        <Button style={{marginLeft:'10px'}}>Cancelar</Button>

      </Row>
    </Form>
  );
}

export default FormDataHotel;

import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Button, Container, Panel } from "rsuite";
import imagex from "../../assets/img.webp";
import ReviewIcon from "@rsuite/icons/Review";
import { getRooms } from "../../Services/service-hotel";
import { useParams } from "react-router-dom";

function CardReservation({setModalOpen}) {
  const [dataRooms, setdataRooms] = useState([]);
  useEffect(() => {
    getRooms(1, setdataRooms);
  }, []);
  return (
    <>
      {dataRooms?.map((room) => (
        <Panel
        key={room.id}
          className="d-flex flex-column justify-content-between m-4 p-2"
          bordered
          style={{ backgroundColor: "#F9F9F9", height: "247px" }}
        >
          <Row>
            <Col>
              <img src={imagex} height="220" style={{ borderRadius: "10px" }} />
            </Col>
            <Col className="flex-row">
              <h6>Habitacion: {room.typeroom}</h6>
              <p>Detalles: </p>
              <p>2 semanas, adulto </p>
              <p>{room.ubication}</p>
            </Col>
            <Col className="d-flex flex-column  justify-content-between justify-items-end align-items-end">
              <div>
                <h3>Costo: USD $ {room.price}</h3>
                <p>Incluye impuestos y cargos</p>
              </div>
              <Button startIcon={<ReviewIcon />} onClick={()=> setModalOpen(true)}>Reservar</Button>
            </Col>
          </Row>
        </Panel>
      ))}
    </>
  );
}

export default CardReservation;

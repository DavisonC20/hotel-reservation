import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Button, Container, Panel } from "rsuite";
import imagex from "../../assets/img.webp";
import ReviewIcon from "@rsuite/icons/Review";
import { getRooms } from "../../Services/service-hotel";
import { useParams } from "react-router-dom";

function CardReservation({ setModalOpen, dataReservation }) {
  return (
    <>
      {dataReservation?.map((room) => (
        <Panel
          key={room.id}
          className="d-flex flex-column justify-content-between m-5 p-2"
          bordered
          style={{ backgroundColor: "#F9F9F9", height: "247px" }}
        >
          <Row>
            <Col>
              <img src={imagex} height="220" style={{ borderRadius: "10px" }} />
            </Col>
            <Col className="flex-row">
            <h5>Reserva en: {room.hotelname}</h5>
              <h5>Habitacion: {room.IDtype}</h5>
              <h6>Detalles Principales: </h6>
              <div style={{lineHeight:0.5}}>
                <p>Tiempo: 2 semanas, </p>
                <p>Cantidad: {room.numberpeople} adulto</p>
                <p>Lugar: {room.locationhotel}</p>
                <p>Huesped: {room.name}</p>
              </div>

              <p>{room.ubication}</p>
            </Col>
            <Col className="d-flex flex-column  justify-content-between justify-items-end align-items-end">
              <div>
                <h3>Costo: USD $ {room.price}</h3>
                <p>Incluye impuestos y cargos</p>
              </div>
              <Button
                className="btn-custom"
                startIcon={<ReviewIcon />}
                onClick={() => setModalOpen(true)}
              >
                Reservar
              </Button>
            </Col>
          </Row>
        </Panel>
      ))}
    </>
  );
}

export default CardReservation;

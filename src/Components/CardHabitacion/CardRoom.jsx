import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Button, Container, Loader, Panel } from "rsuite";
import imagex from "../../assets/img.webp";
import ReviewIcon from "@rsuite/icons/Review";
import { getRooms } from "../../Services/service-hotel";
import { useParams } from "react-router-dom";

function CardRoom({ setModalOpen }) {
  const { id } = useParams();
  const [dataRooms, setdataRooms] = useState([]);
  const  [load, setLoad] = useState(true);
  useEffect(() => {
    getRooms(id, setdataRooms,setLoad);
  }, []);
  return (
    <>
      {load ? (
        <Loader center content="loading" />
      ) : (
        <div>
          {dataRooms?.map((room) => (
            <Panel
              key={room.id}
              className="d-flex flex-column justify-content-between m-5 p-2"
              bordered
              style={{ backgroundColor: "#F9F9F9", height: "247px" }}
            >
              <Row>
                <Col>
                  <img
                    src={imagex}
                    height="220"
                    style={{ borderRadius: "10px" }}
                  />
                </Col>
                <Col className="flex-row">
                  <h5>Habitacion: {room.typeroom}</h5>
                  <h6>Detalles: </h6>
                  <p>Tiempo Reserva: 2 semanas</p>
                  <p>Cantidad Personas: 1 adulto</p>
                  <p> Ubicación: {room.ubication}</p>
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
        </div>
      )}
    </>
  );
}

export default CardRoom;

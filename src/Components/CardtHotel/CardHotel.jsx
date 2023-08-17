import React, { useEffect, useState } from "react";
import { Button, Col, Panel, Row } from "rsuite";
import imagex from "../../assets/img.webp";
import "../../App.css";
import { getHotels } from "../../Services/service-hotel";
import VisibleIcon from "@rsuite/icons/Visible";
import { key } from "localforage";
import { Link } from "react-router-dom";
import EditIcon from "@rsuite/icons/Edit";

function StatusIndicator({ isActive }) {
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "5px",
    backgroundColor: isActive ? "green" : "red",
  };

  return <span style={indicatorStyle}></span>;
}

export default function CardHotel({ active, ...props }) {
  const [DataHotels, setDataHotels] = useState([]);
  const { setModalOpen } = props;
 
  useEffect(() => {
    getHotels(setDataHotels);
  }, []);
  return (
    <>
      {DataHotels?.map((hotel) => (
        <Panel
          key={hotel.id}
          shaded
          bordered
          bodyFill
          style={{ display: "inline-block", width: 353, margin: "40px" }}
        >
          <img src={imagex} height="240" />
          <Panel style={{ padding: "0px" }}>
            <div className="d-flex justify-content-between align-items-center ">
              <Col>
                <span className="fs-5">{hotel.namehotel}</span>
                <p>{hotel.ubication}</p>
                {active && (
                  <>
                    <StatusIndicator isActive={hotel.status} />{" "}
                    <span>{hotel.status ? "Activo" : "Inactivo"}</span>
                  </>
                )}
              </Col>
              <Col>
                {active ? (
                  <Button startIcon={<EditIcon />} onClick={()=> setModalOpen(true)}>
                    Gestionar Hotel
                  </Button>
                ) : (
                  <Link to={`/habitaciones/${hotel.id}`}>
                    <Button startIcon={<VisibleIcon />}>
                      Ver Habitaciones
                    </Button>
                  </Link>
                )}
              </Col>
            </div>
          </Panel>
        </Panel>
      ))}
    </>
  );
}

import React, { useEffect, useState } from 'react'
import { Button, Col, Panel, Row } from 'rsuite'
import imagex from '../../assets/img.webp'
import '../../App.css'
import { getHotels } from "../../Services/service-hotel";
import VisibleIcon from '@rsuite/icons/Visible';
import { key } from 'localforage';
import { Link } from 'react-router-dom';
export default function CardHotel() {
    const [DataHotels, setDataHotels] = useState([])
    
    useEffect(() => {
        getHotels(setDataHotels)
    }, [])
    return (
        <>
            {DataHotels?.map((hotel) => (
                <Panel key={hotel.id} shaded bordered bodyFill style={{ display: 'inline-block', width: 353, margin: "40px" }}>
                    <img src={imagex} height="240" />
                    <Panel style={{ padding: '0px' }}>
                        <div className='d-flex justify-content-between align-items-center '>
                            <Col>
                                <span className='fs-5'>{hotel.namehotel}</span>
                                <p>{hotel.ubication}</p>
                            </Col>
                            <Col>
                            <Link to={`/habitaciones/${hotel.id}`}>
                                <Button startIcon={<VisibleIcon />}>
                                    Ver Habitaciones
                                </Button>
                            </Link>
                            </Col>
                        </div>
                    </Panel>
                </Panel>
            ))}

        </>
    )
}

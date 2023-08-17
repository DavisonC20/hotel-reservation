import React, { useEffect, useState } from 'react'
import BarTitles from '../Components/BarTitles/BarTitles'
import CardReservation from '../Components/CardHabitacion/CardReservation'
import { getReservations } from '../Services/service-hotel'

export default function ListReservations() {
    const [dataReservation, setdataReservation] = useState([]);

    useEffect(() => {
        getReservations(setdataReservation)
    }, [])
    
  return (
    <>
    <BarTitles titleBar={'Lista de Reservas'}>
    </BarTitles>
    <CardReservation dataReservation={dataReservation} />
    </>
  )
}

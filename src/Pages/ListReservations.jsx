import React, { useEffect } from 'react'
import BarTitles from '../Components/BarTitles/BarTitles'
import CardReservation from '../Components/CardHabitacion/CardReservation'
import { getReservations } from '../Services/service-hotel'

export default function ListReservations() {

    useEffect(() => {
        getReservations()
    }, [])
    
  return (
    <>
    <BarTitles titleBar={'Lista de Reservas'}>
    </BarTitles>
    <CardReservation/>
    </>
  )
}

import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CardRoom from "../Components/CardHabitacion/CardRoom";
import CustomModal from "../Components/Modal/CustomModal";
import FormReservation from "../Components/Forms/FormReservation";

function Habitaciones() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CardRoom setModalOpen={setModalOpen} />
      <CustomModal
        open={modalOpen}
        onClose={closeModal}
        titleModal={"Reserva para Habitación tipo Ejecutiva"}
        children={<FormReservation/>}
      />
    </>
  );
}

export default Habitaciones;

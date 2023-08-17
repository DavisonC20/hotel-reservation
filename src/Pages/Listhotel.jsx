import React, { useState } from "react";
import CardHotel from "../Components/CardtHotel/CardHotel";
import BarTitles from "../Components/BarTitles/BarTitles";
import { Button } from "rsuite";
import CustomModal from "../Components/Modal/CustomModal";
import FormDataHotel from "../Components/Forms/FormDataHotel";

function Listhotel() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <BarTitles titleBar={"Hoteles"}>
        <Button>Nuevo Hotel</Button>
        <Button style={{ marginLeft: "10px" }}>Lista de Reservas</Button>
      </BarTitles>
      <CardHotel active={true} setModalOpen={setModalOpen}/>;
      <CustomModal
        open={modalOpen}
        onClose={closeModal}
        titleModal={"Gestionar Hotel"}
      >
        <FormDataHotel/>
      </CustomModal>
    </>
  );
}

export default Listhotel;

import React from "react";
import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
//import ModalPortal from "./ModalPortal";
//import SongSearch from "./SongSearch";

const Modals = () => {
  /* const [isOpenModal1, openModal1, closeModal1] = useModal(true);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false); */
  const [isOpenContact, openModalContact, closeModalContact] = useModal(true);
  /* const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false); */

  return (
    <div>
      
      <Modal  isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>      
    </div>
  );
};

export default Modals;
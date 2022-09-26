import React, { useState, useEffect } from "react";
import './Events.css';
import { eventData } from '../../EventData';
import { eventData2 } from '../../EventData';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'

function Events() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            Swal.fire({
                title: 'Bem vindo!',
                text: 'Venha conhecer nossos principais eventos!',
                imageUrl: './images/events.jpg',
                imageHeight: 250,
            })
        }, 5000);
    }, []);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    function saveModal() {
        setShowModal(false);
        Swal.fire(
            'Parabéns!',
            'Inscrição realizada com sucesso!',
            'success'
        )
            .then(() => {
                // window.location.reload();
                console.log("Ok");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <div className='divContainer'>
                {eventData.map((param, index) => (
                    <div>
                        <div key={index} className='divElements'>
                            <div className='divFirst'>{param.evento}</div>
                            <hr className='divSecond'></hr>
                            <div className='divOthers'>Data: {param.data}</div>
                            <div className='divOthers'>Localização: {param.localizacao}</div>
                            <div className='divOthers'>Preço: {param.preco}</div>
                            <div className='details'>
                                <Button variant="primary" onClick={handleShowModal} className='detailsButton' Style='display: flex; justify-content: center; align-items: center'>
                                    Detalhes
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='divContainer'>
                {eventData2.map((param, index) => (
                    <div>
                        <div key={index} className='divElements'>
                            <div className='divFirst'>{param.evento}</div>
                            <hr className='divSecond'></hr>
                            <div className='divOthers'>Data: {param.data}</div>
                            <div className='divOthers'>Localização: {param.localizacao}</div>
                            <div className='divOthers'>Preço: {param.preco}</div>
                            <div className='details'>
                                <Button variant="primary" onClick={handleShowModal} className='detailsButton' Style='display: flex; justify-content: center; align-items: center'>
                                    Detalhes
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal show={showModal} onHide={handleCloseModal} Style='margin-top: 7rem; height: 200px'>
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes sobre o evento selecionado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Para <strong> mais informações</strong>, acesse o site: eventos.ingressos.com.br
                    </div>
                    <div Style='margin-top: 1rem'>
                        Para <strong>se inscrever</strong> no evento, selecione a opção abaixo:
                    </div>
                </Modal.Body>
                <Modal.Footer Style='margin-bottom: 1rem'>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Não, obrigado!
                    </Button>
                    <Button variant="primary" onClick={saveModal}>
                        Vou Participar!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Events;
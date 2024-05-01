import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Modal({ onClose }) {
    const [text, setText] = useState('');
    const headers = {
        'Content-Type': 'application/json',
    };

    const handleSendPet = () => {
        axios.post('http://localhost:8079/pets', text, { headers })
            .then(response => {
                console.log('Data sent successfully:', response);
                onClose()
            })
            .catch(error => {
                console.error('Error sending data:', error);
                alert("JSON erroni, consulta l'apartat de Network")
            });
    };

    const handleSendHome = () => {
        axios.post('http://localhost:8079/homes/list', text, { headers })
            .then(response => {
                console.log('Data sent successfully:', response);
                onClose()
            })
            .catch(error => {
                console.error('Error sending data:', error);
                alert("JSON erroni, consulta l'apartat de Network")
            });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <textarea value={text} onChange={e => setText(e.target.value)} />
                <div>
                    <button onClick={handleSendPet}>Enviar Mascota</button>
                </div>
                <div>
                    <button onClick={handleSendHome}>Enviar Lista de casas</button>
                </div>
            </div>
        </div>
    );
}
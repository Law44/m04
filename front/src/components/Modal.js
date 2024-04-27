import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Modal({ onClose, onSend }) {
    const [text, setText] = useState('');

    const handleSend = () => {
        axios.post('http://localhost:8080/endpoint', { data: text })
            .then(response => {
                console.log('Data sent successfully:', response);
                onClose()
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <textarea value={text} onChange={e => setText(e.target.value)}/>
                <div>
                    <button onClick={handleSend}>Enviar</button>
                </div>
            </div>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';

export default function List() {
    const [objectList, setObjectList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8080/pets")
            .then((response) => setObjectList(response.data._embedded.pets))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <br />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Especie</th>
                            <th>Imagen</th>
                            <th>Edad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {objectList.map(data => (
                            <tr key={data._links.self.href}>
                                <td>{data.name}</td>
                                <td>{data.species}</td>
                                <td>
                                    <img src={data.image} alt={data.name} />
                                </td>
                                <td>{data.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="send" onClick={() => setShowModal(true)}>Manda tu JSON</button>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';

export default function List() {
    const [objectList, setObjectList] = useState([]);
    const [homeList, setHomeList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8079/pets")
            .then((response) => setObjectList(response.data._embedded.pets))
            .catch((error) => console.log(error));

        axios
            .get("http://localhost:8079/homes")
            .then((response) => setHomeList(response.data._embedded.homes))
            .catch((error) => console.log(error));
    }, []);

    const getHomeNamesForPet = (petId) => {
        let list = [];

        homeList.forEach(home => {
            if (home.id_pet === parseInt(petId)){
                list.push(home.name);
            }
        });
        return list.join(", ");
    };

    return (
        <div>
            <br />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Especie</th>
                            <th>Imagen</th>
                            <th>Edad</th>
                            <th>Casas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {objectList.map(data => {
                            const pathToRemove = "http://localhost:8079/pets/";

                            const cleanedHref = data._links.self.href.replace(pathToRemove, "");

                            return (
                                <tr key={data._links.self.href}>
                                    <td>{cleanedHref}</td>
                                    <td>{data.name}</td>
                                    <td>{data.species}</td>
                                    <td>
                                        <img src={data.image} alt={data.name} />
                                    </td>
                                    <td>{data.age}</td>                                    
                                    <td>{getHomeNamesForPet(cleanedHref)}</td> 
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <button className="send" onClick={() => setShowModal(true)}>Manda tu JSON</button>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
    );
}

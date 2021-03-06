//Grupo : 
//Luiz Fernando Amarino Gomes Leal // Matricula : 0050016658
//Pedro Coutinho Duarte // Matricula : 0050016979
// Rodrigo Luiz Vergara // Matricula : 0050016531
import React, {useState} from 'react';

import axios from 'axios';

export const DataContext = React.createContext({});

export const AuthContext = React.createContext({});

export const DataProvider = (props) => {
    const [actualPlayer, setActualPlayer] = useState({});
    const [allPlayers, setAllPlayers] = useState([]);

    const getAllPlayers = async () => {
        const response = await axios.get('https://filmeapi20211127211335.azurewebsites.net/Players/');
        setAllPlayers(response.data);
        return response.data 
    }
    
    return (
        <DataContext.Provider value={{ getAllPlayers, actualPlayer, setActualPlayer, allPlayers, setAllPlayers }}>
            {props.children}
        </DataContext.Provider>
    )
}
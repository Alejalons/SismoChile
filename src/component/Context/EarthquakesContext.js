import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EarthQuakerContext = createContext();

const EarthQuakerProvider = (props) => {

    const [ seismology, setSeismology ] = useState({
        data: [],
        loading: false
    });

    useEffect( () => {
        const getDataSeismology = async() => {
            const url = `https://api.gael.cl/general/public/sismos`;
            const result = await axios.get(url);

            setSeismology({
                data: result.data,
                loading: true
            })
        }
        getDataSeismology();
    }, []);

    return ( 
        <EarthQuakerContext.Provider
            value={{
                seismology
            }}
        >
            {props.children}
        </EarthQuakerContext.Provider>
    );
}

export default EarthQuakerProvider;
import React, {useState, useEffect} from 'react';
import {TableHeader} from './TableHeader';
import {TableRows} from './TableRows';
import {jsonData} from '../services/jsonData';
import {flightScheduleAPI} from '../services/flightScheduleAPI';

export const Table = () => {
    const [getAPI, setAPI] = useState({});
    const parsedData = JSON.parse(jsonData);
    // React.useEffect(() => {
    //     const fetchData = async() => {
    //         setAPI(flightScheduleAPI);
    //     }
    //     fetchData();
    // });
    console.log(getAPI, "getAPI")

    return (
        <div>
            <table>
                <TableHeader/>
                <TableRows rowData ={parsedData.flightLegs.slice(0, 100)}/>
            </table>
        </div>
    )
}
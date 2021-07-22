import React from 'react';
import ArrowForward from "@material-ui/icons/ArrowForward";
import {tableRowTypes, timeProps} from "../types/tableRowTypes";

interface flightLegsTypes {
    rowData: tableRowTypes[];
}

export const TableRows = (props: any) => {

    const timeFormat = (dt:string, tz: string) => {
        return new Date(dt).toLocaleTimeString('en-US', {
            hour: '2-digit',
            hour12: false,
            minute: '2-digit', 
            timeZone: tz,
            timeZoneName: 'short'
        })};

    const dateFormat = (dt: string) => {
        const newDate = new Date(dt);
        /* Note: 
           1. Since, javascript date Obj is not offering the MM/DD/YYYY format.
           2. The below hardcoded approach has been choosen for the time being..
           3. Basically,this MM/DD/YYYY format can be achieve explicitly by using 3rd party mudules like 'momentjs' and 'dayjs..,etc 
        */
        return `${newDate.getMonth()}/${newDate.getDate()}/${newDate.getFullYear()}`;
    } 

    const displayTimes = (times: timeProps[], OrgValue: string, tz: string) => {
        return  times.filter(f => f.name == OrgValue).map(t => {
            return (
                <React.Fragment>
                    <td>{timeFormat(t.actualTimeUTC, tz)}</td>
                    <td>{timeFormat(t.scheduledTimeUTC, tz)}</td>
                    <td>{timeFormat(t.actualTimeUTC, tz)}</td>
                </React.Fragment>
            )
        });
    }

    const sortedData = () => {
        const updatedDate =  props.rowData.map((obj: any, val:any) => {
            return {...obj, actualTimeUTC: obj.times[0].actualTimeUTC}
        });
        return updatedDate;
    }

    return (
        <tbody>
            {sortedData().sort((a:any, b:any) => b.actualTimeUTC - a.actualTimeUTC).map((key:any, val:number) => {
                return (
                    <tr className={`indx-${val}`}>
                        <td></td>
                        <td>{dateFormat(key.scheduledOperatingDateUTC)}</td>
                        <td>{key.flightNumber}</td>
                        <td>{key.aircraft.aircraftRegistration}</td>
                        <td className="flight-leg">
                            <span>{key.origin.actual}</span>
                            <ArrowForward/>
                            <span>{key.destination.actual}</span>
                        </td>
                        {displayTimes(key.times, 'OUT', 'America/Los_Angeles')}
                        {displayTimes(key.times, 'IN', 'America/New_York')}
                        <td>{key.irregularOperationCode}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}
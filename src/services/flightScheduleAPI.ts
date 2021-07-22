import axios from 'axios';

export const flightScheduleAPI = async() => {
    let result:any = {};

    await axios.get('https://flightschedule.azurewebsites.net/api/HttpTrigger1').then(response => {
        console.log(response, "<==response==>")
        result = response;
    }).catch(err => {
        console.error(err)
    });

    return result;
}
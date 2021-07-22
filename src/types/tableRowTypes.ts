export interface tableRowTypes {
    origin: {
        scheduledOperatingDateUTC : string;
        actual: string;
    };
    destination: {
        actual: string;
    }

    flightNumber: string;
    aircraft: {
        aircraftRegistration: string;
    };
    times : timeProps[];
    irregularOperationCode: string;
};

export interface timeProps {
        name: string,
        actualTimeUTC: string,
        estimatedTimeUTC: string,
        scheduledTimeUTC: string        
}

// export interface tableRowTypes {
//     flightLegs: flightLegsTypes[];
// }
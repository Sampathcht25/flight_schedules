import React from 'react';
import {shallow} from 'enzyme';
import {TableRows} from '../../components/TableRows';

describe('TableRows component', () => {

    const mockRowData = {
        flightLegs :[
        {
        scheduledOperatingDateUTC: '2021-06-09',
        origin: {
            actual: 'foo'
        },
        destination: {
            actual: 'bar'
        },    
        flightNumber: '4321',
        aircraft: {
            aircraftRegistration: 'N2432'
        },
        times : [
            {
                name: 'OUT',
                actualTimeUTC: '2021-06-08T23:54:00Z',
                estimatedTimeUTC: '2021-06-09T00:00:00Z',
                scheduledTimeUTC: '2021-06-09T00:00:00Z'
            },
            {
                name: 'IN',
                actualTimeUTC: '2021-06-08T13:34:00Z',
                estimatedTimeUTC: '2021-06-09T02:00:00Z',
                scheduledTimeUTC: '2021-06-09T04:00:00Z'
            },

        ],
        irregularOperationCode: 'clx'
    },
    {
        scheduledOperatingDateUTC: '2021-06-10',
        origin: {
            actual: 'foo1'
        },
        destination: {
            actual: 'bar1'
        },    
        flightNumber: '4221',
        aircraft: {
            aircraftRegistration: 'N4332'
        },
        times : [
            {
                name: 'OUT',
                actualTimeUTC: '2021-06-09T23:54:00Z',
                estimatedTimeUTC: '2021-06-09T04:00:00Z',
                scheduledTimeUTC: '2021-06-09T003:00:00Z'
            },
            {
                name: 'IN',
                actualTimeUTC: '2021-06-09T12:34:00Z',
                estimatedTimeUTC: '2021-06-09T02:00:00Z',
                scheduledTimeUTC: '2021-06-09T03:00:00Z'
            },

        ],
        irregularOperationCode: 'clx'
    }
    ]};

    beforeEach(() => {

    })

    test('snapshot update', () => {
        const Component = shallow(<TableRows rowData={mockRowData.flightLegs}/>);
        expect(Component).toMatchSnapshot();
    });

})
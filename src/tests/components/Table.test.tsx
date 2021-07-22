import React from 'react';
import {shallow} from 'enzyme';
import {Table} from '../../components/Table';

describe('Table component', () => {
    test('snapshot update', () => {
        const Component = shallow(<Table />);
        expect(Component).toMatchInlineSnapshot();
    })
})
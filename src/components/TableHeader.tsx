import React from 'react';
import {headerData} from '../services/headerData';

export const TableHeader = () => {
    return (
        <thead>
            <tr>
                {headerData.map(label => (<th>{label}</th>))}
            </tr>
        </thead>
    );
}
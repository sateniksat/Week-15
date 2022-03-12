
import React from 'react';
import TableMatrix from './TableMatrix';

export default function Matrix() {
    const matrix= [
        ["col1","col2","col3"],
        [1,2,3],
        [4,5,6],
        [7,8,9]

    ]
  return (
    <React.Fragment>
        <TableMatrix matrix={matrix}/>
    </React.Fragment>
  )
}


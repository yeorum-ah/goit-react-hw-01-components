import styled from 'styled-components';

export const Table = styled.table`
width: 50%;
margin: 20px auto;


`
export const TableRow = styled.tr`
background-color: #00bcd5;
height: 50px;
color: white;
`
export const TableString= styled.tr`
&:nth-child(2n) {
 background-color: grey; 
  }
  background-color: floralwhite;
`

export const TableData= styled.td`
text-align: center;
height: 50px;
`
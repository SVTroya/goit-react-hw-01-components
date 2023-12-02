import styled from "styled-components"

export const TransactionsTable = styled.table`
  width: 400px;
  border-radius: 4px;
  background-color: #FFF;
  box-shadow: 0 0 4px 2px rgba(46, 47, 66, 0.08),
  0 0 6px 1px rgba(46, 47, 66, 0.16),
  0 0 8px 1px rgba(46, 47, 66, 0.08);
  font-size: 16px;
  color: #2c3a49;
  border-collapse: collapse;
  text-align: center;
  margin-bottom: 40px;

  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #00BCD5;
    color: white;
    text-transform: uppercase;
  }

  td {
    text-transform: capitalize;
  }

  tr:nth-child(even) {
    background-color: #ecf1f4;
  }

  tr:hover {
    background-color: #ddd;
  }
`

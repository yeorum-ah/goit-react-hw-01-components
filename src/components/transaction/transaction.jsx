import { Table, TableData, TableRow, TableString} from "./transaction-styled";

export const TransactionHistory = ({ items }) => {
    return (
      <Table className="transaction-history">
        <thead>
          <TableRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TableRow>
        </thead>
        <tbody>
          {items.map(({ type, amount, currency, id }) => (
            <TableString key={id}>
              <TableData >{type}</TableData>
              <TableData >{amount}</TableData>
              <TableData >{currency}</TableData>
            </TableString>
          ))}
        </tbody>
      </Table>
    );
  };
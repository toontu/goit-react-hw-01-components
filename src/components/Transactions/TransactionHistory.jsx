import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  Th,
  Tbody,
  Trow,
  Tdata,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>
      <Tbody>
        {transactions.map(el => (
          <Trow key={el.id}>
            <Tdata>{el.type}</Tdata>
            <Tdata>{el.amount}</Tdata>
            <Tdata>{el.currency}</Tdata>
          </Trow>
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

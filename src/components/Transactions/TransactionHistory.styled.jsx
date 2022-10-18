import styled from '@emotion/styled';

export const Table = styled.table`
  width: 1000px;
  margin-bottom: 50px;
  border-radius: 6px;
`;

export const Thead = styled.thead`
  background-color: #056908;
  border: none;
  /* border-radius: 0 6px 6px 0; */
`;

export const Th = styled.th`
  font-weight: 700;
  padding: 20px;
`;

export const Trow = styled.tr`
  background-color: #e3f7e3;
`;

export const Tbody = styled.tbody`
  tr:nth-of-type(2n) {
    background: #fff;
  }
  /* Tr:nth-of-type(odd) {
    background: #fff;
  } */
  /* Tr:nth-of-type(even) {
    background: #ccc;
  } */
`;

export const Tdata = styled.td`
  padding: 15px 10px;
  border: 1px solid #eee;
  text-align: center;
`;

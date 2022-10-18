import styled from '@emotion/styled';

export const StatSection = styled.section`
  width: 1000px;
  margin: 10px;
  padding-top: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  margin-bottom: 50px;
`;

export const StatTitle = styled.h2`
  font-size: 60px;
  text-align: center;
  padding: 50px;
  margin-bottom: 50px;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: flex-end;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-end;
  padding: 40px 0;
  font-weight: 700;
  gap: 7px;
`;

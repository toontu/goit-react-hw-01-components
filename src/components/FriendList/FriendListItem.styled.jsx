import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 550px;
  padding: 20px 40px;
  border: 1px solid #ccc;
  background-color: #ebf9f9;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 30px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 50px;
`;

export const Name = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 550px;
  border: 1px solid #ccc;
  padding-top: 30px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  margin: 50px 0;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 45px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;

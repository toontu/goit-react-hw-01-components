import PropTypes from 'prop-types';

import {
  StatSection,
  StatTitle,
  StatList,
  StatListItem,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(el => (
          <StatListItem
            key={el.id}
            className="item"
            style={{
              backgroundColor: getRandomHexColor(),
              height: el.percentage * 5,
            }}
          >
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </StatListItem>
        ))}
      </StatList>
    </StatSection>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

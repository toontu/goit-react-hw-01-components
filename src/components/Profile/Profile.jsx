import PropTypes from 'prop-types';

import {
  ProfileCard,
  Description,
  UserName,
  Stats,
  StatsItem,
  Quantity,
} from './Profile.styled';

export const Profile = userData => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <ProfileCard>
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" />
        <UserName>{username}</UserName>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats>
        <StatsItem>
          <span className="label">Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

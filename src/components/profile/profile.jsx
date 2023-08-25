import PropTypes from 'prop-types';
import { ProfileWrapper, UserAvatar, ProfileCard, ProfileParagraph, ProfileInfo, Stats, StatsItem} from './profile-styled';

 export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
      <ProfileWrapper className="profile">
        <ProfileCard className="description">
          <UserAvatar
            src={avatar}
            alt={`${username} avatar`}
            className="avatar"
          />
          <ProfileParagraph className="name">{username}</ProfileParagraph>
          <ProfileInfo className="tag">@{tag}</ProfileInfo>
          <ProfileInfo className="location">{location}</ProfileInfo>
        </ProfileCard>
  
        <Stats className="stats">
          <StatsItem>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </StatsItem>
          <StatsItem>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </StatsItem>
          <StatsItem>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </StatsItem>
        </Stats>
      </ProfileWrapper>
    );
  };
  
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };
  


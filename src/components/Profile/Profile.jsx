import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({username, tag, location, avatar, stats:{followers, views, likes}}) {
    return (
        <div className={s.profile}>
        <div className={s.description}>
          <img
            src={avatar}
            alt={username}
            className={s.avatar}
          />
          <p className={s.name}>{username}</p>
          <p className={s.tag}>{tag}</p>
          <p className={s.tag}>{location}</p>
        </div>
      
        <ul className={s.stats}>
          <li className={s.statsLi}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{followers}</span>
          </li>
          <li className={s.statsLi}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{views}</span>
          </li>
          <li className={s.statsLi}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  

  Profile.propTypes = {
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.objectOf(PropTypes.number.isRequired),
  };

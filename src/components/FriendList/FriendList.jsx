import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({friends}) {
    return (
        <ul className={s.friendList}>
            {friends.map (({id, avatar, name, isOnline}) => (
              <li key={id} className={s.item}>
                <span className={s.status} style={{
                      backgroundColor: isOnline ? "#7ee775" : "#e21818",
                }}>{isOnline}</span>
                <img className={s.avatar} src={avatar} alt={name} width="48" />
                <p className={s.name}>{name}</p>
              </li>
            ))}
       </ul>    
    );
  };

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };
import React from 'react';
import styles from './friends.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(friend => (
      <li className={styles.item} key={friend.id}>
        <span
          className={
            friend.isOnline ? styles.statusOnline : styles.statusOffline
          }
        ></span>
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

export default FriendList;

import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from './Statistics/data.json';
import FriendList from './FriendsList/FriendsList';
import friends from './FriendsList/friends.json';
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from './Transaction/transactions.json';

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
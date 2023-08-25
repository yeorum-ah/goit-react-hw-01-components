import user from 'data/user.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import data from 'data/data.json';
import { Profile }from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friendList/friendList';
import { TransactionHistory } from './transaction/transaction';
import { GlobalStyle } from './Styles';

export const App = () => {
  return (
    <>
    <Profile 
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
         stats={user.stats}
     />
     <Statistics title="Upload stats" stats={data}/>
     <FriendList friends={friends} />
     <TransactionHistory items={transactions}/>
     <GlobalStyle/>
</>

);
};

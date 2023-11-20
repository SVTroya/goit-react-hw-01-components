import { Profile } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"
import user from "../data/user.json"
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        color: "#010101",
        gap: "40px"
      }}
    >
      <h2> Task #1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <h2> Task #2</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <h2> Task #3</h2>
      <FriendList friends={friends} />

      <h2> Task #4</h2>
      <TransactionHistory transactions={transactions} />

    </div>
  )
}

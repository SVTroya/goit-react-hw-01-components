import css from "./FriendList.module.css"
import { FriendListItem } from "../FriendListItem/FriendListItem"
import clsx from "clsx"

export function FriendList({friends}) {
  return (
    <ul className={clsx(css.friendList)}>
      {friends.map(friend => <FriendListItem key={friend.id} friend={friend} />)}
    </ul>
  )
}

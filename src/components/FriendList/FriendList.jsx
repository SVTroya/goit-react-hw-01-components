import { FriendListItem } from "../FriendListItem/FriendListItem"
import { List } from "./FriendList.styled"
import PropTypes from "prop-types"

export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => <FriendListItem key={friend.id} friend={friend} />)}
    </List>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
}

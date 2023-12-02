import { Avatar, Item, Name, Status } from "./FriendListItem.styled"
import PropTypes from "prop-types"


export function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend
  return (
    <Item>
      <Status $isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  )
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
}

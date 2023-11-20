import css from "./FriendListItem.module.css"
import clsx from "clsx"

export function FriendListItem({ friend }) {
  const {  avatar, name, isOnline } = friend
   return (
    <li className={clsx(css.item)}>
       <span className={clsx(css.status, {[css.isOnline]: isOnline})}></span>
       <img className={clsx(css.avatar)} src={avatar} alt="User avatar" width="48" />
       <p className={clsx(css.name)}>{name}</p>
     </li>
  )
}

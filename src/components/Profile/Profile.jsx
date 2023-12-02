import PropTypes from "prop-types"
import { Card, Name, Quantity, StatsList, UserProfile } from "./Profile.styled"
import React from "react"

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <Card>
    <UserProfile>
      <img
        src={avatar}
        alt="User avatar"
      />
      <Name>{username}</Name>
      <p>@{tag}</p>
      <p>{location}</p>
    </UserProfile>

    <StatsList>
      <li>
        <span>Followers</span>
        <Quantity>{stats.followers}</Quantity>
      </li>
      <li>
        <span>Views</span>
        <Quantity>{stats.views}</Quantity>
      </li>
      <li>
        <span>Likes</span>
        <Quantity>{stats.likes}</Quantity>
      </li>
    </StatsList>
  </Card>
)

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
}


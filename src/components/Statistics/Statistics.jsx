import PropTypes from "prop-types"
import { Percentage, StatCard, StatItem, StatList, Title } from "./Statistics.styled"

export const Statistics = ({ title, stats }) => {
  return (
    <StatCard>
      {
        title && <Title>{title}</Title>
      }
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} $bgColor={getRandomHexColor()}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
          </StatItem>))}
      </StatList>
    </StatCard>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      },
    )),
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

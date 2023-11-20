import css from "./Statistics.module.css"
import clsx from "clsx"
// import { StatItem } from "../StatItem/StatItem"

export const Statistics = ({ title, stats }) => {
  return (
    <section className={clsx(css.statistics)}>
      {
        title && <h2 className={clsx(css.title)}>{title}</h2>
      }
      <ul className={clsx(css.statList)}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={clsx(css.item)} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={clsx(css.label)}>{label}</span>
            <span className={clsx(css.percentage)}>{percentage}%</span>
          </li>))}
      </ul>
    </section>
  )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


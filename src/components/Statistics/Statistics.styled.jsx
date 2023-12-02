import styled from "styled-components"

export const StatCard = styled.div`
  width: 280px;
  border-radius: 4px;
  background-color: #FFF;
  box-shadow: 0 0 4px 2px rgba(46, 47, 66, 0.08),
  0 0 6px 1px rgba(46, 47, 66, 0.16),
  0 0 8px 1px rgba(46, 47, 66, 0.08);
  overflow: hidden;
`

export const Title = styled.h2`
  color: #132236;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0;
`

export const StatList = styled.ul`
  height: 60px;
  display: flex;
  justify-content: space-between;
`

export const StatItem = styled.li`
  color: #FFF;
  background-color: ${({ $bgColor }) => $bgColor};
  /*background-color: ${getRandomHexColor()};*/
  height: 100%;
  width: 20%;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: 500;
`
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

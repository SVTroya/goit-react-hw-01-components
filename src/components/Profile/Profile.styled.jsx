import styled from "styled-components"

export const Card = styled.div`
  width: 280px;
  border-radius: 4px;
  background-color: #FFF;
  box-shadow: 0 0 4px 2px rgba(46, 47, 66, 0.08),
  0 0 6px 1px rgba(46, 47, 66, 0.16),
  0 0 8px 1px rgba(46, 47, 66, 0.08);
  color: #8895A3;
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;
`

export const UserProfile = styled.div`
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    width: 115px;
    height: 115px;
    border-radius: 50%;
    box-shadow: 0 0 2px 2px rgba(46, 47, 66, 0.08)
  }
`

export const Name = styled.p`
  color: #132236;
  font-size: 16px;
  font-weight: 600;
`

export const StatsList = styled.ul`
  width:100%;
  height: 83px;
  background-color: #F3F6F9;
  display: flex;
  gap: 1px;
  justify-content: space-between;
  border-top: 1px solid #EAEEF3;

  li {
    display: flex;
    flex-direction: column;
    padding: 25px 0;
    gap: 8px;
    align-items: center;
    width:33%;
  }

  li:not(:last-child) {
    border-right: 1px solid #EAEEF3;
  }
`

export const Quantity = styled.span`
  color: #132236;
  font-size: 14px;
  font-weight: 700;
`

import styled from "styled-components"

export const Item = styled.div`
  width: 280px;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 0 0 4px 2px rgba(46, 47, 66, 0.08),
  0 0 6px 1px rgba(46, 47, 66, 0.16),
  0 0 8px 1px rgba(46, 47, 66, 0.08);
  padding: 8px 20px;
  display: flex;
  gap: 20px;
  align-items: center;
`

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $isOnline }) => $isOnline ? "#2CAD2C" : "#FF0000"};
  border: ${({ $isOnline }) => {
    return `1px solid ${$isOnline ? "#008d00" : "#d00000"}`
  }};
  box-shadow: ${({ $isOnline }) => {
    return `inset 0 0 4px 4px ${$isOnline ? "#008D007F" : "#D000007F"}`
  }};
`

export const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 5px;
  background-color: #F3F6F9;
  border: 2px solid #EAEEF3;
  padding: 4px;
`

export const Name = styled.p`
  font-size: 25px;
  font-weight: 500;
`

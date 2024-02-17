// Style your elements here

import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: ${props => props.IsActive};
  opacity: ${props => (props.IsActive === true ? 1 : 0.5)};
  color: black;
  border-radius: 3px;
  margin-right: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 10px;
  border-radius: 5px;
  border: 0px;
  width: 50px;
`

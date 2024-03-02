import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color:#ffffff
  opacity: ${props => (props.IsActive === true ? 1 : 0.5)};
  color:${props => (props.IsActive ? '#334155' : '#1e293b')};
  border-radius: 3px;
  margin-right: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 10px;
  border-radius: 5px;
  outline: none;
  border:none;
  width: 50px;
  cursor:pointer;
`

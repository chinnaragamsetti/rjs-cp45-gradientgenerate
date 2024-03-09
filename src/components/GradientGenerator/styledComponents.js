// Style your elements here

import styled from 'styled-components'

export const MainCont = styled.div`
  background-image: linear-gradient(${props => props.bgStatus});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const MainHead = styled.h1`
  color: #ffffff;
  font-size: 20px;
`

export const Para = styled.p`
  color: #ffffff;
  font-size: 10px;
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
`

export const InputsCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 300px;
`

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 100px;
  height: 30px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
`

export const Button = styled.button`
  padding: 5px;
  background-color: lightgreen;
  color: black;
  font-size: 5px;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
`

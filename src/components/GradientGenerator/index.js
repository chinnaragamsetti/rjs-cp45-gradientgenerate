import {Component} from 'react'
import {
  MainCont,
  MainHead,
  Para,
  InputsCont,
  InputCont,
  Input,
  Button,
  Ul,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    c1: '#8ae323',
    c2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    generate: false,
  }

  onChangeButton = directionId => {
    this.setState({direction: directionId})
  }

  onChangeC1 = event => {
    this.setState({c1: event.target.value})
  }

  onChangeC2 = event => {
    this.setState({c2: event.target.value})
  }

  onGenerate = () => {
    this.setState(prevState => ({generate: !prevState.generate}))
  }

  render() {
    const {c1, c2, direction} = this.state
    return (
      <MainCont
        bgstatus={direction}
        color1={c1}
        color2={c2}
        data-testid="gradientGenerator"
      >
        <MainHead>Generate a CSS Color Gradient</MainHead>
        <Para>Choose Direction</Para>
        <Ul>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              isActive={direction === each.directionId}
              onChangeButton={this.onChangeButton}
              eachItem={each}
            />
          ))}
        </Ul>
        <Para>Pick the Colors</Para>
        <InputsCont>
          <InputCont>
            <Para>{c1}</Para>
            <Input type="color" value={c1} onChange={this.onChangeC1} />
          </InputCont>
          <InputCont>
            <Para>{c2}</Para>
            <Input type="color" value={c2} onChange={this.onChangeC2} />
          </InputCont>
        </InputsCont>
        <Button type="button" onClick={this.onGenerate}>
          Generate
        </Button>
      </MainCont>
    )
  }
}

export default GradientGenerator

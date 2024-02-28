// Write your code here
import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, onChangeButton} = props
  const {directionId, displayText, value} = eachItem

  const onChangeDirection = () => {
    onChangeButton(value)
  }

  return (
    <li>
      <CustomButton
        key={directionId}
        onClick={onChangeDirection}
        // IsActive={isActive ? '#ffffff' : 'c1'}
      >
        {displayText}
      </CustomButton>
    </li>
  )
}

export default GradientDirectionItem

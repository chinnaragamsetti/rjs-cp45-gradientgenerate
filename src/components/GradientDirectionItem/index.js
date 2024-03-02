// Write your code here
import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, onChangeButton, isActive} = props
  const {displayText, value} = eachItem

  const onChangeDirection = () => {
    onChangeButton(value)
  }

  return (
    <li>
      <CustomButton
        type="button"
        onClick={onChangeDirection}
        IsActive={isActive}
      >
        {displayText}
      </CustomButton>
    </li>
  )
}

export default GradientDirectionItem

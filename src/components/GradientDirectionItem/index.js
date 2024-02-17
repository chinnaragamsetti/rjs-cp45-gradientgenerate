// Write your code here
import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, onChangeButton, isActive} = props
  const {directionId, displayText} = eachItem

  const onChangebutton = () => {
    onChangeButton(directionId)
  }

  return (
    <CustomButton
      key={directionId}
      onClick={onChangebutton}
      IsActive={isActive ? '#ffffff' : 'c1'}
    >
      {displayText}
    </CustomButton>
  )
}

export default GradientDirectionItem

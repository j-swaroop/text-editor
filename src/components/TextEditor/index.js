import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  ResponsiveContainerr,
  LeftPart,
  Image,
  Heading,
  RightPart,
  TextArea,
  ButtonsContainer,
  BtnLi,
  Btn1,
  Btn2,
  Btn3,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state

    const boldBtnColor = bold ? '#faff00' : '#f1f5f9'
    const italicBtnColor = italic ? '#faff00' : '#f1f5f9'
    const underlineBtnColor = underline ? '#faff00' : '#f1f5f9'

    return (
      <MainContainer>
        <ResponsiveContainerr>
          <LeftPart>
            <Heading> Text Editor </Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftPart>
          <RightPart>
            <ButtonsContainer>
              <BtnLi>
                <Btn1 data-testid="bold" onClick={this.onClickBold} color={boldBtnColor}>
                  <VscBold color={boldBtnColor} size={20} />
                </Btn1>
              </BtnLi>
              <BtnLi>
                <Btn2 data-testid="italic" onClick={this.onClickItalic} color={italicBtnColor}>
                  <GoItalic color={italicBtnColor} size={20} />
                </Btn2>
              </BtnLi>
              <BtnLi>
                <Btn3 data-testid="underline" onClick={this.onClickUnderline} color={underlineBtnColor}>
                  <AiOutlineUnderline color={underlineBtnColor} size={20} />
                </Btn3>
              </BtnLi>
            </ButtonsContainer>
            <TextArea bold={bold} italic={italic} underline={underline} />
          </RightPart>
        </ResponsiveContainerr>
      </MainContainer>
    )
  }
}

export default TextEditor

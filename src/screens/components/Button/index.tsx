import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  PRIMARY,
  WHITE,
  BLACK_50,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
} from '../../../identity';

interface ButtonProps {
  type:
    | 'button'
    | 'button-block'
    | 'clear'
    | 'clear-gray'
    | 'outline'
    | 'outline-gray'
    | 'fb';
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({type, text, onPress, disabled}) => {
  ////@TOUCHABLE STYLES
  const defaultButton = {
    borderRadius: 3,
    padding: 12,
    backgroundColor: PRIMARY,
    alignItems: 'center',
  };
  const buttonBlock = {
    borderRadius: 3,
    width: '100%',
    padding: 12,
    backgroundColor: PRIMARY,
    alignItems: 'center',
  };
  const outlineButton = {
    marginTop: 10,
    alignItems: 'center',
    border: 1,
    borderColor: PRIMARY,
  };
  const buttonBlockClearAndClearGray = {
    padding: 0,
  };

  const FBBlock = {
    width: '100%',
    backgroundColor: '#3b5998',
    borderRadius: 5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 17,
  };

  ////@TEXTS STYLES
  const buttonText = {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  };
  const buttonTextOutline = {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
    color: PRIMARY,
  };
  const buttonTextOutlineGray = {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
    color: BLACK_50,
  };
  const buttonTextClear = {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  };
  const buttonTextClearGray = {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  };
  const FBtext = {
    fontSize: FONT_SIZE_SMALL,
    color: WHITE,
    marginLeft: 14,
    fontFamily: FONT_FAMILY_BOLD,
  };

  switch (type) {
    case 'fb':
      return (
        <TouchableOpacity style={FBBlock}>
          <Icon name="facebook" size={24} color={WHITE} />
          <Text style={FBtext}>Entrar com Facebook</Text>
        </TouchableOpacity>
      );
    case 'outline-gray':
      return (
        <TouchableOpacity onPress={onPress} style={outlineButton}>
          <Text style={buttonTextOutlineGray}>{text}</Text>
        </TouchableOpacity>
      );
    case 'outline':
      return (
        <TouchableOpacity onPress={onPress} style={outlineButton}>
          <Text style={buttonTextOutline}>{text}</Text>
        </TouchableOpacity>
      );
    case 'clear-gray':
      return (
        <TouchableOpacity
          onPress={onPress}
          style={buttonBlockClearAndClearGray}>
          <Text style={buttonTextClearGray}>{text}</Text>
        </TouchableOpacity>
      );
    case 'clear':
      return (
        <TouchableOpacity
          onPress={onPress}
          style={buttonBlockClearAndClearGray}>
          <Text style={buttonTextClear}>{text}</Text>
        </TouchableOpacity>
      );
    case 'button-block':
      return (
        <TouchableOpacity onPress={onPress} style={buttonBlock}>
          <Text style={buttonText}>{text}</Text>
        </TouchableOpacity>
      );
    case 'button':
      return (
        <TouchableOpacity onPress={onPress} style={defaultButton}>
          <Text style={buttonText}>{text}</Text>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity onPress={onPress} style={defaultButton}>
          <Text style={buttonText}>{text}</Text>
        </TouchableOpacity>
      );
  }
};

export default Button;

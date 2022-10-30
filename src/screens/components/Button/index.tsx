import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PRIMARY, WHITE, BLACK_50} from '../../../identity';

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
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: WHITE,
  };
  const buttonTextOutline = {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: PRIMARY,
  };
  const buttonTextOutlineGray = {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: BLACK_50,
  };
  const buttonTextClear = {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: WHITE,
  };
  const buttonTextClearGray = {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: WHITE,
  };
  const FBtext = {
    fontSize: 14,
    color: WHITE,
    marginLeft: 14,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
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

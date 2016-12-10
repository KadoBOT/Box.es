import styled from 'styled-components';

const Button = styled.button`
  width: ${props => props.follow ? '8em' : '100%'};
  height: ${props => props.follow ? '30px' : '45px'};
  background: ${props => props.follow ? 'transparent' : '#09b509'};;
  outline: none;
  border: ${props => props.follow ? '1px solid black' : 'none'};;
  border-radius: ${props => props.follow ? '3px' : '6px'};
  float: right;
  color: ${props => props.follow ? 'black' : 'white'};
  margin-top: 5px;
  font-size: ${props => props.follow ? 'small' : '17px'};
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-right: ${props => props.follow ? '17px': '0'}
`

export default Button

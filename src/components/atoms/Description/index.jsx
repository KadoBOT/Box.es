import styled from 'styled-components';

const Description = styled.div`
  font-size: 16px;
  color: gray;
  max-height: ${props => props.complete ? '190px' : '80px'};
  overflow: hidden;
  line-height: 20px;
  display: ${props => props.complete ? 'block' : '-webkit-box'};
  overflow: ${props => props.complete ? 'auto' : 'hidden'};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => props.comment ? '2' : '3'};;
  line-height: 20px;
  position: relative;
  word-break: break-word;
  -webkit-box-shadow: ${props => props.complete && 'inset 0px -30px 22px -17px rgba(0,0,0,0.12)'};
  -moz-box-shadow: ${props => props.complete && 'inset 0px -30px 22px -17px rgba(0,0,0,0.12)'};
  box-shadow: ${props => props.complete && 'inset 0px -30px 22px -17px rgba(0,0,0,0.12)'};
  padding-bottom: ${props => props.complete && '25px'};
`

export default Description

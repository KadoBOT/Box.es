import React from 'react'
import styled from 'styled-components';

const Title = styled.div`
  font-size: ${props => props.subheader ? '14px' : '32px'};
  font-weight: ${props => props.subheader ? 100 : 'bold'};
  color: ${props => props.subheader ? '#b3b3b3' : 'rgb(59, 59, 59)'};
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: ${props => props.subheader ? '20px' : '40px' };
  max-height: 80px;
`

export default Title

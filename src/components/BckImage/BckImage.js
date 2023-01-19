import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/bck.png'

const Div = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${logo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 960px;
    height: 1080px;
`

const BckImage = () => {
  return (
    <Div>

    </Div>
  )
}

export default BckImage;
import React from 'react';
import styled from 'styled-components';

import logoUol from '../../../assets/uol_logo.svg'

const Div = styled.div`
    position: fixed;
    bottom: -140px;
    right: -100px;
    background-image: url(${logoUol});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: fill;
    height: 780px;
    width: 780px;
    opacity: 0.5;
`

const BigLogo = () => {
  return (
    <Div>

    </Div>
  );
};

export default BigLogo;
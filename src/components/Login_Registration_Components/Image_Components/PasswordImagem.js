import React from 'react';
import styled from 'styled-components';

import passwordImg from '../../../assets/password.svg'

const Div = styled.div`
    height: 25px;
    width: 20px;
`

const PasswordImage = () => {
  return (
    <Div>
      <img src={passwordImg} alt="lockImage" />
    </Div>
  );
};

export default PasswordImage;
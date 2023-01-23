import React from 'react';
import styled from 'styled-components';

import usernameImg from '../../../assets/username.svg'

const Div = styled.div`
    height: 25px;
    width: 20px;
`

const UsernameImage = () => {
  return (
    <Div>
      <img src={usernameImg} alt="lockImage" />
    </Div>
  );
};

export default UsernameImage;
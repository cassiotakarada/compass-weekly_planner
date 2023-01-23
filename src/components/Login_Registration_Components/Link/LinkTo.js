import React from 'react';

import styles from './LinkTo.module.css';

const LinkTo = ( props ) => {
  return (
      <p className={styles.linkTo}>{props.title}<strong><u>{props.lastWorld}</u></strong>.</p>
  );
};

export default LinkTo;
import React from "react";

import styles from "./SelectDash.module.css"

const SelectDash = ( props ) => {

  return (
        <div>
            <select placeholder={props.placeholder} name={props.name} id={props.id} className={styles.selectDash} onChange={props.onChange}>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="friday">Friday</option>
            </select>
    </div>
  );
};

export default SelectDash;
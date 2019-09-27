import React from 'react';

import './list-icon.styles.scss';

const LinkIcon = ({
    code,
    edit,
    erase,
    handleClick
}) => (
    <button className={`${edit ? "listInfo-edit" : ""} ${
        erase ? "listInfo-delete" : ""
      }`} onClick={handleClick}>
      {code}
    </button>
);

export default LinkIcon;

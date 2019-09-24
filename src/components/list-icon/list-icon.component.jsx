import React from 'react';

import './list-icon.styles.scss';

const LinkIcon = ({
    code,
    edit,
    erase
}) => (
    <span className={`${edit ? "listInfo-edit" : ""} ${
        erase ? "listInfo-delete" : ""
      }`}>
      {code}
    </span>
);

export default LinkIcon;

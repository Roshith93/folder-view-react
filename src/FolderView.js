import React, { useState } from 'react';

export const FolderView = ({ folderJSON }) => {
  const [expandView, setExpandView] = useState(false);
  if (folderJSON.items) {
    return (
      <>
        <span onClick={() => setExpandView(!expandView)}>
          {folderJSON.name}
        </span>
        <br />
        <div
          style={{
            display: expandView ? 'block' : 'none',
            paddingLeft: '10px',
          }}
        >
          {folderJSON.items.map((el) => {
            return <FolderView folderJSON={el} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <span>
        {folderJSON.name}
        <br />
      </span>
    );
  }
};

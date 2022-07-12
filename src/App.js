import React from 'react';
import './style.css';

const folderJSON = 
  {
    items: [
      {
        isFolder: true,
        name: 'src',
        items: [
          {
            isFolder: false,
            name: 'App.js',
          },
          {
            isFolder: false,
            name: 'index.js',
          },
          {
            isFolder: false,
            name: 'Styles.css',
          },
        ],
      },
      {
        isFolder: true,
        name: 'public',
        items: [
          {
            isFolder: false,
            name: 'index.html',
          },
        ],
      },
    ],
    isFolder: true,
    name: 'root',
  },


import { FolderView } from './FolderView';

export default function App() {
  return (
    <div>
      <FolderView folderJSON={folderJSON} />
    </div>
  );
}

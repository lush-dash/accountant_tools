import React from 'react';
import { BiCopy } from 'react-icons/bi';
import './index.css';

export default function CopyIcon({ copy }) {
  return (
    <BiCopy
      className="icon"
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(copy);
      }}
    />
  );
}

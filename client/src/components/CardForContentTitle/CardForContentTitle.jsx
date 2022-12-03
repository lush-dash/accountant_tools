import React from 'react';
import { CardTitle } from 'reactstrap';
import './index.css';

export default function CardForContentTitle({ title }) {
  return (
    <CardTitle className="sub-title" tag="h5">
      {title}
    </CardTitle>
  );
}

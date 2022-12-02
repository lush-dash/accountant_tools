import React from 'react';
import { Button } from 'reactstrap';
import './index.css';

export default function SubmitButton({ text }) {
  return (
    <div className="button-container">
      <Button
        className="button"
        type="submit"
        color="primary"
        outline
      >
        {text}
      </Button>
    </div>
  );
}

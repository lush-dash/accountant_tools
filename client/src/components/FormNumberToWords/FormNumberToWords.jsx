import React from 'react';
import {
  Form, FormGroup, Input, Label,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { setNumberInWordsThunk } from '../../redux/actions/numberInWordsActions';
import './index.css';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function FormNumberToWords() {
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(setNumberInWordsThunk(Object.fromEntries(new FormData(e.target))));
  }

  return (
    <Form onSubmit={(e) => submitHandler(e)}>
      <FormGroup>
        <Label for="number">
          Сумма
        </Label>
        <Input
          className="input"
          id="number"
          name="number"
          placeholder="0.00"
          type="number"
          step=".01"
          max="999999999999.99"
          min="0"
        />
      </FormGroup>
      <FormGroup>
        <Label for="currency">
          Валюта
        </Label>
        <Input
          className="input"
          id="currency"
          name="currency"
          type="select"
        >
          <option>
            RUB
          </option>
          <option>
            EUR
          </option>
          <option>
            USD
          </option>
          <option>
            GBP
          </option>
        </Input>
      </FormGroup>
      <FormGroup tag="fieldset">
        <Label>
          Язык
        </Label>
        <FormGroup check>
          <Input
            name="language"
            type="radio"
            value="rus"
            id="rus"
            className="radio"
          />
          {' '}
          <Label for="rus" check>
            Русский
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="language"
            type="radio"
            value="eng"
            className="radio"
            id="eng"
          />
          {' '}
          <Label for="eng" check>
            Английский
          </Label>
        </FormGroup>
      </FormGroup>
      <SubmitButton text="Перевести" />
    </Form>
  );
}

import React from 'react';
import {
  Form, FormGroup, Input, Label,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import countCurrencyResult from './currencyResult';
import { setCurrencyResult } from '../../redux/actions/currencyResultActions';
import './index.css';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function FormCurrency() {
  const dispatch = useDispatch();
  return (
    <Form onSubmit={async (e) => {
      e.preventDefault();
      const result = await countCurrencyResult(Object.fromEntries(new FormData(e.target)));
      dispatch(setCurrencyResult(result));
    }}
    >
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
            className="radio"
          />
          {' '}
          <Label check>
            Русский
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="language"
            type="radio"
            value="eng"
            className="radio"
          />
          {' '}
          <Label check>
            Английский
          </Label>
        </FormGroup>
      </FormGroup>
      <SubmitButton text="Перевести" />
    </Form>
  );
}

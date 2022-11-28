import React from 'react';
import {
  Button,
  Col,
  Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import countCurrencyResult from './currencyResult';
import { setCurrencyResult } from '../../redux/actions/currencyResultActions';

export default function FormCurrency() {
  const dispatch = useDispatch();
  return (
    <Row>
      <Col>
        <Form onSubmit={async (e) => {
          e.preventDefault();
          const result = await countCurrencyResult(Object.fromEntries(new FormData(e.target)));
          dispatch(setCurrencyResult(result));
        }}
        >
          <FormGroup>
            <Label for="number">
              Number
            </Label>
            <Input
              id="number"
              name="number"
              placeholder="Enter a number"
              type="number"
              step=".01"
            />
          </FormGroup>
          <FormGroup>
            <Label for="currency">
              Currency
            </Label>
            <Input
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
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

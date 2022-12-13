import { clearNumberInWords, setNumberInWords } from '../../actions/numberInWordsActions';
import numberInWordsReducer from './numberInWordsReducer';

describe('Tests for numberInWordsReducer', () => {
  test('setNumberInWords action', () => {
    expect(numberInWordsReducer('', setNumberInWords('ноль рублей 00 копеек'))).toEqual('ноль рублей 00 копеек');
  });
  test('clearNumberInWords action', () => {
    expect(numberInWordsReducer('ноль рублей 00 копеек', clearNumberInWords())).toEqual('');
  });
  test('empty state', () => {
    expect(numberInWordsReducer(undefined, setNumberInWords('ноль рублей 00 копеек'))).toEqual('ноль рублей 00 копеек');
    expect(numberInWordsReducer(undefined, clearNumberInWords())).toEqual('');
  });
});

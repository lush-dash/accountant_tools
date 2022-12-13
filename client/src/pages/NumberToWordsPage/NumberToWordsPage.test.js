import { screen, fireEvent } from '@testing-library/react';
import NumberToWordsPage from './NumberToWordsPage';
import { renderWithProvider } from '../../tests/helpers/renderWithProvider';

describe('Tests for NumberToWordsPage', () => {
  test('NumberToWordsPage matches snapshot', () => {
    renderWithProvider(<NumberToWordsPage />);
    const container = screen.getByTestId('number-to-words-page');
    expect(container).toMatchSnapshot();
  });
  test('Renders main elements', () => {
    const page = renderWithProvider(<NumberToWordsPage />);
    const header = page.getByText(/сумма прописью/i);
    const input = screen.getByPlaceholderText('0.00');
    const button = screen.getByRole('button');
    const resultsContainer = screen.getByTestId('results-container');
    expect(header).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(resultsContainer).toBeInTheDocument();
  });
  test('Form with no data works', async () => {
    renderWithProvider(<NumberToWordsPage />);
    const button = screen.getByRole('button');
    expect(screen.queryByText(/здесь появится результат/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByText(/здесь появится результат/i)).toBeNull();
    expect(await screen.findByText(/ноль рублей 00 копеек/i)).toBeInTheDocument();
  });
  test('Form with data works', async () => {
    renderWithProvider(<NumberToWordsPage />);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText('0.00');
    const select = screen.getByLabelText('Валюта');
    const checkBox = screen.getByLabelText('Английский');
    fireEvent.input(input, { target: { value: '5' } });
    fireEvent.input(select, { target: { value: 'RUB' } });
    fireEvent.click(checkBox);
    fireEvent.click(button);
    expect(await screen.findByText(/five rubles 00 kopecks/i)).toBeInTheDocument();
  });
});

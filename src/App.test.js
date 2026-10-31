import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

test('renders the app heading', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByRole('heading', { name: /todo app/i })).toBeInTheDocument();
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App renders after fetching data', async () => {
  await render(<App />)
});

test('has a toggle button',  () => {
  const container = render(<App />);
  container.getByTestId('toggle');
})
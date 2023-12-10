import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this to extend Jest's expect functionality
import Home from './Home';

// Mock the useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
}));
 
test('renders Home component', () => {
  render(<Home />);

  // Assuming you have some text in your Home component, you can test for it
  expect(screen.getByText('header')).toBeInTheDocument();
  
  // You can add more assertions based on your component's behavior
});

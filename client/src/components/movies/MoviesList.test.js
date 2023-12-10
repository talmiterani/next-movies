import React from 'react';
import { render, screen } from '@testing-library/react';
import MoviesList from './MoviesList';

describe('MoviesList component', () => {
  test('displays loading spinner when in loading state', async () => {
    render(<MoviesList />);
    const loadingSpinner = await screen.findByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  test('handles page change correctly', async () => {
    render(<MoviesList />);
    await screen.findByTestId('pagination');
    // Click on the second page
    fireEvent.click(screen.getByText('2'));
  });
}); 
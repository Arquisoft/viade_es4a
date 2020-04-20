import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Space from './space.component';

afterAll(cleanup);

const { container } = render(<Space />);

describe('Spacer', () => {
  it('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from ".."

afterEach(cleanup);

describe('Contact component', () => {
  // First Test
  it('renders', () => {
    render(<Contact/>)
  })

  // Second Test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1contact')).toHaveTextContent('Contact me')
  })

  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('btncontact')).toHaveTextContent('Submit')
  })
})
// // import React from 'react';
// // import { render, screen } from '@testing-library/react';
// // import App from './App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });
import React from "react";
import { getByTestId, screen } from "@testing-library/react";
import { renderWithProviders } from "./Utils/utils-fr-tests";
import App from "./App";
describe("APP", () => {
  test("renders", () => {
     renderWithProviders(<App/>);
  });
});

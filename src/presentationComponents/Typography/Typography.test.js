import React from 'react';
import Typography from './index.jsx';
import { render, fireEvent} from '@testing-library/react';
describe("Testing Typography", ()=> {

  it("Variant should render correct tags",()=>{
    const html = render(<Typography variant="h6">Test</Typography>);
    const node = html.getByText(/Test/i);
    expect(node.tagName).toBe("H6");

  })

  it.only("Weight should respected",()=>{
    const html = render(<Typography data-testid="1" variant="h6" weight="medium">Test</Typography>);
    const node = html.getByTestId('1');
    expect(node).toHaveStyle('font-weight: 500;');
  })

})
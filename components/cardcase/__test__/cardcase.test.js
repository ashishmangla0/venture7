import { render } from '@testing-library/react'
import CardCase from '../CardCase'




describe('<CardCase/>', () => {
  it('renders CardCase Snapshot', () => {
    const { container } = render(<CardCase />)
    expect(container).toMatchSnapshot();
  })
  test('renders CardCase Component with Default values', () => {
    const { getByAltText, getByText, container } = render(<CardCase />);
    const actionButton = getByText('Read More');

    expect(actionButton).toBeInTheDocument();
    //actionButton.toBeInTheDocument();
    expect(container.querySelector('h3')).toBeNull();
    expect(container.querySelector('p')).toBeNull();

    //expect(container.querySelector('h3')).not.toBeNull();


  });
});
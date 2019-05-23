import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Footer from './index';

Enzyme.configure({ adapter: new Adapter() });

const { mount } = Enzyme;

describe('Footer Component Test', () => {
  // Render Footer component for testing it, Nest it in <BrowserRouter> because we can't use <Link> outside the router! (Link is in Footer).
  const footer = mount(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  // Normal test case, it's just to check if the rendered component output is the same as the one on the snapshot or not!
  test('Natural', () => {
    expect(footer).toMatchSnapshot();
  });

  // To test category select box if it's working correctly.
  test('Category Select check', () => {
    // Find the select category, that contains the select value in it's text.
    const select = footer.find({ id: 'select-category' });

    // Simulate the click event on the select category box.
    select.simulate('click');

    // Find choice of categorym and simulate it's click (to choose new select value).
    footer
      .find({ role: 'option', 'data-value': 'Campaigns' })
      .at(0)
      .simulate('click');

    // Check the element that contains the value in its html text, if its text change to be equal a value or not.
    expect(select.text()).toBe('Campaigns');
  });

  // And so on for the other tests...
  test('Location Select check', () => {
    const select = footer.find({ id: 'select-location' });
    select.simulate('click');
    footer
      .find({ role: 'option', 'data-value': 'London' })
      .at(0)
      .simulate('click');
    expect(select.text()).toBe('London');
  });

  test('Year Select check', () => {
    const select = footer.find({ id: 'select-year' });
    select.simulate('click');
    footer
      .find({ role: 'option', 'data-value': 1970 })
      .at(0)
      .simulate('click');
    expect(select.text()).toBe('1970');
  });
});

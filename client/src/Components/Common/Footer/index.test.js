import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Footer from './index';

Enzyme.configure({ adapter: new Adapter() });

const { mount } = Enzyme;

describe('Footer Component Test', () => {
  const footer = mount(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  test('Natural', () => {
    expect(footer).toMatchSnapshot();
  });

  test('Category Select check', () => {
    footer.find({ id: 'select-category' }).simulate('click');
    footer
      .find({ role: 'option', 'data-value': 'Campaigns' })
      .at(0)
      .simulate('click');
    expect(footer.find({ id: 'select-category' }).text()).toBe('Campaigns');
  });

  test('Location Select check', () => {
    footer.find({ id: 'select-location' }).simulate('click');
    footer
      .find({ role: 'option', 'data-value': 'London' })
      .at(0)
      .simulate('click');
    expect(footer.find({ id: 'select-location' }).text()).toBe('London');
  });

  test('Year Select check', () => {
    footer.find({ id: 'select-year' }).simulate('click');
    footer
      .find({ role: 'option', 'data-value': 1970 })
      .at(0)
      .simulate('click');
    expect(footer.find({ id: 'select-year' }).text()).toBe('1970');
  });
});

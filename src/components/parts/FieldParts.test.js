import { Button } from "./FieldParts";
import React from 'react';
import { mount } from 'enzyme';

test('show', () => {
    const wrapper = mount(
        <Button />
      );
      expect(wrapper).toMatchSnapshot()
})
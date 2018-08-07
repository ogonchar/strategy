import { StrategyBuilder } from "./StrategyBuilder";
import React from 'react';
import { mount } from 'enzyme';
import { mockStrategy } from "../../constants";

test('show StrategyBuilder', () => {
    const wrapper = mount(
        <StrategyBuilder 
        val = {mockStrategy.val}
        />
      );
      expect(wrapper).toMatchSnapshot()
})
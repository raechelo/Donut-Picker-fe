import React from 'react'
import {shallow} from 'enzyme'
import Donut from './Donut'


describe('Donut', () => {
    let wrapper;
    wrapper = shallow( <Donut/> )
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    
});
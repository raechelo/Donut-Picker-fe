import React from 'react'
import {shallow} from 'enzyme'
import Home from './Home'


describe('Home', () => {
    let wrapper;
    wrapper = shallow( <Home/> )
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    
});
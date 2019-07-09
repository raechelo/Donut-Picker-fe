import React from 'react'
import {shallow} from 'enzyme'
import App from './App'


describe('App', () => {
    let wrapper;
    wrapper = shallow( <App/> )
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    
});
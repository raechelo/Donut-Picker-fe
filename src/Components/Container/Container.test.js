import React from 'react'
import {shallow} from 'enzyme'
import Container from './Container'


describe('Container', () => {
    let wrapper;
    wrapper = shallow( <Container/> )
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    
});
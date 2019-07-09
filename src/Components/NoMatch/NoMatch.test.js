import React from 'react'
import {shallow} from 'enzyme'
import NoMatch from './NoMatch'


describe('NoMatch', () => {
    let wrapper;
    wrapper = shallow( <NoMatch/> )
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    
});
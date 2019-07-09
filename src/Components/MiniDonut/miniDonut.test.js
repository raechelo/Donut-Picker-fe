import React from 'react'
import {shallow} from 'enzyme'
import MiniDonut from './MiniDonut'


describe('MiniDonut', () => {
    let wrapper;
    wrapper = shallow( <MiniDonut/> )
    it('should matchsnapshot', () => {
        wrapper.instance().setState({fill: "Cyan"})
        expect(wrapper).toMatchSnapshot()
    });
    
});
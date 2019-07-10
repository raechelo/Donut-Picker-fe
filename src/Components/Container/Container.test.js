import React from 'react'
import {shallow} from 'enzyme'
import Container from './Container'


describe('Container', () => {
    let wrapper;
    window.alert = () => {};
    let mockProjects = [{name: "a test"}, {name: "another test"}]
    wrapper = shallow( <Container projects ={mockProjects}/> )
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it('should call savePalette when button is clicked', () => {
        let mockFn = jest.spyOn(wrapper.instance(), "savePalette");
        let button = wrapper.find("#save-btn");
        button.simulate("click", {event:{target:{value: null}}, preventDefault: jest.fn()});
        expect(mockFn).toHaveBeenCalled();
    });
    
});
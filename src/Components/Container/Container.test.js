import React from 'react'
import {shallow} from 'enzyme'
import Container from './Container'


describe('Container', () => {
    let wrapper;
    let mockF = jest.fn()
    window.alert = () => {};
    let mockProjects = [{name: "a test"}, {name: "another test"}]
    wrapper = shallow( <Container freshPalette ={mockF} projects ={mockProjects}/> )
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it('should call savePalette when button is clicked', () => {
        let mockFn = jest.spyOn(wrapper.instance(), "savePalette");
        let button = wrapper.find("#save-btn");
        button.simulate("click", {event:{target:{value: null}}, preventDefault: jest.fn()});
        expect(mockFn).toHaveBeenCalled();
    });
    it('should  call newPalettes onClick', () => {
        let mockFn = jest.spyOn(wrapper.instance(), "newPalettes");
        let button = wrapper.find("#palette-btn");
        button.simulate("click");
        expect(mockFn).toHaveBeenCalled();
    });
    it('should update state on savePalette', () => {
        wrapper.setState({ title: "test" });
        wrapper.instance().savePaletteName({target:{value:"testing"}, preventDefault:jest.fn()})
        expect(wrapper.state('title')).toEqual("testing")
    });
    
});
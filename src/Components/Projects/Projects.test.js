import React from 'react'
import {shallow} from 'enzyme'
import Projects from './Projects'


describe('Projects', () => {
    let wrapper;
    let mockProjects = [{name: "Testing", key: 1}, {name: "Also Testing", key: 2}]
    wrapper = shallow( <Projects projects={mockProjects}/> )
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it('should ', () => {
        wrapper.setState({ name: 'test' });
        wrapper.instance().handleChange({target:{value:"diff"}})
        expect(wrapper.state('name')).toEqual("diff")

    });
    
});
import React from 'react'
import {shallow} from 'enzyme'
import Projects from './Projects'


describe('Projects', () => {
    let wrapper;
    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve()
    })
  );
    let mockProjects = [{name: "Testing", key: 1}, {name: "Also Testing", key: 2}]
    wrapper = shallow( <Projects projects={mockProjects}/> )
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it('should update state on handleChange ', () => {
        wrapper.setState({ name: 'test' });
        wrapper.instance().handleChange({target:{value:"diff"}})
        expect(wrapper.state('name')).toEqual("diff")
    });
    it("should call the correct URL when fetching palettes on postProject()", () => {
        let URL = "http://localhost:3001/api/v1/projects";
        wrapper.instance().postProject();
        expect(window.fetch).toHaveBeenCalledWith(URL,{"body": "{\"name\":\"diff\"}", "headers": {"Accept": "application/json", "Content-Type": "application/json"}, "method": "POST"})
      });
    
});
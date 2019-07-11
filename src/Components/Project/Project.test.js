import React from 'react'
import {shallow} from 'enzyme'
import Project from './Project'

describe('Project', () => {
    let wrapper;
    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve()
    })
  );
    let mockProps = [{color_1: "#FFF", color_2: "#FFF", color_3: "#FFF"}]
    wrapper = shallow(<Project palettes = {mockProps}/>)
    it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
    });
    it("should call the correct URL when fetching palettes in deletePalette()", () => {
        let URL = "http://localhost:3001/api/v1/palettes/7";
        wrapper.instance().deletePalette(7);
        expect(window.fetch).toHaveBeenCalledWith(URL, {"body": "{\"id\":7}", "headers": {"Accept": "application/json", "Content-Type": "application/json"}, "method": "DELETE"});
      });
      it("should call the correct URL when fetching palettes in updatePalette()", () => {
        let URL = "http://localhost:3001/api/v1/palettes/7";
        wrapper.instance().updatePalette(7);
        expect(window.fetch).toHaveBeenCalledWith(URL, {"body": "{}", "headers": {"Accept": "application/json", "Content-Type": "application/json"}, "method": "PUT"})
      });
      it('should update State on handleChange', () => {
        wrapper.setState({ name: 'test', currentPalette: {} });
        wrapper.instance().handleChange({target:{value:"diff"}})
        expect(wrapper.state('name')).toEqual("diff")
      });
      it('should update State on handleModal', () => {  
        wrapper.setState({ showModal: false, currentPalette:{name:"test"} });
        wrapper.instance().handleOpenModal({target:{value:"diff"}})
        expect(wrapper.state('showModal')).toEqual(true)
      });
});
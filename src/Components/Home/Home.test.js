import React from 'react'
import {shallow} from 'enzyme'
import Home from './Home'


describe('Home', () => {
    let wrapper = shallow( <Home/> );
    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve()
    })
  );
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    
    it("should call freshPalettes() on componentDidMount", () => {
        let MockFn = jest.spyOn(wrapper.instance(), "freshPalette");
        wrapper.instance().componentDidMount();
        expect(MockFn).toHaveBeenCalled();
      });
      it("should call the correct URL when fetching palettes on savePalette()", () => {
        let URL = "http://localhost:3001/api/v1/palettes";
        wrapper.instance().savePalette();
        expect(window.fetch).toHaveBeenCalledWith(URL, {"body": "{}", "headers": {"Accept": "application/json", "Content-Type": "application/json"}, "method": "PUT"})
      });
      
    
});
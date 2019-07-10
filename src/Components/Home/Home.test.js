import React from 'react'
import {shallow} from 'enzyme'
import Home from './Home'


describe('Home', () => {
    let wrapper;
    wrapper = shallow( <Home/> )
    it('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    
    it("should call freshPalettes() on componentDidMount", () => {
        let MockFn = jest.spyOn(wrapper.instance(), "freshPalette");
        wrapper.instance().componentDidMount();
        expect(MockFn).toHaveBeenCalled();
      });
    
});
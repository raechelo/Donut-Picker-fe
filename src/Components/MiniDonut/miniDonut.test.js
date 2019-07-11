import React from 'react'
import {shallow} from 'enzyme'
import MiniDonut from './MiniDonut'


describe('MiniDonut', () => {
    let MockFn = jest.fn()
    let wrapper = shallow( <MiniDonut saveFavorites = {MockFn}/> )
    it.skip('should matchsnapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it.skip('should call saveForites on click', () => {
        let button = wrapper.find(".mini-donut");
        button.simulate("click", null);
        expect(MockFn).toHaveBeenCalled();
    });
    
});
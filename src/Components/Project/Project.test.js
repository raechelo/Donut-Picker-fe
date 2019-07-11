import React from 'react'
import {shallow} from 'enzyme'
import Project from './Project'

describe('Project', () => {
    let wrapper;
    let mockProps = [{color_1: "#FFF", color_2: "#FFF", color_3: "#FFF"}]
    wrapper = shallow(<Project palettes = {mockProps}/>)
    it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
        
    });
});
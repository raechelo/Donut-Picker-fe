import React from 'react'
import {shallow} from 'enzyme'
import Project from './Project'

describe('Project', () => {
    let wrapper;
    let mockProps = [{id: 5}]
    wrapper = shallow(<Project palettes = {mockProps}/>)
    it('should matchn', () => {
    expect(wrapper).toMatchSnapshot()
        
    });
});
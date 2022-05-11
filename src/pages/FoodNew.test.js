// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatNew from './CatNew'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter() })

describe("When the CatNew Renders", () => {
  it("shows 1 div", () => {
    const renderedH = shallow (<CatNew/>)
    const renderedNavItems = renderedHeader.find("h2").text()
    expect(renderedNavItems.length).toEqual(1)
  })
  it("display a form", () => {
    const renderedH = shallow (<CatNew/>)
    const renderedFormGroup = renderedHeader.find("FormGroup")
    expect(renderedNavItems.length).toEqual(4)
  })
  it("display a form", () => {
    const catFood = shallow (<CatNew/>)
    const formLable = renderedHeader.find("FormLabel")
    expect(formLable.length).toEqual(4)
  })
  it("display a form", () => {
    const catFood = shallow (<CatNew/>)
    const input = renderedHeader.find("Input")
    expect(input.length).toEqual(4)
})

import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const fetchSpy = jest.spyOn(global, "fetch");
  const mockFunction = jest.fn();
  let wrapper = shallow(<App/>);
  let mockGET;
  let mockData

  beforeEach(() => {
    mockData = [{ name: "A test"},{ name: "another test"}];
    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData)
    })
  );
    mockGET = {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json"
      }
    };
  });
  it("should matchsnapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call the correct URL when fetching projects in fetchProjects()", () => {
    let URL = "http://localhost:3001/api/v1/projects";
    wrapper.instance().fetchProjects(URL);
    expect(window.fetch).toHaveBeenCalledWith(URL);
  });
  it("should call the correct URL when fetching projects in fetchPalettes()", () => {
    let URL = "http://localhost:3001/api/v1/palettes";
    wrapper.instance().fetchPalettes();
    expect(window.fetch).toHaveBeenCalledWith(URL);
  });
  it("should call fetchProjects() on componentDidMount", () => {
    let mockFn = jest.spyOn(wrapper.instance(), "fetchProjects");
    wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });
  it("should call fetchProjects() on componentDidMount", () => {
    let mockFn = jest.spyOn(wrapper.instance(), "fetchPalettes");
    wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

})
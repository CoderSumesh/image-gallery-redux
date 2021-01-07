import React from "react";

import Header from '../Header'

describe("Header", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header  />);
  });

  it("renders properly", () => {
    expect(component.find("header")).to.have.length(1);
  });

  it("checks header text", () => {
    expect(component.find("header").text()).to.equal("Imaginary");
  });
});
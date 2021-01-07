import React from "react";

import Navbar from '../Navbar'

describe("Navbar", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Navbar  />);
  });

  it("renders properly", () => {
    expect(component.find(".navbar")).to.have.length(1);
  });

});
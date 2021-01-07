import React from "react";
import sinon from "sinon";

import SearchImage from "../SearchImage";

describe("SearchImage", () => {
  let component;
  const props = {
    searchImageList: sinon.spy(),
  };

  beforeEach(() => {
    component = shallow(<SearchImage {...props} />);
  });

  it("renders properly", () => {
    expect(component.find(".search-box")).to.have.length(1);
  });

  it("simulate search", () => {
    const event = {currentTarget: {name: "picName", value: "bird"}};
    component.find(".search-box").at(0).simulate("change", event);
    expect(props.searchImageList.calledOnce).to.equal(true);
  });
});
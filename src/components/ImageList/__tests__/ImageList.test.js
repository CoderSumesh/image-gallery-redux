import React from "react";
import sinon from "sinon";

import ImageList from "../ImageList";
import data from "../../../mock/data";

describe("ImageList", () => {
  let component;
  const props = {
    isLoading: false,
    images: data.pics,
    fetchImages: sinon.spy(),
    searchText: "",
  };

  beforeEach(() => {
    component = shallow(<ImageList {...props} />);
  });

  it("renders properly", () => {
    expect(component.find(".grid-item")).to.have.length(8);
  });
});

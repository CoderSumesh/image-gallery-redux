import React from "react";
import sinon from "sinon";

import { SORT_MOST_LIKED } from "../../../store/actionTypes";

import SortList from "../SortList";

describe("SortList", () => {
  let component;
  const props = {
    sortType: SORT_MOST_LIKED,
    sortImageMostLiked: sinon.spy(),
    sortImageMostCommented: sinon.spy(),
  };

  beforeEach(() => {
    component = shallow(<SortList {...props} />);
  });

  it("renders properly", () => {
    expect(component.find("li")).to.have.length(2);
  });

  it("simulate sort", () => {
    component.find("li").at(0).simulate("click");
    expect(props.sortImageMostLiked.calledOnce).to.equal(true);
  });
});

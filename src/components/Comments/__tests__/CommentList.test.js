import React from "react";

import CommentList from '../CommentList'

describe("CommentList", () => {
  let component;
  const props = {
    comments: ['a', 'b'],
  };


  beforeEach(() => {
    component = shallow(<CommentList {...props}  />);
  });

  it("renders properly", () => {
    expect(component.find("li")).to.have.length(2);
  });

});
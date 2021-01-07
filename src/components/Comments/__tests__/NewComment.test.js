import React from "react";
import sinon from "sinon";

import NewComment from "../NewComment";

describe("NewComment", () => {
  let component;
  const props = {
    imageId: 1,
    postComment: sinon.spy(),
  };

  beforeEach(() => {
    component = shallow(<NewComment {...props} />);
  });

  it("renders properly", () => {
    expect(component.find(".input-group-icon")).to.have.length(1);
  });

  it("simulate button click", () => {
    component.find(".input-group-icon").at(0).simulate("click");
    expect(props.postComment.calledOnce).to.equal(true);
  });
});
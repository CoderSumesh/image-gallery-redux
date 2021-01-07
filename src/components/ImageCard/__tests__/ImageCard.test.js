import React from "react";
import sinon from "sinon";

import ImageCard from "../ImageCard";

describe("ImageCard", () => {
  let component;
  const props = {
    setLike: sinon.spy(),
    setUnlike: sinon.spy(),
    data: {
      id: 0,
      category: "Flowers",
      url:
        "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg",
      likes: 8,
      comments: ["Amazing pic !"],
    },
  };

  beforeEach(() => {
    component = shallow(<ImageCard {...props} />);
  });

  it("renders properly", () => {
    expect(component.find(".card")).to.have.length(1);
  });

  it("simulate button click", () => {
    component.find(".like-button").at(0).simulate("click");
    expect(props.setLike.calledOnce).to.equal(true);
  });
});

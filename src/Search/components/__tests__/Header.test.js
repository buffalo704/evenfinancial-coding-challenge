import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Header />);
});

afterEach(() => {
  wrapped.unmount();
});

it("shows copyright in Header", () => {
  //console.log(wrapped.debug());
  expect(wrapped.find("header")).toHaveLength(1);
  expect(wrapped.find("article")).toHaveLength(1);
  expect(wrapped.find("img")).toHaveLength(1);
});

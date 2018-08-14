import React from "react";
import { shallow } from "enzyme";
import Footer from "../Footer";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Footer />);
});

afterEach(() => {
  wrapped.unmount();
});

it("shows copyright in Footer", () => {
  //console.log(wrapped.debug());
  expect(wrapped.find("footer")).toHaveLength(1);
  expect(wrapped.text()).toEqual(" ©2017 Even Financial, Inc. - CONFIDENTIAL");
});

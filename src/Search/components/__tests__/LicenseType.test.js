import React from "react";
import { shallow, mount } from "enzyme";
import LicenseType from "../LicenseType";
import { Field } from "redux-form";
let wrapped;

const licenses = [
  {
    license: "University of Illinois/NCSA Open Source License",
    keyword: "ncsa"
  },
  {
    license: "The Unlicense",
    keyword: "unlicense"
  },
  {
    license: "zLib License",
    keyword: "zlib"
  }
];

beforeEach(() => {
  wrapped = shallow(<LicenseType licenses={licenses} />);
});

afterEach(() => {
  wrapped.unmount();
});

it("should find Field element", () => {
  //console.log(wrapped.debug());
  expect(wrapped.find("Field").exists()).toBe(true);
  expect(wrapped.find("Field")).toHaveLength(1);
});

it("should find Option element", () => {
  //console.log(wrapped.debug());
  expect(wrapped.find("option").exists()).toBe(true);
  expect(wrapped.find("option")).toHaveLength(4);

  expect(
    wrapped.contains(<option value="unlicense">The Unlicense</option>)
  ).toBeTruthy();

  expect(
    wrapped.contains(
      <option value="ncsa">
        University of Illinois/NCSA Open Source License
      </option>
    )
  ).toBeTruthy();
});

import React from "react";
import { shallow } from "enzyme";
import { Pagination } from "../Pagination";
import { SearchForm } from "../SearchForm";

let wrapped;

const initialValues = {};
const mockhandleSubmit = jest.fn();
const mockonSubmit = jest.fn();
const invalid = false;
const submitting = false;
const pristine = true;
beforeEach(() => {
  wrapped = shallow(
    <SearchForm
      initialValues={initialValues}
      handleSubmit={mockhandleSubmit}
      onSubmit={mockonSubmit}
      submitting={submitting}
      invalid={invalid}
      pristine={pristine}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("shows Search Form Fields", () => {
  //console.log(wrapped.debug());
  expect(wrapped.find("Field")).toHaveLength(3);
});

it("click Submit Button", () => {
  wrapped.find("button").simulate("click", { preventDefault() {} });

  expect(mockhandleSubmit.mock.calls.length).toBe(2);
});

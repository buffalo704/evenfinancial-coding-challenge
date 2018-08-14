import React from "react";
import { shallow } from "enzyme";
import { Pagination } from "../Pagination";

let wrapped;

const totalRecords = 100;
const mockonPageChanged = jest.fn();
const app = { paginationInfo: { currentPage: 4 } };

beforeEach(() => {
  wrapped = shallow(
    <Pagination
      totalRecords={totalRecords}
      pageLimit={30}
      pageNeighbors={1}
      onPageChanged={mockonPageChanged}
      app={app}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("shows number of page-items", () => {
  //console.log(wrapped.debug());
  expect(wrapped.find(".page-item")).toHaveLength(4);
});

it("click page-link", () => {
  wrapped
    .find(".page-link")
    .first()
    .simulate("click", { preventDefault() {} });

  expect(mockonPageChanged.mock.calls.length).toBe(1);
});

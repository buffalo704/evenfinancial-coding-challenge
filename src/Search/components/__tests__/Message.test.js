import React from "react";
import { shallow } from "enzyme";
import Message from "../Message";

let wrapped;

// beforeEach(() => {
//   wrapped = shallow(<Message items={items} formValues={formValues} />);
// });

afterEach(() => {
  wrapped.unmount();
});

describe("Message tests", () => {
  it("should say instructions for search", () => {
    const items = [];
    const formValues1 = {};

    wrapped = shallow(<Message items={items} formValues={formValues1} />);
    expect(
      wrapped.contains(
        "Please enter query and click SEARCH button above, results appear here."
      )
    ).toBeTruthy();
  });

  it("should say search results", () => {
    const items = ["random string"];
    const formValues2 = {
      search: {
        submitSucceeded: true
      }
    };
    wrapped = shallow(<Message items={items} formValues={formValues2} />);
    expect(wrapped.contains("SEARCH results:")).toBeTruthy();
  });

  it("should say no search results", () => {
    const items = [];
    const formValues3 = {
      search: {
        submitSucceeded: true
      }
    };
    wrapped = shallow(<Message items={items} formValues={formValues3} />);
    expect(wrapped.contains("Your query returned no results.")).toBeTruthy();
  });
});

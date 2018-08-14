import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { SEARCH_REPO } from "../app-actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  const API_URL = "https://api.github.com/search/repositories";

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates SEARCH_REPO_SUCCESS when fetching data is done", () => {
    fetchMock.getOnce(`${API_URL}?q=tetris&page=1&per_page=1`, {
      body: { data: ["mock and loaded"] },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: "SEARCH_REPO_REQUEST" },
      { payload: { currentPage: 1 }, type: "SET_PAGINATION_INFO" },
      {
        type: "SEARCH_REPO_SUCCESS",
        payload: { data: ["mock and loaded"] }
      }
    ];
    const store = mockStore({ patients: [] });

    return store.dispatch(SEARCH_REPO({ text: "tetris" }, 1, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates SEARCH_REPO_FAIL when fetching data is rejected", () => {
    fetchMock.getOnce(
      `${API_URL}?q=chess&page=1&per_page=1`,
      Promise.reject("error")
    );

    const expectedActions = [
      { type: "SEARCH_REPO_REQUEST" },
      { SEARCH_REPO_FAIL: "Invalid data", type: "SEARCH_REPO_FAIL" }
    ];
    const store = mockStore({ messages: [] });

    return store.dispatch(SEARCH_REPO({ text: "chess" }, 1, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

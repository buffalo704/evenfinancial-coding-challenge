import history from "../history";

export const SET_PAGINATION_INFO = data => ({
  type: "SET_PAGINATION_INFO",
  data: data
});

export const SEARCH_REPO_REQUEST = () => ({
  type: "SEARCH_REPO_REQUEST"
});

export const SEARCH_REPO_SUCCESS = data => ({
  type: "SEARCH_REPO_SUCCESS",
  data: data
});

export const SEARCH_REPO_FAIL = data => ({
  type: "SEARCH_REPO_FAIL",
  data: data
});

export const QUERY_BUILDER = data => {
  const { text, stars, license, fork, currentPage, pageLimit } = data;
  let l = license !== undefined ? " license:" + license : "";
  let f = fork !== undefined ? " fork:" + fork : "";
  let s = stars !== undefined ? " stars:" + stars : "";

  let params = {
    q: text + l + f + s,
    page: currentPage || 1,
    per_page: pageLimit || 30
  };

  let paramsString = Object.keys(params).reduce(
    (prev, key, i) => `${prev}${i !== 0 ? "&" : ""}${key}=${params[key]}`,
    ""
  );

  history.push("/?" + paramsString);

  return paramsString;
};

export const SEARCH_REPO = (
  { text, stars, license, fork },
  currentPage,
  pageLimit
) => async dispatch => {
  let params = QUERY_BUILDER({
    text,
    stars,
    license,
    fork,
    currentPage,
    pageLimit
  });
  dispatch(SEARCH_REPO_REQUEST());

    return fetch(
      `https://api.github.com/search/repositories?${params}`
    ).then(res => res.json())
        .then(data => {
            dispatch({
                type: "SET_PAGINATION_INFO",
                payload: {
                    currentPage: currentPage || 1
                }
            });
            dispatch({type: "SEARCH_REPO_SUCCESS", payload: data});
        }).catch(() => dispatch({ type: "SEARCH_REPO_FAIL", SEARCH_REPO_FAIL: "Invalid data" }));

};


export const LOAD_DATA = data => ({
  type: "LOAD_DATA",
  data: data
});

export const AppActions = {
  SEARCH_REPO,
  SET_PAGINATION_INFO,
  LOAD_DATA
};

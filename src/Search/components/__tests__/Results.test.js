import React from "react";
import { shallow } from "enzyme";
import Results from "../Results";

let wrapped;

const items = [
  {
    id: 76954504,
    node_id: "MDEwOlJlcG9zaXRvcnk3Njk1NDUwNA==",
    name: "react-tetris",
    full_name: "chvin/react-tetris",
    owner: {
      login: "chvin",
      id: 5383506,
      node_id: "MDQ6VXNlcjUzODM1MDY=",
      avatar_url: "https://avatars2.githubusercontent.com/u/5383506?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/chvin",
      html_url: "https://github.com/chvin",
      followers_url: "https://api.github.com/users/chvin/followers",
      following_url:
        "https://api.github.com/users/chvin/following{/other_user}",
      gists_url: "https://api.github.com/users/chvin/gists{/gist_id}",
      starred_url: "https://api.github.com/users/chvin/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/chvin/subscriptions",
      organizations_url: "https://api.github.com/users/chvin/orgs",
      repos_url: "https://api.github.com/users/chvin/repos",
      events_url: "https://api.github.com/users/chvin/events{/privacy}",
      received_events_url: "https://api.github.com/users/chvin/received_events",
      type: "User",
      site_admin: false
    },
    private: false,
    html_url: "https://github.com/chvin/react-tetris",
    description: "Use React, Redux, Immutable to code Tetris. 🎮",
    fork: false,
    url: "https://api.github.com/repos/chvin/react-tetris",
    forks_url: "https://api.github.com/repos/chvin/react-tetris/forks",
    keys_url: "https://api.github.com/repos/chvin/react-tetris/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/chvin/react-tetris/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/chvin/react-tetris/teams",
    hooks_url: "https://api.github.com/repos/chvin/react-tetris/hooks",
    issue_events_url:
      "https://api.github.com/repos/chvin/react-tetris/issues/events{/number}",
    events_url: "https://api.github.com/repos/chvin/react-tetris/events",
    assignees_url:
      "https://api.github.com/repos/chvin/react-tetris/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/chvin/react-tetris/branches{/branch}",
    tags_url: "https://api.github.com/repos/chvin/react-tetris/tags",
    blobs_url:
      "https://api.github.com/repos/chvin/react-tetris/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/chvin/react-tetris/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/chvin/react-tetris/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/chvin/react-tetris/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/chvin/react-tetris/statuses/{sha}",
    languages_url: "https://api.github.com/repos/chvin/react-tetris/languages",
    stargazers_url:
      "https://api.github.com/repos/chvin/react-tetris/stargazers",
    contributors_url:
      "https://api.github.com/repos/chvin/react-tetris/contributors",
    subscribers_url:
      "https://api.github.com/repos/chvin/react-tetris/subscribers",
    subscription_url:
      "https://api.github.com/repos/chvin/react-tetris/subscription",
    commits_url:
      "https://api.github.com/repos/chvin/react-tetris/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/chvin/react-tetris/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/chvin/react-tetris/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/chvin/react-tetris/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/chvin/react-tetris/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/chvin/react-tetris/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/chvin/react-tetris/merges",
    archive_url:
      "https://api.github.com/repos/chvin/react-tetris/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/chvin/react-tetris/downloads",
    issues_url:
      "https://api.github.com/repos/chvin/react-tetris/issues{/number}",
    pulls_url: "https://api.github.com/repos/chvin/react-tetris/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/chvin/react-tetris/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/chvin/react-tetris/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/chvin/react-tetris/labels{/name}",
    releases_url:
      "https://api.github.com/repos/chvin/react-tetris/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/chvin/react-tetris/deployments",
    created_at: "2016-12-20T12:26:11Z",
    updated_at: "2018-08-13T18:20:15Z",
    pushed_at: "2018-04-02T12:11:25Z",
    git_url: "git://github.com/chvin/react-tetris.git",
    ssh_url: "git@github.com:chvin/react-tetris.git",
    clone_url: "https://github.com/chvin/react-tetris.git",
    svn_url: "https://github.com/chvin/react-tetris",
    homepage: "https://chvin.github.io/react-tetris/?lan=en",
    size: 3338,
    stargazers_count: 3549,
    watchers_count: 3549,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 602,
    mirror_url: null,
    archived: false,
    open_issues_count: 1,
    license: null,
    forks: 602,
    open_issues: 1,
    watchers: 3549,
    default_branch: "master",
    score: 137.54446
  }
];

beforeEach(() => {
  wrapped = shallow(<Results items={items} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe("Results tests", () => {
  it("show results-container and description", () => {
    //console.log(wrapped.debug());
    expect(wrapped.find(".result-container")).toHaveLength(1);

    expect(
      wrapped.contains("Use React, Redux, Immutable to code Tetris. 🎮")
    ).toBeTruthy();
  });
});

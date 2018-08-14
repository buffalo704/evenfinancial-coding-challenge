import appReducer from "../app";

let initialState;

beforeEach(() => {
  initialState = {
    paginationInfo: {
      currentPage: null
    },
    isLoading: null
  };
});

it("handles actions of type SET_PAGINATION_INFO", () => {
  const action = {
    type: "SET_PAGINATION_INFO",
    payload: { currentPage: 15 }
  };

  const newState = appReducer(initialState, action);

  expect(newState).toEqual({
    isLoading: null,
    paginationInfo: { currentPage: 15 }
  });
});

it("handles actions of type SEARCH_REPO_SUCCESS", () => {
  const repositories = {
    total_count: 4039,
    incomplete_results: false,
    items: [
      {
        id: 21040608,
        node_id: "MDEwOlJlcG9zaXRvcnkyMTA0MDYwOA==",
        name: "NetworkSecurityCourse",
        full_name: "drorventura/NetworkSecurityCourse",
        owner: {
          login: "drorventura",
          id: 3157354,
          node_id: "MDQ6VXNlcjMxNTczNTQ=",
          avatar_url: "https://avatars0.githubusercontent.com/u/3157354?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/drorventura",
          html_url: "https://github.com/drorventura",
          followers_url: "https://api.github.com/users/drorventura/followers",
          following_url:
            "https://api.github.com/users/drorventura/following{/other_user}",
          gists_url: "https://api.github.com/users/drorventura/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/drorventura/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/drorventura/subscriptions",
          organizations_url: "https://api.github.com/users/drorventura/orgs",
          repos_url: "https://api.github.com/users/drorventura/repos",
          events_url:
            "https://api.github.com/users/drorventura/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/drorventura/received_events",
          type: "User",
          site_admin: false
        },
        private: false,
        html_url: "https://github.com/drorventura/NetworkSecurityCourse",
        description: "A trojan horse practice just for learning purposes",
        fork: false,
        url: "https://api.github.com/repos/drorventura/NetworkSecurityCourse",
        forks_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/forks",
        keys_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/teams",
        hooks_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/hooks",
        issue_events_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/events",
        assignees_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/tags",
        blobs_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/languages",
        stargazers_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/stargazers",
        contributors_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/contributors",
        subscribers_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/subscribers",
        subscription_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/subscription",
        commits_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/merges",
        archive_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/downloads",
        issues_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/labels{/name}",
        releases_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/drorventura/NetworkSecurityCourse/deployments",
        created_at: "2014-06-20T14:27:03Z",
        updated_at: "2018-08-07T11:44:49Z",
        pushed_at: "2014-12-13T21:25:40Z",
        git_url: "git://github.com/drorventura/NetworkSecurityCourse.git",
        ssh_url: "git@github.com:drorventura/NetworkSecurityCourse.git",
        clone_url: "https://github.com/drorventura/NetworkSecurityCourse.git",
        svn_url: "https://github.com/drorventura/NetworkSecurityCourse",
        homepage: null,
        size: 602,
        stargazers_count: 9,
        watchers_count: 9,
        language: "Java",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 8,
        mirror_url: null,
        archived: false,
        open_issues_count: 0,
        license: null,
        forks: 8,
        open_issues: 0,
        watchers: 9,
        default_branch: "master",
        score: 37.812073
      },
      {
        id: 1159285,
        node_id: "MDEwOlJlcG9zaXRvcnkxMTU5Mjg1",
        name: "go-horse",
        full_name: "gabrielfalcao/go-horse",
        owner: {
          login: "gabrielfalcao",
          id: 54914,
          node_id: "MDQ6VXNlcjU0OTE0",
          avatar_url: "https://avatars1.githubusercontent.com/u/54914?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/gabrielfalcao",
          html_url: "https://github.com/gabrielfalcao",
          followers_url: "https://api.github.com/users/gabrielfalcao/followers",
          following_url:
            "https://api.github.com/users/gabrielfalcao/following{/other_user}",
          gists_url:
            "https://api.github.com/users/gabrielfalcao/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/gabrielfalcao/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/gabrielfalcao/subscriptions",
          organizations_url: "https://api.github.com/users/gabrielfalcao/orgs",
          repos_url: "https://api.github.com/users/gabrielfalcao/repos",
          events_url:
            "https://api.github.com/users/gabrielfalcao/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/gabrielfalcao/received_events",
          type: "User",
          site_admin: false
        },
        private: false,
        html_url: "https://github.com/gabrielfalcao/go-horse",
        description: "Funny, and simple HTTP Server DSL written entirely in C",
        fork: false,
        url: "https://api.github.com/repos/gabrielfalcao/go-horse",
        forks_url: "https://api.github.com/repos/gabrielfalcao/go-horse/forks",
        keys_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/gabrielfalcao/go-horse/teams",
        hooks_url: "https://api.github.com/repos/gabrielfalcao/go-horse/hooks",
        issue_events_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/events",
        assignees_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/branches{/branch}",
        tags_url: "https://api.github.com/repos/gabrielfalcao/go-horse/tags",
        blobs_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/languages",
        stargazers_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/stargazers",
        contributors_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/contributors",
        subscribers_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/subscribers",
        subscription_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/subscription",
        commits_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/merges",
        archive_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/downloads",
        issues_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/labels{/name}",
        releases_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/gabrielfalcao/go-horse/deployments",
        created_at: "2010-12-11T18:33:23Z",
        updated_at: "2018-06-11T08:05:28Z",
        pushed_at: "2013-09-30T21:02:30Z",
        git_url: "git://github.com/gabrielfalcao/go-horse.git",
        ssh_url: "git@github.com:gabrielfalcao/go-horse.git",
        clone_url: "https://github.com/gabrielfalcao/go-horse.git",
        svn_url: "https://github.com/gabrielfalcao/go-horse",
        homepage: "",
        size: 128,
        stargazers_count: 33,
        watchers_count: 33,
        language: "C",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 2,
        mirror_url: null,
        archived: false,
        open_issues_count: 0,
        license: null,
        forks: 2,
        open_issues: 0,
        watchers: 33,
        default_branch: "master",
        score: 36.830807
      }
    ]
  };

  const action = {
    type: "SEARCH_REPO_SUCCESS",
    payload: repositories
  };

  const newState = appReducer(initialState, action);

  expect(newState).toEqual({
    isLoading: false,
    paginationInfo: { currentPage: null },
    repository: {
      total_count: 4039,
      incomplete_results: false,
      items: [
        {
          id: 21040608,
          node_id: "MDEwOlJlcG9zaXRvcnkyMTA0MDYwOA==",
          name: "NetworkSecurityCourse",
          full_name: "drorventura/NetworkSecurityCourse",
          owner: {
            login: "drorventura",
            id: 3157354,
            node_id: "MDQ6VXNlcjMxNTczNTQ=",
            avatar_url: "https://avatars0.githubusercontent.com/u/3157354?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/drorventura",
            html_url: "https://github.com/drorventura",
            followers_url: "https://api.github.com/users/drorventura/followers",
            following_url:
              "https://api.github.com/users/drorventura/following{/other_user}",
            gists_url:
              "https://api.github.com/users/drorventura/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/drorventura/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/drorventura/subscriptions",
            organizations_url: "https://api.github.com/users/drorventura/orgs",
            repos_url: "https://api.github.com/users/drorventura/repos",
            events_url:
              "https://api.github.com/users/drorventura/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/drorventura/received_events",
            type: "User",
            site_admin: false
          },
          private: false,
          html_url: "https://github.com/drorventura/NetworkSecurityCourse",
          description: "A trojan horse practice just for learning purposes",
          fork: false,
          url: "https://api.github.com/repos/drorventura/NetworkSecurityCourse",
          forks_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/forks",
          keys_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/teams",
          hooks_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/hooks",
          issue_events_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/events",
          assignees_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/tags",
          blobs_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/languages",
          stargazers_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/stargazers",
          contributors_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/contributors",
          subscribers_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/subscribers",
          subscription_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/subscription",
          commits_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/merges",
          archive_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/downloads",
          issues_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/labels{/name}",
          releases_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/drorventura/NetworkSecurityCourse/deployments",
          created_at: "2014-06-20T14:27:03Z",
          updated_at: "2018-08-07T11:44:49Z",
          pushed_at: "2014-12-13T21:25:40Z",
          git_url: "git://github.com/drorventura/NetworkSecurityCourse.git",
          ssh_url: "git@github.com:drorventura/NetworkSecurityCourse.git",
          clone_url: "https://github.com/drorventura/NetworkSecurityCourse.git",
          svn_url: "https://github.com/drorventura/NetworkSecurityCourse",
          homepage: null,
          size: 602,
          stargazers_count: 9,
          watchers_count: 9,
          language: "Java",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 8,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 8,
          open_issues: 0,
          watchers: 9,
          default_branch: "master",
          score: 37.812073
        },
        {
          id: 1159285,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTU5Mjg1",
          name: "go-horse",
          full_name: "gabrielfalcao/go-horse",
          owner: {
            login: "gabrielfalcao",
            id: 54914,
            node_id: "MDQ6VXNlcjU0OTE0",
            avatar_url: "https://avatars1.githubusercontent.com/u/54914?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/gabrielfalcao",
            html_url: "https://github.com/gabrielfalcao",
            followers_url:
              "https://api.github.com/users/gabrielfalcao/followers",
            following_url:
              "https://api.github.com/users/gabrielfalcao/following{/other_user}",
            gists_url:
              "https://api.github.com/users/gabrielfalcao/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/gabrielfalcao/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/gabrielfalcao/subscriptions",
            organizations_url:
              "https://api.github.com/users/gabrielfalcao/orgs",
            repos_url: "https://api.github.com/users/gabrielfalcao/repos",
            events_url:
              "https://api.github.com/users/gabrielfalcao/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/gabrielfalcao/received_events",
            type: "User",
            site_admin: false
          },
          private: false,
          html_url: "https://github.com/gabrielfalcao/go-horse",
          description:
            "Funny, and simple HTTP Server DSL written entirely in C",
          fork: false,
          url: "https://api.github.com/repos/gabrielfalcao/go-horse",
          forks_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/forks",
          keys_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/teams",
          hooks_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/hooks",
          issue_events_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/events",
          assignees_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/branches{/branch}",
          tags_url: "https://api.github.com/repos/gabrielfalcao/go-horse/tags",
          blobs_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/languages",
          stargazers_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/stargazers",
          contributors_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/contributors",
          subscribers_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/subscribers",
          subscription_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/subscription",
          commits_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/merges",
          archive_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/downloads",
          issues_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/labels{/name}",
          releases_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/gabrielfalcao/go-horse/deployments",
          created_at: "2010-12-11T18:33:23Z",
          updated_at: "2018-06-11T08:05:28Z",
          pushed_at: "2013-09-30T21:02:30Z",
          git_url: "git://github.com/gabrielfalcao/go-horse.git",
          ssh_url: "git@github.com:gabrielfalcao/go-horse.git",
          clone_url: "https://github.com/gabrielfalcao/go-horse.git",
          svn_url: "https://github.com/gabrielfalcao/go-horse",
          homepage: "",
          size: 128,
          stargazers_count: 33,
          watchers_count: 33,
          language: "C",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 2,
          mirror_url: null,
          archived: false,
          open_issues_count: 0,
          license: null,
          forks: 2,
          open_issues: 0,
          watchers: 33,
          default_branch: "master",
          score: 36.830807
        }
      ]
    }
  });
});

it("handles actions of type LOAD_DATA", () => {
  const action = {
    type: "LOAD_DATA",
    data: {
      text: "tetris"
    }
  };

  const newState = appReducer(initialState, action);

  expect(newState).toEqual({
    data: { text: "tetris" },
    isLoading: null,
    paginationInfo: { currentPage: null }
  });
});

it("handles actions of unknown type", () => {
  const action = {
    type: "SOMETHING_NOT_FOUND",
    data: "not found"
  };

  const newState = appReducer(initialState, action);

  expect(newState).toEqual({
    isLoading: null,
    paginationInfo: { currentPage: null }
  });
});

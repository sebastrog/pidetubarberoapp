# Contributing to nZero

We can't wait for you to contribute to nZero and help make it the best app it can be! As a contributor, here are the guidelines we would like you to follow:

- [Commit Message Guidelines](#commit)
- [Pull Request Guidelines](#pr)

## <a name="commit"></a>Commit Message Guidelines

We have very precise rules, based on [Conventional Commits](https://www.conventionalcommits.org), on how our commit messages can be formatted. This leads to **more readable messages** that are easy to follow when looking through the **project history**. Also, we use the git commit messages to **generate the Ledger8760 change log**.

### Commit Message (and PR Title ) Format

Each commit message consists of a **header** and an optional **body**.

Any one line of the commit message cannot be longer than 100 characters. This allows the message to be read more easily on GitHub as well as in various git tools.

### Header

The header has a special format that includes **type**, an optional **scope**, a **subject**, and a **ticket number** when the commit is related to a ticket.

#### Example headers

```
build: output js sourcemaps in dev environment 180350779
```

```
chore: add pre-commit hook to run linting and code formatting 180511478
```

```
ci: increase parallelism of cypress tests 180440803
```

```
docs: add commit header examples to CONTRIBUTING.md 180451742
```

```
feat(site): add weather forecast to site details 180423994
```

```
fix(billing): prevent wrapping of price per kWh 180330788
```

```
perf: improve solar data ingestion 180282143
```

```
refactor: create reusable date helpers instead of local component functions 180365210
```

```
revert: fix(billing): prevent wrapping of price per kWh 180598522
```

```
test: add missing unit test coverage to navigation service 180580152
```

### Type

Must be one of the following:

- **build**: A change that affects the build or external dependencies
- **chore**: A change that doesn't fit into the other types
- **ci**: A change to our deployment configs
- **docs**: A documentation change
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: A change that reverts a prior commit
- **test**: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of a module/area affected.

The following list contains the most common scopes:

**TODO: Fill out appropriate scopes**

- **billing**
- **site**

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense "change" not "changed" nor "changes"
- don't capitalize the first letter
- no period (.) at the end

### PR Title

Since we use [Squash and merge](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges), it is important that your PR title follows the exact same format as commit headers because your PR title will become the final commit header when you go to "Squash and merge" your PR.

### Body

The body should include the motivation for the change.

### Example body

```
- Banking rate for Net meter sites should not use the solar rate, it should use the rate schedule usage rate.
```

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say `This reverts commit <hash>`, where the hash is the SHA of the commit being reverted.

#### Example revert header/body

```
revert: fix(billing): prevent wrapping of price per kWh 180598522
Reverts commit ad848032121513f1bdd1178b31dbdf3374017857
```

## <a name="pr"></a>Pull Request Guidelines

It is important to follow our pull request guidelines for numerous reasons including:

- Creating a smooth communication cycle among authors and reviewers
- Reducing bugs/issues
- Creating/maintaining a usable and extensible codebase
- Teaching and learning

### Workflow

1. The author submits the PR for review
1. Reviewers provide comments and the author responds/makes changes (repeat as necessary)
1. The required number of the reviewers approve the PR
1. The author merges the PR

### Guidelines

- Authors should make [focused PRs](#focusedprs)
- Authors should precisely fill out the PR template
- All PRs require review and approval
- All publicly exposed code should be covered by tests in the same PR (exceptions must be acknowledged and agreed to by the team)

### <a name="focusedprs"></a>Focused Pull Requests

Focused PRs are changesets that have a tightly scoped theme. They may touch many files and many lines of code, but all the changes are tightly related to single goal/purpose. Focused PRs are always preferable. Keeping PRs focused should be the goal for every developer because focused PRs have numerous benefits:

- **Reviewed more quickly** It's easier for a reviewer to find small chunks of time to review focused PRs than to set aside a large block of time to review an unfocused/complicated PR.
- **Reviewed more thoroughly** With unfocused/complicated PRs, reviewers and authors tend to get frustrated by large volumes of feedback (resulting in important points getting missed or dropped).
- **Less likely to introduce bugs** Implementing focused changes make it easier for you and your reviewer to reason effectively about the impact of the PR and see if a bug has been introduced.
- **Less wasted work if they are rejected** If you write an unfocused/complicated PR and your reviewer points out that the overall direction has problems, you've wasted a lot of work.
- **Easier to merge** Working on an unfocused/complicated PR takes a long time, so you will have to rebase/merge frequently, or resolve a lot of conflicts when you go to merge.
- **Easier to design well** It's a lot easier to polish a focused PR than it is to refine the all the details of an unfocused/complicated set of changes.
- **Less blocking on reviews** Sending focused self-contained portions of your overall change allows you to continue working/coding while you wait for your current PR in review.
- **Simpler to roll back** An unfocused/complicated PR will likely touch files that get updated between the initial PR submission and a rollback PR, complicating the rollback (the intermediate PRs will probably need to be rolled back too).

Note that reviewers may reject your PR solely on the ground of it being too unfocused/complicated. However, that doesn't mean you have to work in small increments. If you work best by fully completing a solution that results in an unfocused/complicated changeset, just split up the changeset into multiple, focused, self-contained PRs.

#### Example PR themes (focused PRs)

- Set up a feature flag for a new feature
- Set up the routing for a new module/page
- Create a new utility function to replace an existing function, implement the new function one time, deprecate the existing function
- Create a new component with a small subset of its features, implement it once (behind a feature flag)
- Rename a function, component, interface, or class
- Remove unused code
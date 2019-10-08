# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owner of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

1. The first time you work on the project, you need to clone it using the following command:
```
git clone https://github.com/NomanGul/octocat-day.git
```

2. Never Push anything to master branch directly. So to avoid this you have to checkout to development branch by the following method:
```bash
git checkout development
git pull --rebase origin development  # To make sure you have up-to-date development. Very important.
```

3. From the `development` branch you have to create a new branch with proper specified names

Example
```bash
git checkout -b feat-<Description>

# Now Start working on files and once done only submit your relative work files, not linter or something else.
# This is very important for others to review.

git add <Your files>
git commit -m "CLEAN and CONCISE message"
git pull --rebase origin development # To make sure that you have the latest changes from "origin development"
git push origin feat-<Description>
```

4. Create Pull Request (PR)

Once you have created the branch, did some coding, now submit a `Pull Request` back to `development` with the title starting as `WIP:` which means "Work In Progress". Some of the guidelines for submitting PRs are as below:
* Always rebase with development before submitting a PR (check above examples).
* Create short PRs that should be easy to review and make suggested changes. Shorter PRs have more chances to get approved quickly and it's also easy to make changes.
* Try your best to get a PR approved and merged before making another PR.
* Ideally there should be a PR per issue i.e. one PR should close one issue at a time. Create multiple PRs for multiple issues.
* Put the following sentence in the PR description field: `PR for issue #issue_number`
* Once you feel it's ready, remove the `WIP:` from the title and assign at least one reviewer. Later on, the reviewer will either request some changes or they will approve the PR if everything is perfect.

**Example of Good PR:**
* A PR with 1-5 modified files
* A PR addressing and preferably closing a single issue
* A PR with `WIP` in the title if it's not closing the issue

**Example of Bad PR:**
* A PR with 5+ files
* A PR with 100+ lines of modified code
* A PR addressing multiple issues
* Multiple, very small & repetitive PRs of just a few lines of code changes

Some of the guidelines for submitting PRs are as below:

* Commits should be small. We don't encourage commits with hundreds of modified code lines or several modified files. 
* Ideally a commit should refer to a particular change/functionality/fix. 
* Commit message should be descriptive, small and clear.
* Commit message completely should not be in uppercase.
* Ensure there is NO semi-colon.
* Code is properly indented with 2 space method.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at nomangul2001@gmail.com. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

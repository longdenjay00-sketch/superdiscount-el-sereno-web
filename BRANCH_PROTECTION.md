# GitHub Branch Protection & Repository Governance Standards

This document establishes the production infrastructure security rules for this repository and all commercial web applications.

---

## 1. Branch Protection Policy for `main`

To prevent accidental breakage, protect customer-facing code, and ensure clean deployment pipelines:

### A. Core Rules
1. **Require a Pull Request Before Merging:**
   - Direct pushes to `main` must be disabled on GitHub (`Settings -> Branches -> Branch protection rules -> Add rule`).
   - Require at least 1 approving review from repository maintainers.
   - Dismiss stale pull request approvals when new commits are pushed.

2. **Require Status Checks to Pass Before Merging:**
   - The GitHub Actions build workflow (`deploy.yml` or CI test suite) must pass cleanly before any merge can proceed.
   - Require branches to be up to date before merging.

3. **Require Linear History:**
   - Squash and merge or rebase and merge only.
   - Prohibit messy multi-parent merge commits.

4. **Zero Force-Pushes & No Deletions:**
   - `--force` push permissions must be strictly denied to all contributors, including administrators.

---

## 2. GitHub CLI Automation Command

If using `gh` CLI to apply these branch protection rules automatically:

```bash
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  /repos/{owner}/{repo}/branches/main/protection \
  -f required_status_checks='{"strict":true,"contexts":["build"]}' \
  -f enforce_admins=true \
  -f required_pull_request_reviews='{"dismiss_stale_reviews":true,"require_code_owner_reviews":false,"required_approving_review_count":1}' \
  -f restrictions=null \
  -F allow_force_pushes=false \
  -F allow_deletions=false \
  -F required_linear_history=true
```

---

## 3. Commit Message Discipline
Every commit must follow our standard format:
```text
One-line subject (imperative mood, 50 chars max)

One-line body explaining what changed and why.
```
Never commit secrets, API keys, or `.env` files.

# Module 3: Branching & Merging Deep Dive

Branches are the "superpower" of Git. They allow professional teams to experiment, build features, and fix bugs in parallel without ever breaking the "production" code.

## 1. The Philosophy of Branching
Think of Git's history as a tree. The `main` branch is the trunk. Every time you start a new task, you grow a small branch off that trunk.
- **Why?** If you break something in your branch, the trunk remains safe. 
- **Best Practice**: Never code directly on the `main` branch. Always create a feature branch.

### Branching Like a Pro
#### Create and switch to a new branch
```bash
git switch -c feature/login-system
```
This:
* Creates a new branch.
* Switches you to it immediately.

---

#### List branches
```bash
git branch
```
To see all local and remote branches:
```bash
git branch -a
```

---

#### Switching branches
```bash
git switch main
```

---

#### Deleting a branch after finishing
```bash
git branch -d feature/login-system
```
If Git refuses because it's not merged:
```bash
git branch -D feature/login-system
```
Only use `-D` if you are sure you don't need the history.

---

## 2. Merging Branches
After finishing work on a feature branch, it should be merged into `main`.

### Recommended Strategy
```bash
git switch main
git merge --no-ff feature/login-system
```

Why `--no-ff`?
Because it:
* Prevents a "Fast-forward" merge.
* Creates a clear "Merge Commit".
* Keeps the history tree clear, similar to a GitHub Pull Request.

After merging:
```bash
git push
```
This is a common interview question and a daily choice for developers.

---
## 3. Bringing Changes Back: Merge vs. Rebase
### A. The Merge (`git merge`)
- **How**: It takes the two histories and ties them together with a new "Merge Commit".
- **Why**: It preserves the exact historical timeline of when things happened.
- **When**: Use it when you want to merge a feature into `main`.

### B. The Rebase (`git rebase`)
- **How**: It "lifts" your commits and places them on top of the latest commits from `main`. It rewrites history to make it look like a straight line.
- **Why**: It results in a much cleaner, linear project history.
- **When**: Use it to update your own feature branch with the latest changes from `main` before you open a Pull Request.

> [!WARNING]
> **The Golden Rule of Rebase**: Never rebase branches that have been pushed to a shared repository. It will cause chaos for your teammates!

---

## 4. Resolving Conflicts (The Professional Way)
A conflict happens when Git doesn't know which version of a line to keep. This usually happens during a merge or rebase.

### Step 1: Identify the Mess
Git will mark the files. Open them in your editor (VS Code makes this very easy with buttons to "Accept Current" or "Accept Incoming").

### Step 2: The Logic
```text
<<<<<<< HEAD (Current Branch)
const color = 'blue';
=======
const color = 'red';
>>>>>>> feature/new-theming (Incoming Branch)
```
- **HEAD**: What is currently on the branch you are sitting on.
- **Incoming**: What is coming from the other branch.

### Step 3: Clean Up
1.  Choose the correct code (or combine both).
2.  **Remove the markers** (`<<<<`, `====`, `>>>>`).
3.  Stage the file: `git add <filename>`.
4.  Finish: `git commit` (if merging) or `git rebase --continue` (if rebasing).

---

## 5. Temporary Saving: `git stash`
Sometimes you're in the middle of a mess and your boss asks for an urgent fix on `main`.
```bash
# 1. Save your messy work to a secret pocket
git stash

# 2. Switch to main and do the fix
git switch main
# ... fix it ...

# 3. Come back and pop the work out of the pocket
git switch feature/my-work
git stash pop
```

---

## What's Next?
You've mastered the local complexity. Now it's time to see how this all fits into the **GitHub Collaboration** ecosystem in Volume 4.

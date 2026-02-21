# Module 5: Conventions & The Great Undo

In professional development, things go wrong. You might commit a secret by accident, forget a file, or realize an entire feature was a mistake. Git's most powerful (and dangerous) "undo" tool is `git reset`.

## 1. The Three Faces of `git reset`
`git reset` moves your branch pointer to a previous commit. Depending on the "mode" you use, it also affects your Staging Area and Working Directory.

| Mode | What happens to the Commit? | What happens to the Files? | Scenario |
| :--- | :--- | :--- | :--- |
| **`--soft`** | Erased from history | They stay in the **Staging Area** | "I forgot to add one file to my last commit." |
| **`--mixed`** | Erased from history | They stay in your **Folder** (Unstaged) | "I want to redo my work and add/commit differently." |
| **`--hard`** | Erased from history | **DELETED PERMANENTLY** | Everything I just did was a disaster. Wipe it out. |

---

## 2. Practical Scenarios

### Scenario 1: I forgot to add a file (The Soft Reset)
You just made a commit, but realized you forgot to add `config.js`. You don't want to lose your work, just undo the commit to add the file and try again.
```bash
# Move back one commit, keep changes in the Staging Area
git reset --soft HEAD~1

# Add the missing file
git add config.js

# Commit again
git commit -m "feat: add initial configuration"
```

### Scenario 2: I want to wipe out disastrous changes (The Hard Reset)
If you made changes that completely broke the project and you want to return to exactly how things were when the project was stable.
```bash
# ⚠️ WARNING: Any unsaved changes will be permanently lost!
git reset --hard HEAD~1
```

### Scenario 3: "I made a typo in my last commit message"
If you haven't pushed the commit to GitHub yet, you can fix it:
```bash
git commit --amend -m "The correct message here"
```

---

## 3. The Safe Alternative: `git revert`
If you have already pushed your commit to the server (GitHub) and don't want to rewrite the project history shared with your teammates:
```bash
# Creates a new commit that reverses the effects of the last commit
git revert HEAD
```
This is better for teamwork because it doesn't delete history; it adds to it.

---

## 4. Golden Advice Before Resetting
Before using `--hard` or any type of reset, always check your project's status:
```bash
git status  # To see if you have unsaved changes
git log --oneline -3  # To confirm which commit you are going back to
```

---

## 5. The Power of `.gitignore`
As mentioned before, Git should only track what is necessary. Here is a detailed look at what a professional `.gitignore` file for a modern web project contains:

```text
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
build/
.next/

# Environment files (Secrets! Never upload these)
.env
.env.local
.env.*.local

# Editor files (IDE Files)
.vscode/
.idea/

# System files
.DS_Store
Thumbs.db
```

> [!WARNING]
> If you add a file to Git and then later add it to `.gitignore`, Git will not automatically stop tracking it.
> To remove it from tracking without deleting the file from your computer:
> ```bash
> git rm --cached filename
> ```
> Then:
> ```bash
> git commit -m "chore: stop tracking file"
> ```

---

## 6. The Power of `.gitattributes`
While `.gitignore` controls **what is tracked**, `.gitattributes` controls **how Git handles the tracked files**.

This is a relatively advanced file, but important in professional projects.

### 1- Standardizing Line Endings
The Problem:
* Windows uses CRLF
* macOS/Linux uses LF
* This leads to "invisible" differences in commits.

The Solution inside `.gitattributes`:
```text
* text=auto
```
Or more specifically:
```text
*.js text eol=lf
*.ts text eol=lf
*.css text eol=lf
*.html text eol=lf
```
This forces LF line endings across all systems.

### 2- Defining Binary Files
Some files should not be compared as text:
```text
*.png binary
*.jpg binary
*.pdf binary
```
This prevents Git from trying to display unreadable diffs.

### 3- Customizing the Merge Strategy

You can specify how certain file types should be merged:

```text
*.lock merge=ours
```

Practical example:
Some teams choose not to merge lock files automatically but instead rely on the current branch's version.

### 4- Ignoring Whitespace Differences

```text
*.md whitespace=blank-at-eol
```

This helps reduce noise in comparisons.
---

## 7. Common Problems & How to Act

### 1- Outgoing changes
You have local commits that haven't been pushed.
Solution:
```bash
git push
```

### 2- Deleted a branch by mistake
Check the reflog:
```bash
git reflog
```
Then:
```bash
git checkout -b branch-name <commit-hash>
```

### 3- main is ahead or behind remote
Check:
```bash
git status
```
If you see:
`Your branch is ahead of 'origin/main'`
Solution:
```bash
git push
```

---

## 8. Best Workflow for a Solo Developer
```bash
# Create a branch
git switch -c feature/x

# Work
git add .
git commit -m "feat: add x"

# Merge
git switch main
git merge --no-ff feature/x
git push

# Delete branch
git branch -d feature/x
```
This approach is organized, safe, and keeps your project history clear.

---

## Final Thoughts
You now have the tools to build, share, and even "undo" your professional work. The key to mastering Git is **not fearing the commands** but understanding how they move your code through the three stages.

Good luck on your coding journey! 🚀

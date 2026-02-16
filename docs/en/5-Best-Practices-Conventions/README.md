# Module 5: Conventions & The Great Undo

In professional development, things go wrong. You might commit a secret by accident, forget a file, or realize an entire feature was a mistake. Git's most powerful (and dangerous) "undo" tool is `git reset`.

## 1. The Three Faces of `git reset`
`git reset` moves your branch pointer to a previous commit. Depending on the "mode" you use, it also affects your Staging Area and Working Directory.

| Mode | What happens to the Commit? | What happens to the Files? | Scenario |
| :--- | :--- | :--- | :--- |
| **`--soft`** | Erased from history | They stay in the **Staging Area** | "I forgot to add one file to my last commit." |
| **`--mixed`** | Erased from history | They stay in your **Folder** (Unstaged) | "I want to redo my work and add/commit differently." |
| **`--hard`** | Erased from history | **DELETED PERMANENTLY** | "Everything I just did was a disaster. Wipe it out." |

---

## 2. Practical Scenarios

### Scenario 1: I forgot to add a file (The Soft Reset)
You just made a commit, but realized you forgot to add `config.js`. You want to "undo" the commit but keep the code ready to be committed again.
```bash
# Move back one commit, keep changes staged
git reset --soft HEAD~1

# Add the missing file
git add config.js

# Commit again
git commit -m "feat: add initial configuration"
```

### Scenario 2: I want to reorganize my work (The Mixed Reset)
You made 3 commits that are a mess. You want to undo the commits and the staging, but keep the code in your folder to restart the process.
```bash
# Default mode is --mixed
git reset HEAD~3

# Now all your files are 'untracked'/modified. 
# You can add them back in cleaner groups.
```

### Scenario 3: The Nuclear Option (The Hard Reset)
You tried a new library, it broke everything, and you just want to go back to exactly how things were 30 minutes ago.
```bash
# ⚠️ WARNING: This deletes all uncommitted changes!
git reset --hard HEAD~1
```

---

## 3. `git reset` vs. `git revert`
Which one should you use?

- **`git reset`**: **Rewrites History**. It's like a time machine that erases the future. 
    - *Rule*: Only use it on your local, private branches.
- **`git revert`**: **Adds to History**. It creates a *new* commit that does the exact opposite of the one you want to undo.
    - *Rule*: Use this for shared branches (like `main`) so you don't break history for your teammates.

---

## 4. Professional Naming (Conventional Commits)
To keep your history readable, use these types for every commit:
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Changing code logic without changing behavior
- `style`: Formatting/CSS only
- `docs`: Documentation
- `perf`: Performance improvements
- `test`: Adding tests

---

## Final Thoughts
You now have the tools to build, share, and even "undo" your professional work. The key to mastering Git is **not fearing the commands** but understanding how they move your code through the three stages.

Happy Coding! 🚀

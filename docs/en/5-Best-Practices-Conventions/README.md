# Module 5: Conventions & Naming Mastery

In professional development, writing code is only half the job. The other half is communicating what you did so that others (and your future self) can understand and maintain it.

## 1. Conventional Commits: The Industry Standard
Most professional teams follow the **Conventional Commits** specification. It provides a lightweight set of rules for creating an explicit commit history.

**Structure**:
```text
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

### The Most Famous Commit Types
You should use these types to categorize your changes:

| Type | When to use it? | Example |
| :--- | :--- | :--- |
| **`feat`** | A new feature for the user | `feat(api): add jwt authentication` |
| **`fix`** | A bug fix | `fix(ui): resolve login button overlap` |
| **`docs`** | Documentation only changes | `docs: update readme with setup guide` |
| **`style`** | Code style changes (whitespace, formatting, missing semi-colons, etc.) | `style: run prettier on all files` |
| **`refactor`** | A code change that neither fixes a bug nor adds a feature | `refactor: simplify database connection logic` |
| **`perf`** | A code change that improves performance | `perf: reduce image load time by 40%` |
| **`test`** | Adding missing tests or correcting existing tests | `test: add unit tests for user service` |
| **`build`** | Changes that affect the build system or external dependencies | `build: upgrade vite to version 5.0` |
| **`ci`** | Changes to CI configuration files and scripts | `ci: add github actions for linting` |
| **`chore`** | Other changes that don't modify src or test files | `chore: update .gitignore` |
| **`revert`** | Reverts a previous commit | `revert: feat: add social login` |

---

## 2. Professional Branch Naming
Never use names like `test`, `fix`, or `my-branch`. Professional teams use a "folder-like" structure:

- **`feature/`**: `feature/user-profiles`, `feature/payment-gateway`
- **`bugfix/`**: `bugfix/sidebar-mobile-glitch`
- **`hotfix/`**: `hotfix/security-vulnerability` (Used for urgent production fixes)
- **`docs/`**: `docs/api-documentation`
- **`refactor/`**: `refactor/clean-up-utils`

---

## 3. The Power of `.gitignore`
As we mentioned before, Git should only track what is necessary. Here is a more detailed look at what a professional `.gitignore` looks like for a modern web project:

```text
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
build/
.next/

# Environment variables (Secrets! NEVER commit these)
.env
.env.local
.env.*.local

# IDE Files
.vscode/
.idea/

# OS Files
.DS_Store
Thumbs.db
```

---

## 4. Fixing Mistakes: Detailed Scenarios

### Scenario A: "I made a typo in my last commit message"
If you haven't pushed yet, you can fix it:
```bash
git commit --amend -m "correct message here"
```

### Scenario B: "I pushed something broken to a shared branch!"
**DO NOT** use `git reset` on shared branches. It will break the history for everyone else. Instead, use:
```bash
# This creates a NEW commit that undoes the changes safely
git revert <commit-hash>
git push origin main
```

### Scenario C: "I started working on a feature, but a bug just broke production"
You need to switch branches but don't want to commit half-finished code:
```bash
# 1. Hide your changes
git stash

# 2. Switch to main and fix the bug
git checkout main
# ... fix bug ...

# 3. Come back and pick up where you left off
git checkout feature/my-work
git stash pop
```

---

## Final Thoughts
By following these conventions, you make it easy for tools to automate things (like auto-generating changelogs) and even easier for your teammates to respect your work.

Congratulations on finishing the course! 🚀

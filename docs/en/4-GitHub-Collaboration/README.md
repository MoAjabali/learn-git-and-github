# Module 4: Professional Collaboration & PRs

In this module, we move beyond just "code" and enter the world of **Social Coding**. GitHub is not just a storage space; it's a communication platform. The heart of this platform is the **Pull Request (Pull Request - PR)**.

## 1. Professional Naming Conventions (Conventional Commits)
Most professional teams follow the **Conventional Commits** specification. This pattern provides a simple set of rules for creating a clear and organized commit history.

**Message Structure**:
```text
<type>(<optional-scope>): <description>

[optional body]

[optional footer]
```
### Popular Commit Types
You should use these types to categorize your changes:

| Type | When to use? | Example |
| :--- | :--- | :--- |
| **`feat`** | A new feature for the user | `feat(api): add jwt authentication` |
| **`fix`** | A bug fix | `fix(ui): resolve login button overlap` |
| **`docs`** | Documentation changes only | `docs: update readme with setup guide` |
| **`style`** | Changes that do not affect the meaning of the code (white-space, formatting, etc.) | `style: run prettier on all files` |
| **`refactor`** | A code change that neither fixes a bug nor adds a feature | `refactor: simplify database connection logic` |
| **`perf`** | A code change that improves performance | `perf: reduce image load time by 40%` |
| **`test`** | Adding missing tests or correcting existing tests | `test: add unit tests for user service` |
| **`build`** | Changes that affect the build system or external dependencies | `build: upgrade vite to version 5.0` |
| **`ci`** | Changes to CI configuration files and scripts (e.g., GitHub Actions) | `ci: add github actions for linting` |
| **`chore`** | Other changes that don't modify src or test files | `chore: update .gitignore` |
| **`revert`** | Reverts a previous commit | `revert: feat: add social login` |

---
## 2. Professional Branch Naming
Never use names like `test`, `fix`, or `my-branch`. Professional teams use a folder-like structure:

- **`feature/`**: For new features, e.g., `feature/user-profiles`
- **`bugfix/`**: For bug fixes, e.g., `bugfix/sidebar-mobile-glitch`
- **`hotfix/`**: For very urgent fixes in Production
- **`docs/`**: For documentation edits, e.g., `docs/api-documentation`
- **`refactor/`**: For code quality improvements, e.g., `refactor/clean-up-utils`

---

## 3. Anatomy of a Perfect Pull Request
In professional teams, "just opening a PR" is not enough. Your PR is a presentation of your work.

### A. The Title
Your PR title should follow the **Conventional Commits** pattern (just like your commits).
- ✅ `feat(auth): add google oauth2 provider`
- ❌ `Adding login`

### B. The Description (The "Why")
Developers are busy. Don't make them guess what you did. A good description includes:
- **Summary**: What problem does this solve?
- **How to test**: Step-by-step instructions for the reviewer.
- **Visuals**: If the change is in the UI, it is essential to attach **screenshots or GIFs**!
- **Relation**: Link the PR to the issue it fixes (e.g., `Closes #123`).

---

## 4. The Code Review Process
Code review is not about "finding mistakes"; it's about **knowledge sharing** and **maintaining quality**.

### For the Author (You):
1.  **Self-Review First**: Open your own PR and read every line. You will often find console logs or typos before anyone else does.
2.  **Be Humble**: If someone suggests a change, don't take it personally. It's about the code, not your value as a human.
3.  **Explain Your Choices**: If you did something unusual, leave a comment *before* they ask, explaining why you chose that path.

### For the Reviewer (Your Team):
1.  **Be Kind**: Use "we" instead of "you" (e.g., "Can we rename this variable?" instead of "You named this wrong").
2.  **State Importance**: Is it a "nitpick" (small style issue) or a "blocker" (security/logic bug)?
3.  **Approve with Praise**: If the code is good, say "Great work!" or use emojis. Positive feedback is important for morale.

---

## 5. Dealing with Requested Changes
After a review, you may find "Requested Changes".
1.  **Push more commits**: You don't need a new PR. Just add more commits to the same branch and push. The PR updates automatically.
2.  **Resolve Conversations**: Once you fix a requested change, mark the conversation as "Resolved" on GitHub.

---

## 6. Draft Pull Requests
Sometimes you want feedback *before* you are completely done.
- Use **Draft Pull Request** on GitHub.
- This tells your team: "I'm working on this, feel free to look, but don't merge it yet."

---

## 7. Merging Strategies
Once a PR is approved, how does it join `main`?
- **Create a Merge Commit**: Keeps the full history of every step you made.
- **Squash and Merge**: Combines all your experimental commits into **one clean commit**. (Professional teams prefer this to keep the main history clean).
- **Rebase and Merge**: Moves your commits to the tip of `main` without a merge commit.

> [!IMPORTANT]
> **Social Rule**: Never merge your own PR unless you are working solo. Always wait for a "LGTM" (Looks Good To Me) or an "Approve" from a teammate.

---

## What's Next?
You now know how to collaborate like a pro. In the final module, we will summarize everything and look at the "Swiss Army Knife" of Git commands for fixing mistakes.

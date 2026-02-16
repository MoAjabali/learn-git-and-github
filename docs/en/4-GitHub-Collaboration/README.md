# Module 4: Professional Collaboration & PRs

In this module, we move beyond just "code" and enter the world of **Social Coding**. GitHub is not just a storage space; it's a communication platform. The heart of this platform is the **Pull Request (PR)**.

## 1. The Anatomy of a Perfect Pull Request
In a professional team, "just opening a PR" isn't enough. Your PR is a presentation of your work.

### A. The Title
Your PR title should follow the **Conventional Commits** pattern (just like your commits).
- ✅ `feat(auth): add google oauth2 provider`
- ❌ `Adding login`

### B. The Description (The "Why")
Developers are busy. Don't make them guess what you did. A good description includes:
- **Summary**: What does this solve?
- **How to test**: Step-by-step instructions for the reviewer.
- **Visuals**: If it's a UI change, **Screenshots or GIFs** are mandatory!
- **Relation**: Link to the issue it fixes (e.g., `Closes #123`).

---

## 2. The Code Review Process
Code review is not about "finding mistakes"; it's about **knowledge sharing** and **maintaining quality**.

### For the Author (You):
1.  **Self-Review First**: Open your own PR and read every line. You will often find embarrassing console logs or typos before anyone else does.
2.  **Be Humble**: If someone suggests a change, don't take it personally. It's about the code, not your value as a human.
3.  **Explain Your Choices**: If you did something unusual, leave a comment *before* they ask, explaining why you chose that path.

### For the Reviewer (Your Team):
1.  **Be Kind**: Use "we" instead of "you" (e.g., "Can we rename this variable?" instead of "You named this wrong").
2.  **State Importance**: Is it a "nitpick" (small style issue) or a "blocker" (security/logic bug)?
3.  **Approve with Praise**: If the code is good, say "Great work!" or use emojis. Positive feedback is just as important as critiques.

---

## 3. Dealing with Changes
After a review, you will likely have "Requested Changes".
1.  **Push more commits**: You don't need a new PR. Just add more commits to the same branch and push. The PR updates automatically.
2.  **The "Fixup" flow**: Many developers use `git commit --fixup <hash>` to group small fixes together (advanced tip!).
3.  **Resolve Conversations**: Once you fix a requested change, mark the conversation as "Resolved" on GitHub.

---

## 4. Drafting: The "Work in Progress" PR
Sometimes you want feedback *before* you are done.
- Use **Draft Pull Requests** on GitHub.
- This tells your team: "I'm working on this, feel free to look, but don't merge it yet."

---

## 5. Merging Strategies
Once a PR is approved, how does it join `main`?
- **Create a Merge Commit**: Keeps the full history of every tiny commit you made.
- **Squash and Merge**: Combines all your experimental commits into **one clean commit**. (Professional teams love this for a clean `main` history).
- **Rebase and Merge**: Moves your commits to the tip of `main` without a merge commit.

> [!IMPORTANT]
> **Social Rule**: Never merge your own PR unless you are working solo. Always wait for a "LGTM" (Looks Good To Me) or an "Approve" from a teammate.

---

## What's Next?
You now know how to collaborate like a pro. In the final module, we will summarize everything and look at the "Swiss Army Knife" of Git commands for fixing mistakes.

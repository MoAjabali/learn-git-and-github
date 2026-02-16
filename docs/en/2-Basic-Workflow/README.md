# Module 2: The Core Workflow

In this module, we will learn the essential commands to manage your project locally and how to sync it with GitHub. We will focus on not just *what* to type, but *how* these commands move your work through Git's lifecycle.

## 1. Initializing a Project (`git init`)
To start using Git in a project, you need to "initialize" it. This creates a hidden `.git` folder in your project root. This folder is Git's "brain"—it stores all the history and configuration for that repository.

```bash
# 1. Create a new directory for your project
mkdir my-cool-project

# 2. Go inside that directory
cd my-cool-project

# 3. Tell Git to start tracking this folder
git init
```

> [!NOTE]
> You only run `git init` **once** per project. If you delete the `.git` folder, you lose all your version history!

---

## 2. The Three Stages: How Git "Thinks"
Git doesn't just save everything automatically. You have to be intentional. Think of it like a shipping process:

1.  **Working Directory (The Floor)**: You're working on files. Changes here are "untracked" or "modified".
2.  **Staging Area (The Loading Dock)**: You pick specific files to go into the next shipment.
3.  **Commit / Local Repo (The Shipment)**: You seal the box and give it a label (the commit message). It's now safely saved in your history.

### The Command Workflow
When you are coding, you will repeat this cycle hundreds of times:

#### A. Checking the current state
Before doing anything, always check what Git sees:
```bash
git status
```
*Why?* It tells you which files are modified, which are new (untracked), and which are already in the "Loading Dock" (Staged).

#### B. Moving files to the Loading Dock (Staging)
If you finished a specific task (like adding a logo), add only those files:
```bash
# Add a specific file
git add images/logo.png

# OR add all changes in the current folder (be careful!)
git add .
```

#### C. Sealing the box (Committing)
Now, save those changes permanently with a description:
```bash
git commit -m "feat: add company logo to header"
```
*Why?* Without a commit, your changes are just "sitting there". A commit creates a permanent snapshot you can return to later.

---

## 3. Writing Great Commit Messages
A commit message is a note for your "future self" and your team. In professional environments, we follow the **Conventional Commits** pattern (more on this in Module 5).

**The Golden Rule**: Use the **imperative mood**. Imagine you are giving an order to the code.
- ✅ `feat: add user login` (It tells Git: "Add user login")
- ❌ `Added user login` (Describing what you did yesterday)
- ❌ `User login stuff` (Too vague)

---

## 4. Connecting to GitHub (Remotes)
Your local Git "brain" needs to know where its "cloud brain" (GitHub) lives. We call these **Remotes**.

```bash
# Add a remote link and name it 'origin' (the standard name)
git remote add origin https://github.com/username/repo-name.git

# Verify that the link is correct
git remote -v
```

### Pushing and Pulling: The Sync
- **`git push origin main`**: Takes your local commits and "uploads" them to the `main` branch on GitHub.
- **`git pull origin main`**: "Downloads" the latest changes from GitHub and merges them into your local work.

> [!TIP]
> **Best Practice**: Always `git pull` before you start working to ensure you have the latest version of the code and avoid conflicts!

---

## What's Next?
Now that you can save and share your work, it's time to learn how to work on different features at the same time using **Branches**!

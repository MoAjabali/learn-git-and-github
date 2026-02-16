# Module 1: Introduction to Git & GitHub

Welcome to the start of your journey. In this module, we will go deep into the philosophy of Git, why it's a "Distributed" system, and how to set it up like a professional.

## 1. What is Version Control? (The "Why")
Imagine working on a team of 10 developers. Without version control, you would be emailing code snippets and manually merging them into one file. It's a recipe for disaster.

**Version Control Systems (VCS)** allow you to:
- **Track History**: Every change is a "snapshot".
- **Revert**: If the site crashes, you can go back to 5 minutes ago with one command.
- **Collaborate**: Work on the same file without overwriting your teammate's changes.

### The Evolution: Centralized vs. Distributed (DVCS)
- **Old way (SVN/CVS)**: There is one central server. If it goes down, nobody can save their work. You must be online to commit.
- **The Git way (Distributed)**: **Every developer has a full copy of the entire history** on their own computer.
    - *Why this matters*: You can work offline, it’s incredibly fast, and there is no single point of failure. If GitHub goes down, the project lives on every developer's laptop.

---

## 2. Git vs GitHub: The Cloud Connection
- **Git**: The tool that runs on your computer. It manages your local history.
- **GitHub**: A cloud hosting service for Git repositories. It provides the "social" features: Pull Requests, Issue Tracking, and a Web Interface.

**Professional Tip**: There are alternatives to GitHub, like **GitLab** and **Bitbucket**, but they all use **Git** under the hood. Once you know Git, you can use any of them.

---

## 3. Professional Installation & Setup
### Installation
- **Windows**: Use [Git for Windows](https://git-scm.com/). It includes "Git Bash," which gives you a professional Linux-like terminal on Windows.
- **macOS/Linux**: Most developers use the terminal. Run `git --version` to see if you already have it.

### The "Must-Have" Configurations
Beyond just your name and email, professionals set up a few more things:

```bash
# 1. Essential: Your Identity
git config --global user.name "John Doe"
git config --global user.email "john@example.com"

# 2. Helpful: Default Branch Name
# Many teams now prefer 'main' over the old default 'master'
git config --global init.defaultBranch main

# 3. Visual: Colored terminal output
git config --global color.ui auto
```

### SSH vs. HTTPS (Secret to the Pros)
- **HTTPS**: High security but asks for your password/token often. Good for beginners.
- **SSH**: Uses a "key" on your computer. Once set up, you never have to type a password again. Professional developers almost always use SSH.

---

## 4. The `.git` Folder: The Brain
When you start a project, Git creates a hidden folder called `.git`. 
> [!CAUTION]
> If you delete this folder, your project is still there, but all your history, branches, and versions are **GONE**. Treat this folder with respect.

---

## What's Next?
In the next module, we will get our hands dirty with the **Core Workflow**: the commands you will use 90% of the time.

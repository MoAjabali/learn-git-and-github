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

---

## 3. Remote Connectivity: HTTPS vs. SSH (Deep Dive)
To move code between your computer and GitHub, you need a "secure tunnel." There are two main ways to build this tunnel:

| Feature | HTTPS | SSH (Secure Shell) |
| :--- | :--- | :--- |
| **URL Format** | `https://github.com/user/repo.git` | `git@github.com:user/repo.git` |
| **Authentication** | Asks for Username + Personal Access Token (PAT) | Uses a "Key Pair" stored on your computer |
| **Convenience** | Easy setup; works everywhere | Setup takes 5 mins; no passwords ever again |
| **Behind the Scenes** | Standard web protocol (Port 443) | Encrypted tunnel (Port 22) |

### Option A: Connecting via HTTPS
This is the "standard" way. When you `git push`, GitHub will ask for your credentials.
> [!IMPORTANT]
> Since 2021, GitHub **does not accept your password** for HTTPS. You must generate a **Personal Access Token (PAT)** in your GitHub Settings > Developer Settings.

### Option B: Connecting via SSH (The Pro Way)
With SSH, your computer and GitHub exchange "secret handshakes."

#### How it works:
1.  **Private Key**: Stays on your computer (like a real key).
2.  **Public Key**: You upload it to GitHub (like a lock).
When you connect, Git uses your private key to prove it's you, and GitHub verifies it with the public key.

#### Steps to set up SSH:
```bash
# 1. Generate a new key (press Enter to accept defaults)
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. Copy the Public Key to your clipboard
cat ~/.ssh/id_ed25519.pub

# 3. Add to GitHub:
# Go to GitHub Settings > SSH and GPG keys > New SSH Key
# Paste the key and save!
```

---

## 4. Professional Installation & Setup
### The "Must-Have" Configurations
Run these once on your machine:

```bash
# 1. Essential: Your Identity
git config --global user.name "John Doe"
git config --global user.email "john@example.com"

# 2. Helpful: Default Branch Name
git config --global init.defaultBranch main

# 3. Visual: Colored terminal output
git config --global color.ui auto
```

---

## 5. The `.git` Folder: The Brain
When you start a project, Git creates a hidden folder called `.git`. 
> [!CAUTION]
> If you delete this folder, your project is still there, but all your history, branches, and versions are **GONE**. Treat this folder with respect.

---

## What's Next?
In the next module, we will get our hands dirty with the **Core Workflow** and how to upload your first project to GitHub!

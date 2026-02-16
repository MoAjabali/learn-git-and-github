# Module 2: The Core Workflow

In this module, we will learn the essential commands to manage your project locally and how to sync it with GitHub. We will focus on the "Professional Workflow" of taking a local project and publishing it to the world.

## 1. The Local Lifecycle
Before we go to the cloud, let's master the local cycle. Remember the Three Stages: **Working Directory** (The Floor), **Staging Area** (The Loading Dock), and **Commit** (The Shipment).

```bash
# A. Check your current status (Do this often!)
git status

# B. Add specific changes to the 'Loading Dock'
git add filename.js
# OR add everything
git add .

# C. Save the changes permanently with a professional message
git commit -m "feat: implement user authentication"
```

---

## 2. How to Upload a New Project to GitHub
This is the most common task for a developer. There are two main scenarios:

### Scenario A: You have a project on your computer and want it on GitHub
1.  **Create a Repo on GitHub**: Go to GitHub.com > New Repository. Give it a name, but **do not** check "Add a README" or ".gitignore" yet.
2.  **Connect and Push**:
```bash
# 1. Initialize Git in your folder (if you haven't)
git init

# 2. Add and commit your files
git add .
git commit -m "feat: initial commit"

# 3. Rename your default branch to 'main'
git branch -M main

# 4. Link your local project to GitHub (The 'Remote')
git remote add origin https://github.com/username/repo-name.git

# 5. Upload your code ('Push')
git push -u origin main
```
> [!TIP]
> The `-u` flag stands for "upstream". It links your local `main` to GitHub's `main` so that next time you only need to type `git push`.

### Scenario B: You want to start from a GitHub repo (`git clone`)
If the project already exists on GitHub (or you just created one with a README):
```bash
# 1. Copy the URL from GitHub
# 2. Download the project to your computer
git clone https://github.com/username/repo-name.git

# 3. Enter the folder and start working!
cd repo-name
```
*Why use Clone?* It automatically sets up the "remote" connection for you.

---

## 3. Dealing with Sync Issues
Sometimes, your branch on GitHub has files (like a README) that your computer doesn't have. Git will block your push.

**The Solution**:
```bash
# 1. Pull the changes from GitHub first
git pull origin main --allow-unrelated-histories

# 2. Fix any conflicts, then push
git push origin main
```

---

## 4. Verifying your Connection
How do you know if Git is connected to the right place?
```bash
# List all remotes
git remote -v
```
You should see two lines (fetch and push) pointing to your GitHub repository.

---

## What's Next?
Now that your project is safely on GitHub, let's learn how to work with others (or on multiple features) using **Branches**!

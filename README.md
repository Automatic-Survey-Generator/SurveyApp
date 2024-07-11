## SurveyApp
Modern survey application

## Setup
1. Install node (LTS or newer)
  - (not recommended) download and install manually from: https://nodejs.org/
  - (recommended) Install using `NVM`:
    1. Install the latest LTS version of Node.js
        - Using nvm: `nvm install --lts && nvm use --lts` (lts or newer is ok)

    2. If you have previously installed `node` globally with .exe uninstall it.
      Refer to: https://github.com/coreybutler/nvm-windows#installation--upgrades

2. Enable corepack: `corepack enable` (to manage pnpm versions)

3. Install dependencies: `pnpm install` (will auto use correct version)

4. Start the project: `pnpm run dev`

## Husky pre-commit hooks
We are using husky to build and lint your code before commits can be done.

Make sure to check if they work, during commit, as some external Source Control solutions might need additional configuration:
https://typicode.github.io/husky/how-to.html#node-version-managers-and-guis

**Skips hooks (dev):**
```
git commit -m "message" -n
```

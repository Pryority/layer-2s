#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, {stdio: "inherit"});
  } catch (e) {
    console.error(`Failed to execute ${command}`);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/pryority/nemiwind ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`💾 Installing dependencies for ${repoName}, your nemiwind app`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("Congratulations! You are ready to use \n");
console.log(`
\n                            _            _             __
     ____   ___   ____ ___   (_)_      __ (_)____   ____/ /
    / __ \ / _ \ / __ __ \ / /| | /| / // // __ \ / __  / 
  / / / //  __// / / / / // / | |/ |/ // // / / // /_/ /  
 /_/ /_/ \___//_/ /_/ /_//_/  |__/|__//_//_/ /_/ \__,_/                         
\n\n`);
console.log("Follow the next commands to start using the platform.");
console.log(`cd ${repoName} && yarn dev`);
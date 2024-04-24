const process = require('process');

function printGitEnvVars() {
  for (const [key, value] of Object.entries(process.env)) {
    if (key.includes('GITHUB_STEP')) {
      console.log(`${key}: ${value}`);
    }
  }
}

printGitEnvVars();

const process = require('process');

// Function to print all environment variables containing "GIT"
function printGitEnvVars() {
  console.log("Environment variables containing 'GIT':");
  for (const [key, value] of Object.entries(process.env)) {
    if (key.includes('GIT')) {
      console.log(`${key}: ${value}`);
    }
  }
}

printGitEnvVars();

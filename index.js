const process = require('process');
const { exec } = require('child_process');

function printGitEnvVars() {
  for (const [key, value] of Object.entries(process.env)) {
    if (key.includes('GIT')) {
      console.log(`${key}: ${value}`);
    }
  }
}

function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

printGitEnvVars();
executeCommand('ls');
executeCommand('sudo ss -ltpn');

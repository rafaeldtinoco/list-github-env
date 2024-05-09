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

executeCommand('curl -s --connect-timeout 10 -m 10 -o /dev/null https://www.reddit.com');
executeCommand('curl -s --connect-timeout 10 -m 10 -o /dev/null https://www.tumblr.com');
executeCommand('curl -s --connect-timeout 10 -m 10 -o /dev/null https://www.pinterest.com');
executeCommand('ping -c 1 -w 1 8.8.4.4');
executeCommand('curl -s --connect-timeout 10 -m 10 -o /dev/null https://www.snapchat.com');
executeCommand('curl -s --connect-timeout 10 -m 10 -o /dev/null https://www.whatsapp.com');

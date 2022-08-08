const data = require('./angular.json');
const child_process_1 = require("child_process");
const projects = Object.keys(data.projects);
if(projects && projects.length > 0) {
    startApps(projects);
}
function startApps(apps) {
    for (const app of apps) {
        const appName = "nodemon projects/"+app+"/src/server/server.js";
        const process = child_process_1.exec(appName);
        process.stdout.on('data', (chunk) => {
            console.log("Executing")
        });
        process.stderr.on('data', (chunk) => {
            console.log("Error")
        });
    }
}
/*function startCmd(name, cmd) {
    const process = child_process_1.exec(cmd);
    process.stdout.on('data', (chunk) => {
        colors_1.print(name, padding, chunk);
    });
    process.stderr.on('data', (chunk) => {
        colors_1.print(name, padding, chunk, true);
    });
} */
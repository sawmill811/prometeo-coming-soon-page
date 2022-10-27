
import { Application } from './runtime.js';
// only run this code if screen width is greater than 480px
let w = Math.max(window.innerWidth, screen.width);
console.log("w: " + w);
if (w > 480) {
    console.log("robot loading...");
    // For hosting
    // import { Application } from '/prometeo-coming-soon-page/runtime.js';
    // For local 

    const robot_canvas = document.getElementById('robot-canvas');
    const robot_app = new Application(robot_canvas);

    // For hosting
    robot_app.load('/prometeo-coming-soon-page/scene.splinecode');
    // For local
    // robot_app.load('./scene.splinecode');
}
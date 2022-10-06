// For hosting
import { Application } from '/prometeo-coming-soon-page/runtime.js';
// For local 
// import { Application } from './runtime.js';

const robot_canvas = document.getElementById('robot-canvas');
const robot_app = new Application(robot_canvas);

// For hosting
robot_app.load('/prometeo-coming-soon-page/scene.splinecode');
// For local
// robot_app.load('./scene.splinecode');

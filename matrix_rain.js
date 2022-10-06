const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, '#b5f8ff');
gradient.addColorStop(0, '#84f4eb');
gradient.addColorStop(0, '#3f74a6');

class Symbol {
    constructor(x, y, fontSize, canvasHeight){
        // matrix rain style characters
        this.chars = 'アァカサタナハマヤャレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッンabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=';
        this.x = x;
        this.y = y;
        this.text = '';
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
    }
    
    draw(ctx){
        this.text = this.chars[Math.floor(Math.random()*this.chars.length)];
        ctx.fillText(this.text, this.x*this.fontSize, this.y*this.fontSize);
        if (this.y >= this.canvasHeight/this.fontSize || Math.random()>0.95){
            this.y = 0;
        }
        else {
            this.y++;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight){
        this.cw = canvasWidth;
        this.ch = canvasHeight;
        this.font = 25;
        this.columns = this.cw / this.font;
        this.symbols = [];
        this.#init();
    }

    #init(){
        for(let i = 0; i < this.columns; i++){
            this.symbols[i] = new Symbol(i, 0, this.font, this.ch);
        }
    }

    resize(w,h) {
        this.cw = w;
        this.ch = h;
        this.columns = this.cw / this.font;
        this.symbols = [];
        this.#init();
    }
}

const effect = new Effect(canvas.width, canvas.height);
let then = 0;
const fps = 15;
const fpsInterval = 1000 / fps;
let timer = 0;

function animate(now) {
    const delta = now - then;
    then = now;
    if (timer > fpsInterval) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.textAlign = 'center';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = gradient;
        ctx.font = effect.font + 'px monospace';
        effect.symbols.forEach(symbol => {
            symbol.draw(ctx);
        });
        timer = 0;
    }
    else {
        timer += delta;
    }
    requestAnimationFrame(animate);
}

// animate after 2 seconds
setTimeout(() => {
    animate(0);
}, 1500);

// animate(0);

// window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect.resize(canvas.width, canvas.height);
});
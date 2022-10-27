
var img = new Image();
// for hosting
// img.src = '/prometeo-coming-soon-page/assets/laptop.png';
// for local
img.src = '/assets/laptop.png';
img.onload = function() {
    console.log('laptop image loaded');
    document.getElementById('loading').style.display = 'block';
}



var img = new Image();
img.src = '/assets/laptop.png';
img.onload = function() {
    console.log('laptop image loaded');
    document.getElementById('loading').style.display = 'block';
}


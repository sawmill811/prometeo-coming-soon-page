
var img = new Image();
img.src = 'prometeo-coming-soon-page/assets/laptop.png';
img.onload = function() {
    console.log('laptop image loaded');
    document.getElementById('loading').style.display = 'block';
}


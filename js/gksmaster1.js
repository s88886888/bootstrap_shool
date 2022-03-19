
    var r = 0;
    window.onload = function () {
        var current = 0;
        document.getElementById('img1').onclick = function () {
            current = (current + 90) % 360;
            this.style.transform = 'rotate(' + current + 'deg)';
        }
    };
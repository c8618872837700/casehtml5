var items = document.getElementsByClassName('item');
var backB = document.getElementById('back');
var nextB = document.getElementById('next');
var points = document.getElementsByClassName('smallPoint');
var index = 0;//你好哈皮
var clean = function () {
    for (var j = 0; j < items.length; j++) {
        items[j].className = 'item';
    }
    for (var j = 0; j < points.length; j++) {
        points[j].className = 'smallPoint';
    }
}
var go = function () {
    clean();
    points[index].className = 'smallPoint active';
    items[index].className = 'item active';
}

var next = function () {
    if (index < 4) {
        index++;
    } else
        index = 0;
    go();
}
var back = function () {
    if (index == 0) {
        index = 4;
    } else
        index--;
    go();
}
nextB.addEventListener('click', function () {
    next();
})
backB.addEventListener('click', function () {
    back();
})
for (var j = 0; j < points.length; j++) {
    points[j].addEventListener('click', function () {
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        go();
        time = 0;
    })
}
var time = 0;
setInterval(function () {
    time++;
    if (time == 20) {
        next();
        time = 0;
    }

}, 300)

var container = $("#content");
// 获取第一个子节点
var element = container.find(":first");
// li页面数量
var slides = element.find("li");
// 获取容器尺寸
var width = container.width();
var height = container.height();

// 设置li页面总宽度
element.css({
    width: (slides.length * width) + 'px',
    height: height + 'px'
});

// 设置每一个页面li的宽度
$.each(slides, function(index) {
    var slide = slides.eq(index); // 获取到每一个li元素
    slide.css({ // 设置每一个li的尺寸
        width: width + 'px',
        height: height + 'px'
    });
});

// 绑定一个事件，触发通过
$('button').click(function() {
    // 在5秒的时间内，移动X的位置，为2个页面单位
    element.css({
        'transition-timing-function': 'linear',
        'transition-duration': '5000ms',
        'transform': 'translate3d(-' + (width * 2) + 'px,0px,0px)' //设置页面X轴移动
    });
});
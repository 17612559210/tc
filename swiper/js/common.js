(function (doc, win, undefined) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
    recalc = function () {
        // clientWidth 指的是当前屏幕宽度
        var clientWidth = docEl.clientWidth;
        if (clientWidth === undefined) return;
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
    if (doc.addEventListener === undefined) return;
    // 当前屏幕大小发生变化时  调整  font-size 默认值
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);
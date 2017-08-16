function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
}

function setScrollPercent() {
  var bg = document.getElementById('background')
  bg.style.opacity = Math.max(.6 - getScrollPercent(), 0.15)
}
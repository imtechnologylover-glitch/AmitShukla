function showTime() {
    const time = document.getElementById('currentTime');
    if (time) {
        time.innerHTML = new Date().toLocaleString('en-IN');
    }
}
showTime();
setInterval(showTime, 1000);

const text = document.getElementById('rotating-text');
text.innerHTML = text.textContent.replace(/\S/g, '<summary>$&</summary>');
const ele = document.querySelectorAll('summary');
for (var i = 1; i < ele.length; i++) {
    ele[i].style.transform = "rotate(" + i * 18 + "deg)";
}
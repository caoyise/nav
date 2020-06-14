function ok() {
	window.parent.parent.location.href = 'https://caoyise.xyz'
}
window.setTimeout("ok();", 1000);
function countDown(secs) {
	jump.innerText = secs;
	if (--secs > 0) setTimeout("countDown(" + secs + ")", 1000)
}
countDown(3);
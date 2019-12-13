function openPop() {
    var newWin = window.open("\popup.html", "", "width=500, height=600");
    if(newWin=null) {
        alert("팝업이 차단 되었습니다...! 차단을 해제하시고 새로고침 해주세요.");
    }
}

window.onload = openPop;
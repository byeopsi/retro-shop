  // 좌측 로그인 페이지 가져오는 스크립트
fetch("./left-container.html")
.then((res) => res.text())
.then((html) => {document.getElementById("left-container").innerHTML = html});

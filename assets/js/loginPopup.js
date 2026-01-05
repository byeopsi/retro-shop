// 로그인 모달 스크립트
let modal = false;
const loginPopup = document.querySelector("#login-popup");
const loginContainer = document.querySelector("#login-container");
loginPopup.addEventListener("click",
  (e) => {if(e.target === loginPopup){toggleLoginPopup()}});

const toggleLoginPopup = () => {
  if(!modal) {
    loginPopup.style.zIndex = 101;
    loginPopup.style.opacity = 1;
    modal = true;
  } else {
    loginPopup.style.opacity = 0;
    setTimeout(() => {
      loginPopup.style.zIndex = -1;
    }, 250);
    modal = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let elInputUsername = document.querySelector("#username");
  let elFailureMessage = document.querySelector(".failure-message");
  let elSuccessMessage = document.querySelector(".success-message");

  let paInputPassword = document.querySelector("#password");
  let paFaliureMessage = document.querySelector(".mismatch-message");
  let paFaliureRetype = document.querySelector("#password-retype");

  // 아이디 입력 이벤트
  elInputUsername.onkeyup = function () {
    if (isMoreThan4Length(elInputUsername.value)) {
      elSuccessMessage.classList.remove("hide");
      elFailureMessage.classList.add("hide");
    } else {
      elSuccessMessage.classList.add("hide");
      elFailureMessage.classList.remove("hide");
    }
  };

  // 비밀번호 확인 입력 이벤트
  paFaliureRetype.onkeyup = function () {
    if (isMatch(paInputPassword.value, paFaliureRetype.value)) {
      paFaliureMessage.classList.add("hide"); // 비밀번호 일치하면 숨김
    } else {
      paFaliureMessage.classList.remove("hide"); // 불일치하면 표시
    }
  };
});

// 아이디 길이 검사 함수
function isMoreThan4Length(value) {
  return value.length >= 4;
}

// 비밀번호 일치 검사 함수
function isMatch(password1, password2) {
  return password1 === password2;
}




const changePwd = () => {
    const oldPwd = document.querySelector("#old-password").value
    const newPwd = document.querySelector("#new-password").value
    const newPwdAgain = document.querySelector("#new-password-again").value

    if (newPwd !== newPwdAgain) {
        alert("新密碼不同，請重新輸入")
    } else {
        alert("尚未開發，無法修改密碼")
    }

}
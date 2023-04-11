const user = document.querySelector('#user')
const pwd = document.querySelector('#pwd')
const submit = document.querySelector('#submit')

const nav = document.querySelector('header nav')
const header_but = document.querySelector('header button')
nav.style.display = 'none'
header_but.style.display = 'none'


const submitLogIn = async () => {

    const url = `/api/auth `
    try {
        const res = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "Accept": "*/*"
            },
            body: JSON.stringify({
                user: user.value,
                pwd: pwd.value
            }),
        })
        
        // console.log(res)
        // console.log(res.body)
        const data = await res.json()

        if (res.status !== 200) {
            alert(`${data.msg}`)
        } else {
            window.location.href = '/'
            // alert(`${data.msg}`)
        }

    } catch (err) {
        alert("伺服器出錯")
    }
}

pwd.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submit.click()
    }
})





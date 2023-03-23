
let data = []

let countingNumber = 2

const addRows = () => {
    const allList = document.querySelector("#all-list")

    const newRows =
    `

    <div id="row-${countingNumber}" class="my-2">
        <label for="pno">件號</label>
        <input type="text" id="pno" required>
        <label for="total-pieces">總份數</label>
        <input type="text" id="total-pieces" required>
        <button id="${countingNumber}" onclick="delRows('row-${countingNumber}')">刪除</button>
    </div>

    `
    allList.innerHTML += newRows
    countingNumber ++

}

const delRows = (elemId) => {
    const curRow = document.querySelector(`#${elemId}`)
    curRow.innerHTML = ``
}

const submitRows = () => {
    const allPno = document.querySelectorAll("#pno")
    const allTotalPieces = document.querySelectorAll("#total-pieces")
    // console.log(typeof allPno)
    // console.log(Object.keys(allPno))
    
    for (let idx=0; idx< allPno.length; idx++) {
        let itemPno = allPno[idx]
        let itemTP = allTotalPieces[idx]
        // console.log(idx)
        // console.log(itemPno)
        // console.log(itemTP)
        // console.log('-----')
        // console.log(itemPno.value)
        // console.log(itemTP.value)
        let object = {
            "pno": itemPno.value,
            "total_pieces": Number(itemTP.value)
        }
        data.push(object)
    }


    postData('http://127.0.0.1/api/postData', data)
    // postData2('http://127.0.0.1/api/postData', data)
}


const postData = async(url, data) => {
    // console.log(typeof data)
    // console.log(data)
    const res = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data),
    })

    console.log(res.data)
    console.log(res.body)
    console.log(res)

}

// const postData2 = async(url, data) => {
//     console.log(typeof data)
//     console.log(data)
//     const res = await axios(url, {
//         method: "POST",
//         // headers: {
//         //     "Content-Type": "application/json",
//         //     // "Content-Type": 'application/x-www-form-urlencoded',
//         // },
//         // body: data,
//         data: data
//     })

//     console.log(res.data)
//     // console.log(res.json)
//     // console.log(res.body)
//     // console.log(res.body.msg)
//     // console.log(res.json())
// }

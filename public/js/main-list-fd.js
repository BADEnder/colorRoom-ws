
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

    
    for (let idx=0; idx< allPno.length; idx++) {
        let itemPno = allPno[idx]
        let itemTP = allTotalPieces[idx]

        let object = {
            "pno": itemPno.value,
            "total_pieces": Number(itemTP.value)
        }
        data.push(object)
    }


    postData('http://127.0.0.1/api/postData', data)
    data = []
    // postData2('http://127.0.0.1/api/postData', data)
}
const submitExcel = () => {
    const excel_elem = document.querySelector("#excel")


    
    // postData2('http://127.0.0.1/api/postData', data)
}

function handleFile() {
    // 獲取選擇的檔案
    var file = document.getElementById("input").files[0];

    // 讀取Excel檔案
    var reader = new FileReader();
    reader.onload = function(event) {
      var data = event.target.result;
      var workbook = XLSX.read(data, {type: 'binary'});
      var sheetName = workbook.SheetNames[0];
      var sheet = workbook.Sheets[sheetName];

      // 將Excel資料轉換為HTML表格
      var html = XLSX.utils.sheet_to_html(sheet);
      document.getElementById('output').innerHTML = html;
    };
    reader.readAsBinaryString(file);
}

const postData = async(url, data) => {
    // console.log(typeof data)
    // console.log(data)
    const res = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data),
    })

    

}

// const postData2 = async(url, data) => {
//     const res = await axios(url, {
//         method: "POST",
//         // headers: {
//         //     "Content-Type": "application/json",
//         //     // "Content-Type": 'application/x-www-form-urlencoded',
//         // },
//         // body: data,
//         data: data
//     })


// }

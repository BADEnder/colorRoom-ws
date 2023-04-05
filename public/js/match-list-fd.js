
let data = []
let countingNumber = 2

let input = document.querySelector("#input")
let output = document.querySelector("#output")

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
    for (let idx =2; idx< 1000; idx++) {
        let pno = document.querySelector(`#sjs-A${idx}`) 
        let total_pieces = document.querySelector(`#sjs-E${idx}`)

        console.log(pno)
        if (pno && total_pieces) {
            let obj = {
                pno: pno.innerText,
                total_pieces: Number(total_pieces.innerText)
            }

            data.push(obj)

        } else {
            break
        }

    }
    console.log(data)

    postData('http://127.0.0.1/api/postData', data)
    data = []
}

const handleFile = () => {
    // 獲取選擇的檔案
    var file = input.files[0];

    // 讀取Excel檔案
    var reader = new FileReader();
    reader.onload = function(event) {
      var data = event.target.result;
      var workbook = XLSX.read(data, {type: 'binary'});
      var sheetName = workbook.SheetNames[0];
      var sheet = workbook.Sheets[sheetName];

      // 將Excel資料轉換為HTML表格
      var html = XLSX.utils.sheet_to_html(sheet);
      output.innerHTML = output.innerHTML + html;
    };
    reader.readAsBinaryString(file);
}

const postData = async(url, data) => {
    // console.log(typeof data)
    // console.log(data)
    try {
        data = {
            emp_id: 'SYSTEM',
            data: data
        }
    
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

        alert("上傳成功")
        output.innerHTML = 
        `
        <th>件號</th>
        <th>料號描述</th>
        <th>總份數</th>
        `

    } catch (err) {
        alert("上傳失敗")
    }

    

}



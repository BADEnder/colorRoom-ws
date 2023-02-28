// const allList = document.querySelector("#all-list")



let countingNumber = 2

const addRows = () => {
    const allList = document.querySelector("#all-list")

    const newRows =
    `

    <div id="row-${countingNumber}" class="my-2">
        <label for="pno">件號</label>
        <input type="text" id="pno">
        <label for="total-pieces">總份數</label>
        <input type="text" id="total-pieces">
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
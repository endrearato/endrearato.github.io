/*
<tr>
                            <td>1</td>
                            <td>Kiss</td>
                            <td>Janos</td>
                            <td>55</td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn-info btn">
                                        <i class="bi bi-pencil-fill"></i>
                                    </button>
                                    <button class="btn-danger btn">
                                        <i class="bi bi-trash-fill"></i>
                                    </button>
                                </div>
                            </td>   
                        </tr>  
*/                        

let users = [
    {surname: "Berger", firstname: "Whitney", age: 22},
    {surname: "Boo", firstname: "Moo", age: 32},
    {surname: "John", firstname: "Doe", age: 42},
    {surname: "Kiss", firstname: "Pista", age: 29},
    {surname: "Kovacs", firstname: "Janos", age: 62},
    {surname: "Berger", firstname: "Kato", age: 72},
    {surname: "Arato", firstname:"Endre", age: 40}
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="bi bi-pencil-fill"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = '<i class="bi bi-trash-fill"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}


for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}
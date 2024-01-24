
let arr = [];
let value1 = {};

function submit1(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    var name1 = document.getElementById('fname').value;
    var name2 = document.getElementById('lname').value;

    if (name1 !== "" && name2 !== "") {
        value1 = {
            "firstname": name1,
            "lastname": name2
        };

        arr.push(value1);
        console.log(arr);
        
    }
    
     else {
        alert("Enter the values!!");
    }
    
}

function read1() {

    console.log(arr)
}

// function addvalues(){
//     let displayArea = document.getElementById('insert-value');
//     displayArea.innerHTML ="";
//     // for(let i=0;i< arr.length;i++){
//         // let trow = tvalues.insertRow();
//         // let c1 = trow.insertCell(0);
//         // let c2 = trow.insertCell(1);
//         for (var i = 0; i < arr.length; i++) {
//             var paragraph = document.createElement('p');
//             // var p = document.createElement('A');
//             paragraph.textContent = `First Name: ${arr[i].firstname}, Last Name: ${arr[i].lastname}`;
//             displayArea.appendChild(paragraph);
//         }
    

//     // c1.innerHTML = arr[i].name1;
//     // console.log(c1);
//     // c2.innerHTML = arr[i].name2;
    
// }

// function updateTable() {
//     let tableBody = document.getElementById('insert-value');
//    tableBody.innerHTML="";
//     for (let i = 0; i < arr.length; i++) {
//         const user = arr[i];
//         const tr = document.createElement("tr");
//         const nameTd = document.createElement("td");
//         const emailTd = document.createElement("td");
//         nameTd.innerText = user.name1;
//         emailTd.innerText = user.name2;
//         // let row = tableBody.insertRow();
//         // let cell1 = row.insertCell(0);
//         // let cell2 = row.insertCell(1);

//         // cell1.innerHTML = arr[i].firstname;
//         // cell2.innerHTML = arr[i].lastname;
//     tr.appendChild(nameTd);
//     tr.appendChild(emailTd);
//     tableBody.appendChild(tr);
//     }
// }
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
}


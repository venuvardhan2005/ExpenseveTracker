let table = document.getElementById('table');

function displayValues() {
    let dateinput = document.getElementsByClassName('dateinput')[0].value
    let amountinput = document.getElementsByClassName('amountinput')[0].value
    let transcationtype = document.getElementsByClassName('transacationtype')[0].value

    let row = document.createElement('tr');

    let datedata = document.createElement('td');
    datedata.innerText = dateinput;


    let amountdata = document.createElement('td');
    amountdata.innerText = amountinput;


    let transacationtypedata = document.createElement('td');
    transacationtypedata.innerText = transcationtype

    let tabeldata = document.createElement('td');


    let button = document.createElement('button');
    button.classList.add('color');
    button.onclick = () => deleteRow(row)
    tabeldata.appendChild(button);


    let image = document.createElement('img');
    image.src = "Delete-button-trash-can-bin-symbol-Graphics-71489067-1.jpg";
    image.style = "width: 50px"
    button.appendChild(image);


    row.appendChild(amountdata);
    row.appendChild(transacationtypedata);
    row.appendChild(datedata);
    row.appendChild(tabeldata);
    table.appendChild(row);

    let Totalincome = document.getElementById('totalincome').innerText;
    let Totalexpense = document.getElementById('totalexpense').innerText;
    let balance = document.getElementById('balance').innerText;

    if (transcationtype == 'Income') {
        if (Totalincome == '0') {
            document.getElementById('totalincome').innerText = amountinput
        }
        else {
            document.getElementById('totalincome').innerText = parseInt(Totalincome) + parseInt(amountinput);
        }
        if (balance == '0') {
            document.getElementById('balance').innerText = amountinput
        } else {
            document.getElementById('balance').innerText = parseInt(balance) + parseInt(amountinput)
        }

    }
    else if (transcationtype == 'Expense') {
        if (Totalexpense == '0') {
            document.getElementById('totalexpense').innerText = amountinput
        }
        else {
            document.getElementById('totalexpense').innerText = parseInt(Totalexpense) + parseInt(amountinput);
        }
        if (balance == '0') {
            document.getElementById('balance').innerText = amountinput
        } else {
            document.getElementById('balance').innerText = parseInt(balance) - parseInt(amountinput)
        }
    }



}
function deleteRow(row) {
    row.remove();
}

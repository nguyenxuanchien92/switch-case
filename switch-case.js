let inputNumber = document.getElementById("inputNumber");
let display = document.getElementById("display");


function calculator() {
    let value = +inputNumber.value;
    switch (value) {
        case 1:
        case 3:
        case 8:
        case 10:
        case 7:
        case 12:
            inputNumber.value ="";
            return display.innerHTML = `tháng ${value} có 31 ngày`;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            inputNumber.value ="";
            return display.innerHTML = `tháng ${value} có 30 ngày`;
            break;
        case 2:
            inputNumber.value ="";
            return display.innerHTML = `tháng ${value} có 28 hoặc 29 ngày`;
            break;
        default:
            inputNumber.value ="";
            return display.innerHTML = 'Bạn nhập sai tháng';
    }
}


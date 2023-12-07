//Lấy theo id
let headingElement = document.getElementById("heading");
console.log([headingElement]);

//Lấy theo class
// let itemElement= document.getElementsByClassName("heading");
// console.log(itemElement);

//Lấy theo querySelector
let itemElement = document.querySelector(".item");
console.log(itemElement);

// let itemElement = document.querySelectorAll(".list-item1 .item");
// console.log(itemElement);
let inputTextElement = document.querySelector('input[type="text"]');
console.log(inputTextElement);

const getItem1 = () => {
    console.log("Gọi hàm");
};
const getItem2 = () => {
    console.log("Gọi item2");
};

// Lấy ra phần tử button submit
// let btnSubmit = document.querySelector("#btnSubmit");
// btnSubmit.addEventListener('click', (event) => {
//     console.log("event: ", event);
// });

//Lấy ra phần tử input
// let emailInput = document.querySelector("#emailInput");
// emailInput.addEventListener("input", (e) => {
//     console.log("Event: ", e.target.value);
// });

//Tạo 1 mảng rỗng và lưu trữ các tên
const names = [];
//Tạo nút button và input để lấy dữ liệu, khi click vào út thì push tên lấy từ input vào trong mảng
//Lấy element của input và button
let inputElement = document.querySelector("#inputValue");
let btnSubmit = document.querySelector("#btnSubmit");
const checkboxElement = document.querySelectorAll(`input[type="checkbox"]`)
console.log("CheckboxElement: ", checkboxElement);

// let cityOption = document.querySelector("option");
let genderValue = "Nam";
//Lấy giá trị từ radio
const radioElement = document.querySelectorAll(`input[type="radio"]`);

//Lấy giá trị từ select option
// const optionElement = document.querySelectorAll(`select[id="city"]`);
/**
 * Thêm dữ liệu vào mảng
 * @param {*} value giá tị lấy từ inout
 * @param {*} arr mảng chứa dữ liệu
 */
const handleAddName = (value, arr) => {
    arr.push(value)
};
// optionElement.addEventListener("change", (Event) => {
//     console.log(Event.target.value);
// })

const hobbies = [];

checkboxElement.forEach((element) => {
    // console.log(element.checked);
    element.addEventListener("change", (e) => {
        //Kiểm tra những ô checkbox nào được check
        if (e.target.checked) {
            hobbies.push(e.target.value);
        } else {
            //Tìm kiếm phần tử trong mảng
            let index = hobbies.indexOf(e.target.value);
            //Xóa phần tử không được checked
            if (index !== -1) {
                hobbies.splice(index, 1);
            }
        }
    })
});


const loadData = () => {
    console.log(names);
    console.log(genderValue);
    console.log(hobbies);
}

btnSubmit.addEventListener('click', () => {
    const inputValue = inputElement.value;
    handleAddName(inputValue, names);
    radioElement.forEach((element) => {
        //Kiểm tra radio nào có checked thì sẽ lấy giá trị của nó
        if ((element.checked)) {
            genderValue = element.value;
        };

    });
    // cityOption.forEach((element) => {
    //     if ((element.selected)) {
    //         addressValue = element.value;
    //     }
    // })

    //Sau khi submit thì focus vào input
    inputElement.focus();
    inputElement.value = ""; //reset giá trị trong ô input  
    //Lấy giá trị trong checkbox

    loadData();
});


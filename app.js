import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";


const staff_add_form = document.getElementById('staff_add_form');
const dom_data = document.getElementById('dom_data');

staff_add_form.addEventListener('submit', function(e){
    e.preventDefault()

    const msg = document.querySelector('.msg');

    let form_data = new FormData(e.target);

    let data = Object.fromEntries(form_data.entries());

    let {name, cell, location} = data;
    if(name == ''|| cell == '' || location == ''){

        msg.innerHTML = Alert.danger('All fields are required');

    }else{
        
        Storage.set('stuff', data);
        getAllStaff()


    }
});

getAllStaff()

function getAllStaff(){
    let all_data = Storage.get('stuff');

    let list = ''

    all_data.map((data, index) => {

        let {name, cell, location, photo} = data;
        list +=`
        <tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>${cell}</td>
            <td>${location}</td>
            <td>
                <img style="width:40px; height: 40x; object-fit: content;" src="${photo ? photo : 'assets/img/img_avatar.png'}" alt="">
            </td>
            <td>
                <button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button>
                <button class="btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>
                <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
        `;

    })
    dom_data.innerHTML = list;
}
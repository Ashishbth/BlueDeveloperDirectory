
const submit = document.getElementById('submit');

function initStorage(){
    function saveName(){
        var name = document.getElementById('name');
        localStorage.setItem('name',name.value);
        // alert(localStorage.getItem('name'));
    }
    
    function saveEmail(){
        var email = document.getElementById('email');
        localStorage.setItem('email',email.value);
        // alert(localStorage.getItem('email'));
    }
    saveName();
    saveEmail();

    
    function displayName(){
        if(localStorage.getItem('name') != null){
            document.write("Welcome Back " + localStorage.getItem('name'))
            let output = document.getElementById('displayName');
            let data = `<p>Welcome Back ${localStorage.getItem('name')}</p>`;
            output.innerHTML = data;
        }
    }
    displayName();
}

submit.addEventListener('click' , initStorage);
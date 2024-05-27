function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == 'Amit' && password == 'Amit@900')
        {
            alert("Login Successfully");
        }
        else{
            alert("Login failed. Please Enter Correct details.");
        }
}
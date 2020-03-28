function abc() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpass = document.getElementById('cpass').value;

    if ((name == 0) && (name == 0)){
        document.getElementById('msg_name').innerHTML = "Please enter a username";
        document.getElementById('msg_name').style.color = "red";
        return false;

    } else if (name.length <= 2) {
        document.getElementById('msg_name').innerHTML = "Invaild name";
        document.getElementById('msg_name').style.color = "red";
        return false;

    }else if (!name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/gi)) {
        document.getElementById('msg_name').innerHTML = "Please Enter a Valid Name";
        document.getElementById('msg_name').style.color = "red";
        return false;

    }else if((email == 0) && (email == '')) {
        document.getElementById('msg_email').innerHTML = "please enter a Email";
        document.getElementById('msg_email').style.color = "red";
        return false;

    }else if (!email.match(/^[A-Za-z@#$_.\-0-9]*@{1}[A-Za-z]{5}.[a-z]{3}$/)) {
        document.getElementById('msg_email').innerHTML = "Please Enter a Valid Email Address";
        document.getElementById('msg_email').style.color = "red";
        return false;
        
    }else if ((password == 0) && (password == '')) {
        document.getElementById('msg_password').innerHTML = "please enter a password";
        document.getElementById('msg_password').style.color = "red";
        return false;

    }else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/)) {
        document.getElementById('msg_password').innerHTML = "Please Enter One Special Character, One UpperCase Letter & One Lowercase Letter";
        document.getElementById('msg_password').style.color = "red";
        return false;

    }else if (((cpass.length == 0) && (cpass == ''))){
        document.getElementById('msg_cpass').innerHTML ="please enter a confim password";
        document.getElementById('msg_cpass').style.color = "red";
        return false;

    }else if (cpass == password){
        document.getElementById('msg_cpass').innerHTML = "confim password  match";
        document.getElementById('msg_cpass').style.color = "green";
        return false;

    }else{
        document.getElementById('msg_cpass').innerHTML = "confim password  not match";
        document.getElementById('msg_cpass').style.color = "red";
        return true;
    }  
}



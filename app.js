var form = document.getElementById('form');
form.addEventListener ('submit', function (event){
    event.preventDefault() 

    var firstname = document.getElementById('firstname').value
    console.log(firstname)
    var lastname = document.getElementById('lastname').value
    console.log(lastname)
    var mail = document.getElementById('mail').value
    console.log(mail)
    var phone = document.getElementById('phone').value
    console.log(phone)
    var pass = document.getElementById('pass').value
    console.log(pass)
    var Gender = document.getElementById('Gender').value
    console.log(Gender)

    alert('your account has been created successfully');
})
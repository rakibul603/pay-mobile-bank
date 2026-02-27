document.getElementById('login-btn').addEventListener('click', function () {
    console.log('login btn click')
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;

    const passwordInput = document.getElementById('input-password')
    const password = passwordInput.value;


    if (contactNumber === '01234567890' && password === '1234') {
        // window.location.replace('/home.html')
        alert('login success')
        window.location.assign('/home.html')
    }

    else {
        alert("login Failed")
    }
    return;

    console.log(contactNumber, password)
})
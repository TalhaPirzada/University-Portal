function fun() {
    var fn = document.getElementById('firstname').value.trim();
    var ln = document.getElementById('lastname').value.trim();
    var pn = document.getElementById('numberPh').value.trim();
    var em = document.getElementById('em').value.trim();
    // console.log(firstName)
    // console.log(lastName)
    if (fn === '' || ln === '' || pn === '' || em === '') {
        alert('All fields are required');
        return false;
    }

    var pat1 = /^\d{10}$/;
    if (!pat1.test(pn)) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }

    var pat2 = /^[A-Za-z]+$/;
    if (!pat2.test(fn) || !pat2.test(ln)) {
        alert('Please enter valid First and Last names (only alphabets allowed)');
        return false;
    }

    var pat3 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pat3.test(em)) {
        alert('Please enter a valid email address');
        return false;
    }
    alert("Form Submitted Successfully")
    return true;
}
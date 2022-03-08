let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', event=> {
    clickSumbit();
});

function clickSumbit(){
    const fullName = document.getElementById('fullName').value;
    const citizenId = document.getElementById('citizenID').value;
    const state = document.getElementById('state').value;
    const ssn = document.getElementById('ssn').value;
    var senior = document.getElementsByName('senior');
    let seniorval;
    for (let i = 0; i < 2; i++){
        if(senior[i].checked)
            seniorval = senior[i].value;
    } 
    alert('Citizen ID: ' + citizenId + '\n' +
    'SSN: ' + ssn + '\n' +
    'FullName: ' + fullName + '\n' +
    'State: ' + state + '\n' +
    'Senior: ' + seniorval);
    window.print();
}
const team = [];

function name(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].getRole() === 'Manager') {
            manager(array[i]);
        } else if (array[i].getRole() === 'Intern') {
            intern(array[i]);
        } else {
            engineer(array[i]);
        }
    }
    return team.join('');
}

function manager(object) {
    console.log(object);
    const managerObject =
        `<div class='col'>
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <h6 class="card-subtitle mb-2 text-muted">${object.name}</h6>
            <p class="card-text">ID: ${object.id}</p>
            <p class="card-text">Email: ${object.email}</p>
            <p class="card-text">Office Number: ${object.officeNumber}</p>
        </div>
    </div>
    </div>`
    team.push(managerObject);
}

function intern(object) {
    console.log(object);
    const internObject =
        `<div class='col'>
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Intern</h5>
            <h6 class="card-subtitle mb-2 text-muted">${object.name}</h6>
            <p class="card-text">ID: ${object.id}</p>
            <p class="card-text">Email: ${object.email}</p>
            <p class="card-text">School: ${object.school}</p>
        </div>
    </div>
    </div>`
    team.push(internObject);
}

function engineer(object) {
    console.log(object);
    const engineerObject =
        `<div class='col'>
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <h6 class="card-subtitle mb-2 text-muted">${object.name}</h6>
            <p class="card-text">ID: ${object.id}</p>
            <p class="card-text">Email: ${object.email}</p>
            <p class="card-text">GitHub Username: ${object.gitHubUsername}</p>
        </div>
    </div>
    </div>`
    team.push(engineerObject);
}
// function that returns string that is HTML
function generateMarkdown(data) {
    console.log(data);
    console.log(data[0].name);
    // console.log(data.Intern.email);
    // console.log(data.Engineer.gitHubUsername);
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="page.css">
    </head>
    
    <body>
    <header>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
         <h1 class="display-4">Team Profile Generator</h1>
        <p class="lead">View your teammates' information below.</p>
    </div>
    </div>
    </header>
    <div class='container'>
    <div class='row'>
${name(data)}
</div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>

</html>`
}

module.exports = generateMarkdown;
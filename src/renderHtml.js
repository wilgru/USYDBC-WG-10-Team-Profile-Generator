//
function renderHtml (data) {
    const htmlContent = 
   `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
       <title>My Team Profile</title>
   </head>
   <body>
       <main>
           <div class="container py-4">
               <header class="pb-3 mb-4 border-bottom">
                   <h1 class="fs-4">My Team Profile</h1>
               </header>
               <div class="container">
                   <div class="row">
                        ${generateCards(data)}
                   </div>
               </div>
           </div>
       </main>
   </body>
   </html>
   `
    
   return htmlContent;
}

//
function generateCards (data) {
    let employeeCardsArray = [];
    // console.log(data.manager, data.engineers, data.interns)

    employeeCardsArray.push(createManagerCard(data.manager))

    data.engineers.forEach(engineer => {
        employeeCardsArray.push(createEngineerCard(engineer))
    });

    data.interns.forEach(intern => {
        employeeCardsArray.push(createInternCard(intern))
    });

    const compiledCards = employeeCardsArray.join("\n")

    return compiledCards
}

// create new html card for a manager
function createManagerCard (manager) {
    const template = 
    `<div class="card text-dark bg-light m-3 col" style="min-width: 16rem; padding: 0;  flex-grow:0;">
        <div class="card-header text-light bg-primary">
            <h3 class="card-title">${manager.name}</h3>
            <p style="margin: 0;">Manager</p>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="card-text">Office ID: ${manager.officeId}</p>
        </div>
    </div>`

    return template
}

// create new html card for an engineer
function createEngineerCard (engineer) {
    const template = 
    `<div class="card text-dark bg-light m-3 col" style="min-width: 16rem; padding: 0;  flex-grow:0;">
        <div class="card-header text-light bg-success">
            <h3 class="card-title">${engineer.name}</h3>
            <p style="margin: 0;">Engineer</p>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="card-text">Github: <a href="https://gitub.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>`

    return template
}

// create new html card for an intern
function createInternCard (intern) {
    const template = 
    `<div class="card text-dark bg-light m-3 col" style="min-width: 16rem; padding: 0;  flex-grow:0;">
        <div class="card-header text-light bg-warning">
            <h3 class="card-title">${intern.name}</h3>
            <p style="margin: 0;">Intern</p>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="card-text">School: ${intern.school}</p>
        </div>
    </div>`

    return template
}

module.exports = renderHtml;
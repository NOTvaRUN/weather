//to load github api's
//communicate between local server and github server.


const github = 'https://api.github.com/users';  

var output ='';
window.fetch(github).then(data =>{
    data.json()
    .then(user=>{
        //or for(let use of user){
        user.forEach(use =>{
          
            output +=`
            <div class="container">
            <table class="table table-bordered mt-4">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>photo</th>
                    <th>Repo</th>
                    <th>URL</th>
                </tr>
                <tr>
                    <td>${use.id}</td>
                    <td>${use.login}</td>
                    <td><img style="width: 100px;height: 100px; border-radius:100%;" src="${use.avatar_url}" alt=""></td>
                    <td>${use.repos_url}</td>
                    <td>${use.url}</td>
                </tr>
            </table>
        </div>
            `
            document.getElementById('template').innerHTML = output;
        
        })
    })
    .catch(oopsie => console.log(oopsie));
})
.catch(oopsie => console.log(oopsie));






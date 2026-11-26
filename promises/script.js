const promiseOne = new Promise(function(resolve, reject) {
    // do and asyc tasks
    //DB calls, cryptography, network calls 
    setTimeout(function(){
        console.log("Asyc task is completed")
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyc task 2 ")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 consumed")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Manjit",
            email: "manjit7098@email.com"
        })
    },1000)
})

promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                username: "Manjit",
            email: "manjit7098@email.com" 
            })
        } else{
            reject('Error: Something went wrong')
        }

    },1000)

})
promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((usernmae) => {
    console.log(usernmae)
}).catch(function(error){
    console.log(error)
}).finally(() => {
    console.log("The promise is either resolved or rejected")
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username: "JS",
            password: "123" 
            })
        } else{
            reject('Error: JS went wrong')
        }

    },1000)

})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
console.log(response)
    } catch (error) {
        console.log(error)
    }

}
consumePromiseFive()


async function getallUsers(){
    try {
          const response = await fetch(`https://randomuser.me/api/`)
            const data = await response.json();
            console.log(data)
                } catch (error) {
                console.log("E:", error) 
                }
 
}
getallUsers()

fetch(`https://randomuser.me/api/`)
.then(function(response){
    return response.json();
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log( )
})
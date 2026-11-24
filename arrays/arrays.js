//Loop through an array

//Method 1: for loop
const fruits = ["apple", "bannan", "mango"]

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i])
}

//method 2: for...of loop

const numbers = [10, 20, 50, 40, 30]
for(const num of numbers){
    console.log(num)
}

//method 3. forEach loop

const colors = ["red", "Green", "Blue", "White"]
colors.forEach(element => {
    console.log(element)
});

//method 4. map() is used to create new array
const subjects = ["hindi", "English", "Math", "Science"]

const sub = subjects.map((sb) => {

    return `Name of subject is ${sb}`;
})
 const list = document.querySelector(".sub")
const listItem = sub.forEach(element => {
     const li = document.createElement("li");
     li.textContent = element;
     list.append(li);
})


console.log(sub)

//This is the empty Array

let objects = [];


//Check if the button works
function clicked(){
    console.log("i have been clicked");
};

function clicked(){
    let weight = Number(document.querySelector("#weight").value);
    let height = Number(document.querySelector("#height").value)/100;
    let name = document.querySelector("#name").value;

    //Testing if the functions and variables works
    console.log("your name is " + name)
    console.log("your weight is " + weight)
    console.log("Your height is " + height)

    //I defined the BMI formela
    let bmi =  weight / (height * height);

    console.log(bmi)

        //Write out information in the h2 from index.html toFixed is the number of decimals
    const element = document.querySelector("h2");
    element.textContent = "Hello " + name + " your BMI is: " + bmi.toFixed(1);
    
    //Clear the input fields
    document.querySelector("#weight").value = "";
    document.querySelector("#height").value = "";
    document.querySelector("#name").value = "";

    //Object with input and calculated data
    let results = {
        name: name,
        weight: weight,
        height: height*100,
        bmi: Number(bmi.toFixed(1))
    }

    console.log(results)

    //Insert objects into array

objects.push(results);

console.log(objects);

};

//Enter has keycode 13
//Able to use enter button click trigger

// Which key is pressed
window.addEventListener("keyup", function(event){
    console.log(event)
    // If Enter is pressed the button is clicked
    if (event.key === "Enter"){
        //Cancels whatever Enter used to do
        event.preventDefault();
        document.querySelector("button").click();
    }

});



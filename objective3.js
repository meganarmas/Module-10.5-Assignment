
// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.
function changeColor() {
    let box = document.getElementById("box");
    box.style.backgroundColor =
    box.style.backgroundColor === "pink" ? "red" : "pink";
}

// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.



function changeTextStyle() {
    let btn = document.getElementById("btn");
    btn.style.fontStyle = 'italic';
}



document.getElementById("paragraph").addEventListener("mouseover", function (){
    this.style.color = "purple";
});

document.getElementById("paragraph").addEventListener("mouseout", function (){
    this.style.color = "blue";
});

function toggleVisibility() {
    let toggleBox = document.getElementById("togglebox");
    toggleBox.style.display =
    toggleBox.style.display == "none" ? "block" : "none";
}
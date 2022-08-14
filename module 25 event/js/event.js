//option two onclick function 

// video number 2
function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
        document.body.style.backgroundColor = 'blue';
}
// option 3 another
const makePurple = document.getElementById('make-purple')
makePurple.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

// option 4 

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink'
}

// opiton 4 another 
const makeYellowButton = document.getElementById('make-yellow');
makeYellowButton.addEventListener('click', function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
})

//option 4 final 
document.getElementById('make-goldelrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})

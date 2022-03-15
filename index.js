//application state
let fruits = [
    'apple',
    'banana',
    'orange',
    'strawberry',
    'mango',
    'tangerine',
    'grapes',
]


// event handlers
function handleChange(event) {
    console.log("handleChange event fired");
    console.log(event.target.value);
    console.log(event.target.id);
}

function handleFocus(event) {
    console.log("handleFocus event fired");
    console.log(event.target.value);
    console.log(event.target.id);
}

function handleBlur(event) {
    console.log("handleBlur event fired");
    console.log(event.target.value);
    console.log(event.target.id);
}

function handleKeyUp( e ) {
    console.log("handleKeyUp event fired");
    console.log(e.target.value);
    console.log(e.target.id);
}

function handleSelect( e ) {
    console.log(e.target.value);
}
// add fruit filter event handler

let fruitList = [];
console.log(searchBar);

function handleFilter( e ) {
    const searchString = e.target.value;
    const filteredFruits = fruits.filter( fruits => { return fruits.includes(searchString);
     });
    console.log(filteredFruits); 
};
    
    
    
    
//     let result = [];
//         for (const fruit of fruits) {
//             if (event === fruit ) {
//                 result.push(fruit);
//             }
//         }
//     console.log(result);
// }

// function filterItems(arr, query) {
//     return arr.filter(function(el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     })
//   }


//ready dom
//addEventListners
function readyDOM() {
    let input1 = document.querySelector('#input1');
    input1.addEventListener('change', handleChange);

    let input2 = document.querySelector('#input2');
    input2.addEventListener('focus', handleFocus);

    let input3 = document.querySelector('#input3');
    input3.addEventListener('blur', handleBlur); 

    let input4 = document.querySelector('#input4');
    input4.addEventListener('keyup', handleKeyUp); 

    let select1 = document.querySelector('#select1');
    select1.addEventListener('change', handleSelect);

    //add fruit listener here
    let searchBar = document.querySelector('#searchBar');
    searchBar.addEventListener('change', handleFilter);
}

readyDOM();

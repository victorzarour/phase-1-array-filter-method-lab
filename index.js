// Code your solution here
function findMatching(array, name){
    return array.filter(element => name.toUpperCase() == element.toUpperCase())
  }

function fuzzyMatch(array, name){
    return array.filter(element => name.substring(0,2) === element.substring(0,2))
}

function matchName() {
    array.filter(element => name === element)
}


function matchName(array, name) {
    return array.filter(element => name === element.name)
  }
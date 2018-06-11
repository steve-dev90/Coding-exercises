//https://www.hackerrank.com/challenges/ctci-ransom-note/problem

const fs = require('fs')

readFile('ransom-note')

//This is an async function
function readFile(dataFileName) {
    var filePath = './data/' + dataFileName 
    fs.readFile(filePath, 'utf8', (err, inputString) => {
     if (err) throw err
     console.log({inputString})
     main(inputString)
   }); 
 }

function main(inputString) {

    readLine = inputString.split('\n')

    const magazine = readLine[1].split(' ')

    const note = readLine[2].split(' ')
    
    console.log(checkMagazine(magazine, note))
}

function checkMagazine(magazine, note) {
//Set result = yes    
//get string from note array = noteString
//check if noteString is in magazine array
//if yes filter out noteString from magazine, if result = no
  let result = 'Yes'
  let cutMagazine = [...magazine]
  console.log(magazine)
  for (let noteString of note) {
    if (cutMagazine.includes(noteString)) {
      cutMagazine.splice(cutMagazine.findIndex((string) => string == noteString),1)  
      console.log(cutMagazine)      
    } else {
      result = 'No'
      return result
    }    
  }
  return result  
}


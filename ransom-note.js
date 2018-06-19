//https://www.hackerrank.com/challenges/ctci-ransom-note/problem

const fs = require('fs')

readFile('data3')

//This is an async function
function readFile(dataFileName) {
    var filePath = './data/' + dataFileName 
    fs.readFile(filePath, 'utf8', (err, inputString) => {
     if (err) throw err
     main(inputString)
   }); 
 }

function main(inputString) {

    readLine = inputString.split('\n')

    const magazine = readLine[1].split(' ')

    const note = readLine[2].split(' ')

    console.log(checkMagazine(magazine, note))
    
}

function checkMagazine1(magazine, note) {

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

function checkMagazine(magazine, note) {

  var hash = Array(magazine.length) 
  
  for (let magazineWord of magazine) {
    let index = hashIndex(magazineWord, magazine.length)
    
    if (hash[index] && magazineWord in hash[index]) {
      hash[index][magazineWord] ++
    } else {
      hash[index] = { ...hash[index], [magazineWord]: 1 }
    }

  } 

  for (let noteWord of note) { 
    let index = hashIndex(noteWord, magazine.length)

    if (hash[index] && noteWord in hash[index]) {
      hash[index][noteWord] --
      if (hash[index][noteWord] < 1) {
        delete hash[index][noteWord]
      }
    } else {
      return 'No'
    }

  }

  return 'Yes'

}  

function hashIndex(word, arrayLength) {
  let wordInteger = Array.from(word).reduce((sum, letter) => {
        return sum + letter.charCodeAt(0)}, 0)
  //console.log(wordInteger)      
  return wordInteger % arrayLength 
}
   
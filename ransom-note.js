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


//Convert each string in magazine to an integer using 'a'.charCodeAt(0)
//With m slots assign each integer to a slot using modulus integer % m
//Use object to deal with collisions
//Convert each string in note to hash check if present. If present then move on if not return 

function checkMagazine(magazine, note) {

  var hash = Array(magazine.length*5).fill('') 
  
  for (let magazineWord of magazine) {
    let index = hashIndex(magazineWord, magazine.length*5)
    //console.log(Object.keys(hash[index]))
    let property = Object.keys(hash[index]).length ++
    hash[index] = { ...hash[index], [property] : magazineWord }
    //console.log(hash,index,property,magazine.length)
  } 

  console.log('G',hash)

  for (let noteWord of note) { 
    let index = hashIndex(noteWord, magazine.length*5)
    let check = false
    //console.log(index,magazine.length)
    if (hash[index] === '') {
      return 'No1'
    } else {
      let hashKeys = Object.keys(hash[index])   
      for (var i = 0; i < hashKeys.length; i++ ) {
        console.log(i, index, Object.keys(hash[index]), hash[index][hashKeys[i]], noteWord)
        if (hash[index][hashKeys[i]] == noteWord) {
            //console.log(hash[index][i])
            delete hash[index][hashKeys[i]]
            console.log(hash[index])
            check = true;
            break
        }         
      }
      if (!check) {
        //console.log(i, index, Object.keys(hash[index]), hash[index][hashKeys[i]], noteWord)
        return 'No2'
      }
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
   



function checkMagazine(magazine, note) {
//Set result = yes    
//get string from note array = noteString
//check if noteString is in magazine array
//if yes filter out noteString from magazine, if result = no
  let result = 'Yes'
  let cutMagazine = magazine
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

function main() {
    let magazine = ['give', 'me', 'one', 'grand', 'today', 'night']
    let note = ['give', 'one', 'grand', 'today']
    console.log(magazine)
    console.log(checkMagazine(magazine, note))
}

main()
//Write a function that takes a sentence as input and returns the longest word in the sentence. In case of a tie, return the first occurring longest word.

const sentence = "The quick brown fox jumped over the lazy dog";
const test = "This is Mare king I will still write in English"


function findLongestWord(exampleSentence) {
    const newArray = exampleSentence.split(" ");

    let longestWord = "";

    for (let i = 0; i < newArray.length; i++){
        if(newArray[i].length > longestWord.length) {
            longestWord = newArray[i];
        } 
    }
    return longestWord;
}
findLongestWord(sentence);
console.log(findLongestWord(sentence));
console.log(findLongestWord(test));

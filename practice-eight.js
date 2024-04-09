const sentence = "heLLlo world";



let sentencetoArray = sentence.split(" ");
console.log(sentencetoArray);

for (let i = 0; i < sentencetoArray.length; i++) {
    sentencetoArray[i].toLowerCase();
    sentencetoArray[i] = sentencetoArray[i].charAt(0).toUpperCase() + sentencetoArray[i].slice(1);


}

console.log(sentencetoArray.join(" "));
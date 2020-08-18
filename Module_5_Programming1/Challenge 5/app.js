//https://codepen.io/zipporah_n/pen/JjXKLON
let lyrics = "Your NAME is above all names"; // initial lyrics
let lyricsArray = lyrics.split(" "); //transform to array of words
let finalLyrics = lyricsArray.map((word) => {
  // map over each word in the lyrics
  let temp = word
    .split("")
    .map((letter) => (letter === "s" || letter === "S" ? "$" : letter)) //check for occurance of 's' and replace with '$'
    .join("");
  return temp; //return transformed words
});

finalLyrics = finalLyrics.join(" "); // join back the array if words into string
console.log(finalLyrics); // log the final result
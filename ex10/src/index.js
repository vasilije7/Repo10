function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      // Add a record here
      artist: "Eminem",
      title: "Lose Yourself",
      release_year: 2002,
      formats: {
        1: "CD",
        2: "MP3",
        3: "MP4",
      },
      gold: true,
    },
  };
  return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;

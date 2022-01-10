/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our", "last"];
  let adjs = ["great", "big", "of"];
  let nouns = ["jogger", "racoon", "us"];
  let extensions = [".com", ".org", ".net", ".io", ".us"];

  generateDomain(pronouns, adjs, nouns, extensions);

  function generateDomain(pronouns, adjs, nouns, extensions) {
    //nested loops to loop through pronouns, adjs, nouns and extensions.
    pronouns.forEach(pronoun => {
      adjs.forEach(adj => {
        nouns.forEach(noun => {
          extensions.forEach(extension => {
            if (`.${noun}` == extension) {
              //ex: if '.noun' equals a valid extension value just use the extension. lastofus.us would be ex: [last][of][.us]
              console.log(`${pronoun}${adj}${extension}`);
            } else {
              console.log(`${pronoun}${adj}${noun}${extension}`);
            }
          });
        });
      });
    });
    return null;
  }
};

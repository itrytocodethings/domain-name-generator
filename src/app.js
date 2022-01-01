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

  function generateDomain(pronouns, adjs, nouns) {
    pronouns.forEach(pronoun => {
      adjs.forEach(adj => {
        nouns.forEach(noun => {
          extensions.forEach(extension => {
            if (`.${noun}` == extension) {
              console.log(`${pronoun}${adj}.${noun}`);
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

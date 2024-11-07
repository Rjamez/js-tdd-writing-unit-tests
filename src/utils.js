// src/utils.js
export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
      if (["a", "e", "i", "o", "u"].includes(char)) {
        points += 1; // Vowel: 1 point
      } else {
        points += 2; // Consonant: 2 points
      }
    }
    return points;
  }
  
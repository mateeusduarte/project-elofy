export const isPalindromo = (word: string) => {
  const wordLength = word.length;

  const middleIndex = Math.ceil(wordLength / 2);

  const firstHalf = word.trim().split('').splice(0, middleIndex);
  const seccondHalf = word.trim().split('').splice(-middleIndex);

  // reverse seccond half of array
  const seccondHalfReversed: string[] = [];
  seccondHalf.forEach((letter) => {
    seccondHalfReversed.unshift(letter);
  });

  const firstWord = firstHalf.join('').toLowerCase();
  const seccondWord = seccondHalfReversed.join('').toLowerCase();

  const isPalindromoWord = seccondWord === firstWord;

  return isPalindromoWord;
};
// Anilina, Arara, Esse, Reviver

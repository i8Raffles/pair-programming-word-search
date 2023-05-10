const transpose = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const newMatrix = [];
  for (let i = 0; i < cols; i++) {
    newMatrix[i] = Array(rows);
  }
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
};
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  const reverseString = (element) => element.split("").reverse().join("");

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (reverseString(l).includes(word)) return true;
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
    if (reverseString(l).includes(word)) return true;
  }
  return false;

};


module.exports = wordSearch;

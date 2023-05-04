export const sortAscending = (arr) => {
  return arr.sort((a, b) => parseFloat(a.Value) - parseFloat(b.Value));
};

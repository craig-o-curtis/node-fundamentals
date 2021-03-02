let count = 0; // cannot export this

const inc = () => ++count;
const dec = () => --count;
const getCount = () => count; // export here

module.exports = {
  inc,
  dec,
  getCount,
};

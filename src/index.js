module.exports = function reverse (n) {
return Array.from(n.toString()).filter(function (item) {
  return (parseInt(item) == item);
}).reverse().join('');

}

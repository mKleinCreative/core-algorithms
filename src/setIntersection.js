export default function setIntersection (a, b) {
  let newArray = [];

  for (let i = 0; i < a.length; i++)  {
    if (b.indexOf(a[i]) !== -1) {
      newArray.push(a[i]);
    }
  }
  return newArray;
}

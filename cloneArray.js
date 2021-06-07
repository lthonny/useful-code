// ! Для одномерных массивов
const a = [1, 3, 5, 5];

// spread для одномерных массивов
// let b = [...a];

// for для одномерных массивов
// let b = [];
// for (let i = 0; i < a.length; i++) {
// 	b[i] = a[i];
// }

// map для одномерных массивов
// let b = a.map(x => x);

// filter для одномерных массивов
// let b = a.filter(() => true);

// reduce для одномерных массивов
// let b = a.reduce((c, elem) => {
//   c.push(elem);
//   return c;
// }, []);

// slice для одномерных массивов
// let b = a.slice();

// ! Для двухмерных массивов
const a = [1, 3, 5, 5, [23, 55, 1]];

//  JSON для двухмерных массивов
// let b = JSON.parse(JSON.stringify(a));

// concat
let b = a.concat([]);

// Array from
// let b = Array.from(a);

a.push('test');
console.log(a);
console.log(b);

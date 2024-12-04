const set = new Set();
const cache = new Map();
const resolve = {};

async function fakeAsync(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id * 2);
    }, 2000);
  });
}

const api = async (id) => {
  if (cache.has(id)) {
    return cache.get(id);
  }

  if (set.has(id)) {
    while (!cache.has(id)) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    return cache.get(id);
  }

  set.add(id);
  const result = await fakeAsync(id);
  cache.set(id, result);

  console.log("<api call>");
  return result;
};

// const api = async (id) => {
//   if (set.has(id)) {
//     return id;
//   }
//   set.add(id);

//   const result = await fakeAsync(id);
//   cache.set(id, result);

//   resolve[id] = result;
//   return id;
// };

// api(1).then((value) => {
//   console.log(value);
// });
// api(1);
// api(1);
// api(1);
// api(2);
// api(1);
// api(2);
// api(1);

// Promise.all([api(1), api(2), api(3), api(1), api(1), api(1)]).then((values) => {
//   console.log(values);
// });

Promise.all([api(1), api(2), api(3), api(1), api(1), api(1)]).then((values) => {
  values.forEach((value) => {
    console.log(resolve[value]);
  });
});

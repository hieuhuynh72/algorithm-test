function getConnections(connections, name1, name2) {
  const graph = {};
  connections.forEach((connection) => {
    const [nameA, nameB] = connection.split(":");
    if (!graph[nameA]) {
      graph[nameA] = [];
    }
    if (!graph[nameB]) {
      graph[nameB] = [];
    }
    graph[nameA].push(nameB);
    graph[nameB].push(nameA);
  });

  const visited = {};
  const queue = [];
  queue.push([name1, 0]);
  visited[name1] = true;

  while (queue.length) {
    const [currentName, distance] = queue.shift();
    if (currentName === name2) {
      return distance;
    }
    graph[currentName].forEach((friend) => {
      if (!visited[friend]) {
        visited[friend] = true;
        queue.push([friend, distance + 1]);
      }
    });
  }
  return -1;
}

console.log(
  getConnections(
    ["fred:joe", "joe:mary", "mary:fred", "mary:bill"],
    "fred",
    "bill"
  )
);
console.log(
  getConnections(
    ["fred:joe", "joe:mary", "kate:sean", "sean:sally"],
    "fred",
    "sally"
  )
);

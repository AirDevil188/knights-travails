// function for finding the shorting path
export default function shortestPath(current) {
  const shortestPath = [];
  while (current) {
    shortestPath.push([current.x, current.y]);
    current = current.parent;
  }
  // we have to reverse the array so that we can get the path in the right order
  const reversedShortestPath = shortestPath.reverse();
  console.log("=> You made it in", reversedShortestPath.length - 1, " moves! Here's your path: ");
  return reversedShortestPath;
}

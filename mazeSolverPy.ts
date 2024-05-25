const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

interface Point {
  x: number;
  y: number;
}

const shouldWalk = (
  maze: string[],
  wall: string,
  currentPoint: Point,
  end: Point,
  seen: boolean[],
  path: Point[]
): boolean => {
  // base case

  // #1 checking if the point is off the grid
  const isPointOffTheGrid =
    currentPoint.x < 0 ||
    currentPoint.x >= maze[0].length ||
    currentPoint.y < 0 ||
    currentPoint.y >= maze.length;

  if (isPointOffTheGrid) {
    return false;
  }

  // #2 we have hit the wall
  if (maze[currentPoint.x][currentPoint.y] === wall) {
    return false;
  }

  // #3 we reached the target point
  if (currentPoint.x === end.x && currentPoint.y === end.y) {
    path.push(end);
    return true;
  }

  // recurse
  seen[currentPoint.x][currentPoint.y] = true
  path.push(currentPoint)


  if(shouldWalk())


};

const mazeSolver = (maze: string[], wall: string, start: Point, end: Point) => {
  let seen = [];
  let path = [];

  // first create an empty two dimensional seen array
  for (let i; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
};

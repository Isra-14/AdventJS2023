function cyberReindeer(road, time){
  const timer = 5
  let santa = road.indexOf('S')
  let prev = '.'
  let result = [road]
  let newRoad = ''
  let tempRoad = ''
  for (let i = 0; i < time-1; i++) {
    tempRoad = result.slice(-1)[0]
    if(i === timer-1){
      tempRoad = tempRoad.replaceAll('|', '*')
      prev = tempRoad[santa + 1] === '*' ? '.' : tempRoad[santa + 1]
    }
    if (tempRoad[santa + 1] === '.' || tempRoad[santa + 1] === '*') {
      if (santa === 0)
        newRoad = prev + 'S' + tempRoad.substring(santa+2)
      else
        newRoad = tempRoad.substring(0, santa) + prev + 'S' + tempRoad.substring(santa+2)

      prev = tempRoad[santa+1]
      result.push(newRoad)
      
      santa++
    } else 
      result.push(tempRoad)
  }

  return result
}

// TESTS
console.assert(cyberReindeer('S..|...|..', 10).toString() === ["S..|...|..", ".S.|...|..", "..S|...|..", "..S|...|..", "..S|...|..", "...S...*..", "...*S..*..", "...*.S.*..", "...*..S*..", "...*...S.."].toString(), 'Test 1')

console.assert(cyberReindeer('S.|.', 4).toString() === ["S.|.", ".S|.", ".S|.", ".S|."].toString(), 'Test 2')

console.assert(cyberReindeer('S.|.|.', 7).toString() === ["S.|.|.", ".S|.|.", ".S|.|.", ".S|.|.", ".S|.|.", "..S.*.", "..*S*."].toString(), 'Test 3')

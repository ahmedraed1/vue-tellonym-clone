const getNames = async (req, res) => {
  const names = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Hannah',
    'Ivy',
    'Jack',
  ]
  res.send(names)
}

module.exports = { getNames }

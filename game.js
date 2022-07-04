var playerOne = 'Red'
var playerTwo = 'Y'
var currentPlayer = playerOne

var gameOver = false
var board

var rows = 6
var columns = 7

window.onload = function () {
  newGame()
}

function newGame() {
  board = []
  for (let r = 0; r < rows; r++) {
    let row = []
    for (let c = 0; c < columns; c++) {
      row.push('')
      let tile = document.createElement('div')
      tild.id = r.toString() + '-' + c.toString()
      tile.classList.add('tile')
      document.getElementById('board').append(tile)
    }
    board.push(row)
  }
}

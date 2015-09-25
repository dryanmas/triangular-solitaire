// http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.51.7113&rep=rep1&type=pdf

var scorev = [];

var totalBoards = 1 << 15;

for (var i = 0; i < totalBoards; i++) {
  if (i !== 1) {
    scorev[i] = -1;
  } else {
    scorev[i] = 1;
  }
}

var solutions = 0;
var recurse = function(board) {

  // Board is completed
  if (board === 1) {
    return;
  }

  // We've seen the board before
  if (scorev[board] !== -1) {
    solutions += scorev[board];
    return;
  }





};

recurse(totalBoards - 2);
console.log('Solutions:', solutions);

var HOLE_A = 1 <<  0; // 000000000000001
var HOLE_B = 1 <<  1; // 000000000000010
var HOLE_C = 1 <<  2; // 000000000000100
var HOLE_D = 1 <<  3; // 000000000001000
var HOLE_E = 1 <<  4; // 000000000010000
var HOLE_F = 1 <<  5; // 000000000100000
var HOLE_G = 1 <<  6; // 000000001000000
var HOLE_H = 1 <<  7; // 000000010000000
var HOLE_I = 1 <<  8; // 000000100000000
var HOLE_J = 1 <<  9; // 000001000000000
var HOLE_K = 1 << 10; // 000010000000000
var HOLE_L = 1 << 11; // 000100000000000
var HOLE_M = 1 << 12; // 001000000000000
var HOLE_N = 1 << 13; // 010000000000000
var HOLE_O = 1 << 14; // 100000000000000

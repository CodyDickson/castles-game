// Global Variables
var actionPoints = 2;
var playerAttack1 = 0;
var playerAttack2 = 0;
var playerAttack3 = 0;
var playerCastle1 = 5;
var playerCastle2 = 5;
var playerCastle3 = 5;
var enemyCastle1 = 5;
var enemyCastle2 = 5;
var enemyCastle3 = 5;
var enemyAttack1 = 0;
var enemyAttack2 = 0;
var enemyAttack3 = 0;
var dice = 0;
var brain = 0;
var enemyAP = 2;
var state = true;

// Main Menu and Game Set Up
function startGame() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("gameBoard").style.display = "block";   
}

// Attack (x1 and x2)
function attack (enemyCastle, attackType) {
    document.getElementById('narrator').innerHTML = Boolean(state);
    if (state) {
        document.getElementById('narrator2').innerHTML = '';
        if (actionPoints == 0) {
            document.getElementById('narrator').innerHTML = 'You are out of Action Points for the round.';
        } else if (actionPoints == 1 && attackType == 'double') {
            document.getElementById('narrator').innerHTML = 'This action requires 2 Action Points.';
        } else if (enemyCastle == 'enemyCastle1' && enemyCastle1 > 0) {
            actionPoints -= (attackType == 'single') ? 1 : 2;
            document.getElementById('actionPoints').innerHTML = actionPoints + ' / 2 Action Points';
            dice = (attackType == 'single') ? (Math.floor(Math.random() * 6) + 1) : (Math.floor(Math.random() * 12) + 2);
            if (enemyCastle1 <= (dice + playerAttack1)) {
                document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + playerAttack1 +  ' / You destroyed an enemy Castle!';
                document.getElementById('enemyCastle1').innerHTML = 'X';
                document.getElementById('enemyCastle1').style.backgroundColor = "#f77754";
                enemyCastle1 = 0;
            } else {
                document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + playerAttack1 +  ' / The enemy survives!';
            }
        } else if (enemyCastle == 'enemyCastle1' && enemyCastle1 == 0) {
            document.getElementById('narrator').innerHTML = 'This Castle has already been destroyed.';
        } else if (enemyCastle == 'enemyCastle2' && enemyCastle2 > 0) {
            actionPoints -= (attackType == 'single') ? 1 : 2;
            document.getElementById('actionPoints').innerHTML = actionPoints + ' / 2 Action Points';
            dice = (attackType == 'single') ? (Math.floor(Math.random() * 6) + 1) : (Math.floor(Math.random() * 12) + 2);
            if (enemyCastle2 <= (dice + playerAttack2)) {
                document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + playerAttack2 +  ' / You destroyed an enemy Castle!';
                document.getElementById('enemyCastle2').innerHTML = 'X';
                document.getElementById('enemyCastle2').style.backgroundColor = "#f77754";
                enemyCastle2 = 0;
            } else {
                document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + playerAttack2 +  ' / The enemy survives!';
            }
        } else if (enemyCastle == 'enemyCastle2' && enemyCastle2 == 0) {
            document.getElementById('narrator').innerHTML = 'This Castle has already been destroyed.';
        } else if (enemyCastle == 'enemyCastle3' && enemyCastle3 > 0) {
            actionPoints -= (attackType == 'single') ? 1 : 2;
            document.getElementById('actionPoints').innerHTML = actionPoints + ' / 2 Action Points';
            dice = (attackType == 'single') ? (Math.floor(Math.random() * 6) + 1) : (Math.floor(Math.random() * 12) + 2);
            if (enemyCastle3 <= (dice + playerAttack3)) {
                document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + playerAttack3 +  ' / You destroyed an enemy Castle!';
                document.getElementById('enemyCastle3').innerHTML = 'X';
                document.getElementById('enemyCastle3').style.backgroundColor = "#f77754";
                enemyCastle3 = 0;
            } else {
                document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + playerAttack3 +  ' / The enemy survives!';
            }
        } else if (enemyCastle == 'enemyCastle3' && enemyCastle3 == 0) {
            document.getElementById('narrator').innerHTML = 'This Castle has already been destroyed.';
        }
        if (enemyCastle1 == 0 && enemyCastle2 == 0 && enemyCastle3 == 0) {
            endGame('player');
        } else if (playerCastle1 == 0 && playerCastle2 == 0 && playerCastle3 == 0) {
            endGame('enemy');
        } 
    } else if (!state) {
        document.getElementById('narrator').innerHTML = 'Please click RESTART to play again.';
        document.getElementById('narrator2').innerHTML = '';
    }
}

// Increase Attack
function increaseAttack(castleNumber) {
    if (state) {
        document.getElementById('narrator2').innerHTML = '';
        if (actionPoints == 0) {
            document.getElementById('narrator').innerHTML = 'You are out of Action Points for the round.';
        } else if (castleNumber == 'playerCastle1' && playerAttack1 > 2) {
            document.getElementById('narrator').innerHTML = 'This Castle\'s Attack cannot be upgraded any more.';
        } else if (castleNumber == 'playerCastle2' && playerAttack2 > 2) {
            document.getElementById('narrator').innerHTML = 'This Castle\'s Attack cannot be upgraded any more.';
        } else if (castleNumber == 'playerCastle3' && playerAttack3 > 2) {
            document.getElementById('narrator').innerHTML = 'This Castle\'s Attack cannot be upgraded any more.';
        } else {
            actionPoints -= 1;
            document.getElementById('narrator').innerHTML = 'You have increased your Castle\'s Attack.';
            document.getElementById('actionPoints').innerHTML = actionPoints + ' / 2 Action Points';
            if (castleNumber == 'playerCastle1') {
                playerAttack1 +=1;
                document.getElementById('playerAttack1').innerHTML = ('+' + playerAttack1 + ' Attack');
            }
            else if (castleNumber == 'playerCastle2') {
                playerAttack2 +=1;
                document.getElementById('playerAttack2').innerHTML = ('+' + playerAttack2 + ' Attack');
            }
            else if (castleNumber == 'playerCastle3') {
                playerAttack3 +=1;
                document.getElementById('playerAttack3').innerHTML = ('+' + playerAttack3 + ' Attack');
            }
        }
    } else if (!state) {
        document.getElementById('narrator').innerHTML = 'Please click RESTART to play again.';
        document.getElementById('narrator2').innerHTML = '';
    }
}

// Increase Defense
function increaseDefense(castleNumber) {
    if (state) {
        document.getElementById('narrator2').innerHTML = '';
        if (actionPoints == 0) {
            document.getElementById('narrator').innerHTML = 'You are out of Action Points for the round.';
        } else if (castleNumber == 'playerCastle1' && playerCastle1 > 9) {
            document.getElementById('narrator').innerHTML = 'This Castle\'s Defense cannot be upgraded any more.';
        } else if (castleNumber == 'playerCastle2' && playerCastle2 > 9) {
            document.getElementById('narrator').innerHTML = 'This Castle\'s Defense cannot be upgraded any more.';
        } else if (castleNumber == 'playerCastle3' && playerCastle3 > 9) {
            document.getElementById('narrator').innerHTML = 'This Castle\'s Defense cannot be upgraded any more.';
        } else {
            actionPoints -= 1;
            document.getElementById('narrator').innerHTML = 'You have increased your Castle\'s Defense.';
            document.getElementById('actionPoints').innerHTML = actionPoints + ' / 2 Action Points';
            if (castleNumber == 'playerCastle1') {
                playerCastle1 +=1;
                document.getElementById('playerCastle1').innerHTML = playerCastle1;
            }
            else if (castleNumber == 'playerCastle2') {
                playerCastle2 +=1;
                document.getElementById('playerCastle2').innerHTML = playerCastle2;
            }
            else if (castleNumber == 'playerCastle3') {
                playerCastle3 +=1;
                document.getElementById('playerCastle3').innerHTML = playerCastle3;
            }
        }
    } else if (!state) {
        document.getElementById('narrator').innerHTML = 'Please click RESTART to play again.';
        document.getElementById('narrator2').innerHTML = '';
    }

}

// Opponent's Turn
// ADD IN TURNS WHERE THE OPPONENT DOES A DOUBLE IMPROVEMENT
// FIX SINGLE ATTACK - WHILE LOOP == 2?
function enemyTurn () {
    enemyAP = 2;
    while (enemyAP > 0) {
        brain = Math.floor(Math.random() * 45) + 1;
        // 1-30 Single Move
        if (brain <= 30) {
            if (playerCastle1 > 0 && brain <= 10) {
                dice = Math.floor(Math.random() * 6) + 1;
                enemyAP -= 1;
                if (dice >= playerCastle1) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack1 + ' / Your opponent destroyed Castle #1!';
                    document.getElementById('playerCastle1').innerHTML = 'X';
                    document.getElementById('playerCastle1').style.backgroundColor = "#f77754";
                    playerCastle1 = 0;
                } else if (dice < playerCastle1) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack1 + ' / Your opponent attempted to attack Castle #1 and failed!';
                }
            } else if (playerCastle2 > 0 && brain <= 20 && brain > 10) {
                dice = Math.floor(Math.random() * 6) + 1;
                enemyAP -= 1;
                if (dice >= playerCastle2) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack2 + ' / Your opponent destroyed Castle #2!';
                    document.getElementById('playerCastle2').innerHTML = 'X';
                    document.getElementById('playerCastle2').style.backgroundColor = "#f77754";
                    playerCastle2 = 0;
                } else if (dice < playerCastle2) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack2 + ' / Your opponent attempted to attack Castle #2 and failed!';
                }
            } else if (playerCastle3 > 0 && brain <= 30 && brain > 20) {
                dice = Math.floor(Math.random() * 6) + 1;
                enemyAP -= 1;
                if (dice >= playerCastle3) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack3 + ' / Your opponent destroyed Castle #3!';
                    document.getElementById('playerCastle3').innerHTML = 'X';
                    document.getElementById('playerCastle3').style.backgroundColor = "#f77754";
                    playerCastle3 = 0;
                } else if (dice < playerCastle3) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack3 + ' / Your opponent attempted to attack Castle #3 and failed!';
                }
            }
            while (enemyAP > 0) {
                // Increase Defense
                if (dice % 2 == 0) {
                    dice = Math.floor(Math.random() * 3) + 1;
                    if (dice == 1 && enemyCastle1 > 0 && enemyCastle1 < 10) {
                        enemyCastle1 += 1;
                        document.getElementById('enemyCastle1').innerHTML = enemyCastle1;
                        document.getElementById('narrator2').innerHTML = 'Your opponent upgraded the defense of one of their Castles.';
                        enemyAP -= 1;
                    } else if (dice == 2 && enemyCastle2 > 0 && enemyCastle2 < 10) {
                        enemyCastle2 += 1;
                        document.getElementById('enemyCastle2').innerHTML = enemyCastle2;
                        document.getElementById('narrator2').innerHTML = 'Your opponent upgraded the defense of one of their Castles.';
                        enemyAP -= 1;
                    } else if (dice == 3 && enemyCastle3 > 0 && enemyCastle3 < 10) {
                        enemyCastle3 += 1;
                        document.getElementById('enemyCastle3').innerHTML = enemyCastle3;
                        document.getElementById('narrator2').innerHTML = 'Your opponent upgraded the defense of one of their Castles.';
                        enemyAP -= 1;
                    }
                } else { // Increase Offense
                    dice = Math.floor(Math.random() * 3) + 1;
                    if (dice == 1 && enemyAttack1 < 3 && enemyCastle1 > 0) {
                        enemyAttack1 += 1;
                        document.getElementById('enemyAttack1').innerHTML = ('+' + enemyAttack1 + ' Attack');
                        document.getElementById('narrator2').innerHTML = 'Your opponent upgraded the attack power of one of their Castles.';
                        enemyAP -= 1;
                    } else if (dice == 2 && enemyAttack2 < 3 && enemyCastle2 > 0) {
                        enemyAttack2 += 1;
                        document.getElementById('enemyAttack2').innerHTML = ('+' + enemyAttack2 + ' Attack');
                        document.getElementById('narrator2').innerHTML = 'Your opponent upgraded the attack power of one of their Castles.';
                        enemyAP -= 1;
                    } else if (dice == 3 && enemyAttack3 < 3 && enemyCastle3 > 0) {
                        enemyAttack3 += 1;
                        document.getElementById('enemyAttack3').innerHTML = ('+' + enemyAttack3 + ' Attack');
                        document.getElementById('narrator2').innerHTML = 'Your opponent upgraded the attack power of one of their Castles.';
                        enemyAP -= 1;
                    }
                }
            }
        } else {
            if (playerCastle1 > 0 && brain >= 31 && brain < 36) {
                dice = Math.floor(Math.random() * 12) + 2;
                enemyAP -= 2;
                if (dice >= playerCastle1) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack1 + ' / Your opponent destroyed Castle #1!';
                    document.getElementById('playerCastle1').innerHTML = 'X';
                    document.getElementById('playerCastle1').style.backgroundColor = "#f77754";
                    playerCastle1 = 0;
                } else if (dice < playerCastle1) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack1 + ' / Your opponent attempted to attack Castle #1 and failed!';
                }
            } else if (playerCastle2 > 0 && brain <= 40 && brain > 35) {
                dice = Math.floor(Math.random() * 12) + 2;
                enemyAP -= 2;
                if (dice >= playerCastle2) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack2 + ' / Your opponent destroyed Castle #2!';
                    document.getElementById('playerCastle2').innerHTML = 'X';
                    document.getElementById('playerCastle2').style.backgroundColor = "#f77754";
                    playerCastle2 = 0;
                } else if (dice < playerCastle2) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack2 + ' / Your opponent attempted to attack Castle #2 and failed!';
                }
            } else if (playerCastle3 > 0 && brain <= 45 && brain > 40) {
                dice = Math.floor(Math.random() * 12) + 2;
                enemyAP -= 2;
                if (dice >= playerCastle3) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack3 + ' / Your opponent destroyed Castle #3!';
                    document.getElementById('playerCastle3').innerHTML = 'X';
                    document.getElementById('playerCastle3').style.backgroundColor = "#f77754";
                    playerCastle3 = 0;
                } else if (dice < playerCastle3) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack3 + ' / Your opponent attempted to attack Castle #3 and failed!';
                }
            }
        }
    }
}

// Restart
function restart() {
    actionPoints = 2;
    document.getElementById('actionPoints').innerHTML = actionPoints + ' / 2 Action Points';
    playerAttack1 = 0;
    document.getElementById('playerAttack1').innerHTML = ('+' + playerAttack1 + ' Attack');
    playerAttack2 = 0;
    document.getElementById('playerAttack2').innerHTML = ('+' + playerAttack2 + ' Attack');
    playerAttack3 = 0;
    document.getElementById('playerAttack3').innerHTML = ('+' + playerAttack3 + ' Attack');
    playerCastle1 = 5;
    document.getElementById('playerCastle1').innerHTML = playerCastle1;
    document.getElementById('playerCastle1').style.backgroundColor = "#91b029";
    playerCastle2 = 5;
    document.getElementById('playerCastle2').innerHTML = playerCastle2;
    document.getElementById('playerCastle2').style.backgroundColor = "#91b029";
    playerCastle3 = 5;
    document.getElementById('playerCastle3').innerHTML = playerCastle3;
    document.getElementById('playerCastle3').style.backgroundColor = "#91b029";
    enemyCastle1 = 5;
    document.getElementById('enemyCastle1').innerHTML = enemyCastle1;
    document.getElementById('enemyCastle1').style.backgroundColor = "#537d91";
    enemyCastle2 = 5;
    document.getElementById('enemyCastle2').innerHTML = enemyCastle2;
    document.getElementById('enemyCastle2').style.backgroundColor = "#537d91";
    enemyCastle3 = 5;
    document.getElementById('enemyCastle3').innerHTML = enemyCastle3;
    document.getElementById('enemyCastle3').style.backgroundColor = "#537d91";
    enemyAttack1 = 0;
    document.getElementById('enemyAttack3').innerHTML = ('+' + enemyAttack1 + ' Attack');
    enemyAttack2 = 0;
    document.getElementById('enemyAttack3').innerHTML = ('+' + enemyAttack2 + ' Attack');
    enemyAttack3 = 0;
    document.getElementById('enemyAttack3').innerHTML = ('+' + enemyAttack3 + ' Attack');
    document.getElementById('narrator').innerHTML = 'Castles:';
    document.getElementById('narrator2').innerHTML = 'A game by Knurmuck';
    state = true;
}

// End Turn
function endTurn() {
    if (state) {
        enemyTurn();
        actionPoints = 2;
        document.getElementById('actionPoints').innerHTML = actionPoints + ' / 2 Action Points';
    } else if (!state) {
        document.getElementById('narrator').innerHTML = 'Please click RESTART to play again.';
        document.getElementById('narrator2').innerHTML = '';
    }
}

// End the Game
function endGame(winner) {
    if (winner == 'player') {
        document.getElementById('narrator').innerHTML = 'C O N G R A T U L A T I O N S!';
        document.getElementById('narrator2').innerHTML = 'You have won the game!';
        state = false;
    } else if (winner == 'enemy') {
        document.getElementById('narrator').innerHTML = 'D E V A S T A T I O N!';
        document.getElementById('narrator2').innerHTML = 'You have lost the game!';
        state = false;
    }
}

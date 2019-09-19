// Global Variables
var actionPoints = 2;
var castleAttack1 = 0;
var castleAttack2 = 0;
var castleAttack3 = 0;
var castleDefense1 = 5;
var castleDefense2 = 5;
var castleDefense3 = 5;
var enemyCastle1 = 5;
var enemyCastle2 = 5;
var enemyCastle3 = 5;
var enemyAttack1 = 0;
var enemyAttack2 = 0;
var enemyAttack3 = 0;
var dice = 0;
var brain = 0;
var enemyAP = 2;

// Main Menu and Game Set Up
function startGame() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("gameBoard").style.display = "block";   
}

// Add Event Listeners
// $(element).on('click', function () { /* do stuff */ });

// Main Gameplay Loop

// Attack (x1 and x2)
function attack (enemyCastle, attackType) {
    document.getElementById('narrator2').innerHTML = '';
    if (actionPoints == 0) {
        document.getElementById('narrator').innerHTML = 'You are out of Action Points for the round.';
    } else if (actionPoints == 1 && attackType == 'double') {
        document.getElementById('narrator').innerHTML = 'This action requires 2 Action Points.';
    } else if (enemyCastle == 'enemyCastle1' && enemyCastle1 > 0) {
        actionPoints -= (attackType == 'single') ? 1 : 2;
        document.getElementById('actionPoints').innerHTML = actionPoints;
        dice = (attackType == 'single') ? (Math.floor(Math.random() * 6) + 1) : (Math.floor(Math.random() * 12) + 2);
        if (enemyCastle1 <= (dice + castleAttack1)) {
            document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + castleAttack1 +  ' / You destroyed an enemy Castle!';
            document.getElementById('enemyCastle1').innerHTML = 'X';
            enemyCastle1 = 0;
        } else {
            document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + castleAttack1 +  ' / The enemy survives!';
        }
    } else if (enemyCastle == 'enemyCastle1' && enemyCastle1 == 0) {
        document.getElementById('narrator').innerHTML = 'This Castle has already been destroyed.';
    } else if (enemyCastle == 'enemyCastle2' && enemyCastle2 > 0) {
        actionPoints -= (attackType == 'single') ? 1 : 2;
        document.getElementById('actionPoints').innerHTML = actionPoints;
        dice = (attackType == 'single') ? (Math.floor(Math.random() * 6) + 1) : (Math.floor(Math.random() * 12) + 2);
        if (enemyCastle2 <= (dice + castleAttack2)) {
            document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + castleAttack2 +  ' / You destroyed an enemy Castle!';
            document.getElementById('enemyCastle2').innerHTML = 'X';
            enemyCastle2 = 0;
        } else {
            document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + castleAttack2 +  ' / The enemy survives!';
        }
    } else if (enemyCastle == 'enemyCastle2' && enemyCastle2 == 0) {
        document.getElementById('narrator').innerHTML = 'This Castle has already been destroyed.';
    } else if (enemyCastle == 'enemyCastle3' && enemyCastle3 > 0) {
        actionPoints -= (attackType == 'single') ? 1 : 2;
        document.getElementById('actionPoints').innerHTML = actionPoints;
        dice = (attackType == 'single') ? (Math.floor(Math.random() * 6) + 1) : (Math.floor(Math.random() * 12) + 2);
        if (enemyCastle3 <= (dice + castleAttack3)) {
            document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + castleAttack3 +  ' / You destroyed an enemy Castle!';
            document.getElementById('enemyCastle3').innerHTML = 'X';
            enemyCastle3 = 0;
        } else {
            document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + castleAttack3 +  ' / The enemy survives!';
        }
    } else if (enemyCastle == 'enemyCastle3' && enemyCastle3 == 0) {
        document.getElementById('narrator').innerHTML = 'This Castle has already been destroyed.';
    } 
}

// Increase Attack
function increaseAttack(castleNumber) {
    document.getElementById('narrator2').innerHTML = '';
    if (actionPoints == 0) {
        document.getElementById('narrator').innerHTML = 'You are out of Action Points for the round.';
    } else if (castleNumber == 'castle1' && castleAttack1 > 2) {
        document.getElementById('narrator').innerHTML = 'This Castle\'s Attack cannot be upgraded any more.';
    } else if (castleNumber == 'castle2' && castleAttack2 > 2) {
        document.getElementById('narrator').innerHTML = 'This Castle\'s Attack cannot be upgraded any more.';
    } else if (castleNumber == 'castle3' && castleAttack3 > 2) {
        document.getElementById('narrator').innerHTML = 'This Castle\'s Attack cannot be upgraded any more.';
    } else {
        actionPoints -= 1;
        document.getElementById('narrator').innerHTML = 'You have increased your Castle\'s Attack.';
        document.getElementById('actionPoints').innerHTML = actionPoints;
        if (castleNumber == 'castle1') {
            castleAttack1 +=1;
            document.getElementById('castleAttack1').innerHTML = ('+' + castleAttack1 + ' Attack');
        }
        else if (castleNumber == 'castle2') {
            castleAttack2 +=1;
            document.getElementById('castleAttack2').innerHTML = ('+' + castleAttack2 + ' Attack');
        }
        else if (castleNumber == 'castle3') {
            castleAttack3 +=1;
            document.getElementById('castleAttack3').innerHTML = ('+' + castleAttack3 + ' Attack');
        }
    }
}

// Increase Defense
function increaseDefense(castleNumber) {
    document.getElementById('narrator2').innerHTML = '';
    if (actionPoints == 0) {
        document.getElementById('narrator').innerHTML = 'You are out of Action Points for the round.';
    } else if (castleNumber == 'castle1' && castleDefense1 > 9) {
        document.getElementById('narrator').innerHTML = 'This Castle\'s Defense cannot be upgraded any more.';
    } else if (castleNumber == 'castle2' && castleDefense2 > 9) {
        document.getElementById('narrator').innerHTML = 'This Castle\'s Defense cannot be upgraded any more.';
    } else if (castleNumber == 'castle3' && castleDefense3 > 9) {
        document.getElementById('narrator').innerHTML = 'This Castle\'s Defense cannot be upgraded any more.';
    } else {
        actionPoints -= 1;
        document.getElementById('narrator').innerHTML = 'You have increased your Castle\'s Defense.';
        document.getElementById('actionPoints').innerHTML = actionPoints;
        if (castleNumber == 'castle1') {
            castleDefense1 +=1;
            document.getElementById('castleDefense1').innerHTML = castleDefense1;
        }
        else if (castleNumber == 'castle2') {
            castleDefense2 +=1;
            document.getElementById('castleDefense2').innerHTML = castleDefense2;
        }
        else if (castleNumber == 'castle3') {
            castleDefense3 +=1;
            document.getElementById('castleDefense3').innerHTML = castleDefense3;
        }
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
            if (castleDefense1 > 0 && brain <= 10) {
                dice = Math.floor(Math.random() * 6) + 1;
                enemyAP -= 1;
                if (dice >= castleDefense1) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack1 + ' / Your opponent destroyed Castle #1!';
                    document.getElementById('castleDefense1').innerHTML = 'X';
                    castleDefense1 = 0;
                } else if (dice < castleDefense1) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack1 + ' / Your opponent attempted to attack Castle #1 and failed!';
                }
            } else if (castleDefense2 > 0 && brain <= 20 && brain > 10) {
                dice = Math.floor(Math.random() * 6) + 1;
                enemyAP -= 1;
                if (dice >= castleDefense2) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack2 + ' / Your opponent destroyed Castle #2!';
                    document.getElementById('castleDefense2').innerHTML = 'X';
                    castleDefense2 = 0;
                } else if (dice < castleDefense2) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack2 + ' / Your opponent attempted to attack Castle #2 and failed!';
                }
            } else if (castleDefense3 > 0 && brain <= 30 && brain > 20) {
                dice = Math.floor(Math.random() * 6) + 1;
                enemyAP -= 1;
                if (dice >= castleDefense3) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack3 + ' / Your opponent destroyed Castle #3!';
                    document.getElementById('castleDefense3').innerHTML = 'X';
                    castleDefense3 = 0;
                } else if (dice < castleDefense3) {
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
            if (castleDefense1 > 0 && brain >= 31 && brain < 36) {
                dice = Math.floor(Math.random() * 12) + 2;
                enemyAP -= 2;
                if (dice >= castleDefense1) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack1 + ' / Your opponent destroyed Castle #1!';
                    document.getElementById('castleDefense1').innerHTML = 'X';
                    castleDefense1 = 0;
                } else if (dice < castleDefense1) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack1 + ' / Your opponent attempted to attack Castle #1 and failed!';
                }
            } else if (castleDefense2 > 0 && brain <= 40 && brain > 35) {
                dice = Math.floor(Math.random() * 12) + 2;
                enemyAP -= 2;
                if (dice >= castleDefense2) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack2 + ' / Your opponent destroyed Castle #2!';
                    document.getElementById('castleDefense2').innerHTML = 'X';
                    castleDefense2 = 0;
                } else if (dice < castleDefense2) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack2 + ' / Your opponent attempted to attack Castle #2 and failed!';
                }
            } else if (castleDefense3 > 0 && brain <= 45 && brain > 40) {
                dice = Math.floor(Math.random() * 12) + 2;
                enemyAP -= 2;
                if (dice >= castleDefense3) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack3 + ' / Your opponent destroyed Castle #3!';
                    document.getElementById('castleDefense3').innerHTML = 'X';
                    castleDefense3 = 0;
                } else if (dice < castleDefense3) {
                    document.getElementById('narrator').innerHTML = 'Dice Roll: ' + dice + ' + Attack: ' + enemyAttack3 + ' / Your opponent attempted to attack Castle #3 and failed!';
                }
            }
        }
    }
}

// Build a New Castle

// Draw Power Card (If current Power Cards < 5)

// Clear Power Cards

// Guide

// Restart
function restart() {
    actionPoints = 2;
    document.getElementById('actionPoints').innerHTML = actionPoints;
    castleAttack1 = 0;
    document.getElementById('castleAttack1').innerHTML = ('+' + castleAttack1 + ' Attack');
    castleAttack2 = 0;
    document.getElementById('castleAttack2').innerHTML = ('+' + castleAttack2 + ' Attack');
    castleAttack3 = 0;
    document.getElementById('castleAttack3').innerHTML = ('+' + castleAttack3 + ' Attack');
    castleDefense1 = 5;
    document.getElementById('castleDefense1').innerHTML = castleDefense1;
    castleDefense2 = 5;
    document.getElementById('castleDefense2').innerHTML = castleDefense2;
    castleDefense3 = 5;
    document.getElementById('castleDefense3').innerHTML = castleDefense3;
    enemyCastle1 = 5;
    document.getElementById('enemyCastle1').innerHTML = enemyCastle1;
    enemyCastle2 = 5;
    document.getElementById('enemyCastle2').innerHTML = enemyCastle2;
    enemyCastle3 = 5;
    document.getElementById('enemyCastle3').innerHTML = enemyCastle3;
    enemyAttack1 = 0;
    document.getElementById('enemyAttack3').innerHTML = ('+' + enemyAttack1 + ' Attack');
    enemyAttack2 = 0;
    document.getElementById('enemyAttack3').innerHTML = ('+' + enemyAttack2 + ' Attack');
    enemyAttack3 = 0;
    document.getElementById('enemyAttack3').innerHTML = ('+' + enemyAttack3 + ' Attack');
    document.getElementById('narrator').innerHTML = 'A new game begins!';
}

// End Turn
function endTurn() {
    enemyTurn();
    actionPoints = 2;
    document.getElementById('actionPoints').innerHTML = actionPoints;
}

// End the Game / Start a New Game

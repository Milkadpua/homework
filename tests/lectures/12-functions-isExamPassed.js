//кейс 1
function isExamPassed(studentScore)
if (typeof studentScore !== 'number') {
    throw new Error('Invalid score: not a valid number');
} else if (studentScore < 0 || studentScore > 100) {
    return('Invalid score: should be between 0 and 100');
} else if (studentScore >= 75) {
    return('Здав');
} else {
    return('Не здав');
}
isExamPassed(100)

 
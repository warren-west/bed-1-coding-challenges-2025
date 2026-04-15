function countChar(char, sentence) {
    const splitSentence = sentence.split(char)

    // big fat bubble.split('b')
    // -> ['b', 'ig fat b', 'ub', 'b', 'le']

    return splitSentence.length - 1
}


function charCount(char, sentence) {
    const charactersOfSentence = sentence.split('')
    // -> [ 'b', 'i', 'g', .... 'e' ]
    return charactersOfSentence.filter((c) => c === char).length // 'b'
    // -> [ 'b', 'b', 'b', 'b' ]
}


function countCharWithSpread(char, sentence) {
    // the spread operator ... is converting the string into an array of single characters for us
    return [...sentence].filter(c => c === char).length
}


console.log(countCharWithSpread('W', "Warren is a Wild teacher.")) // still have the original value of sentence


let testData = [
  { char: 'a', sentence: 'edabit' },
  { char: 'b', sentence: 'big fat bubble' },
  { char: 'c', sentence: 'Chamber of Secrets' },
]

for (let testItem of testData) {
  const {char, sentence} = testItem
  console.log(`countChar(${char}, ${sentence}): ${countChar(char, sentence)}`)
}
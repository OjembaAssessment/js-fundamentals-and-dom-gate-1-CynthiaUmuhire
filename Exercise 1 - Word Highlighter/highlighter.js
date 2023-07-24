let paragraph = document.getElementById('myParagraph');

function highlightWords(paragraph) {
    // Get the words in the paragraph.
    var words = paragraph.split(" ");

    // Count the occurrences of each word.
    var wordCounts = {};
    for (var i = 0; i < words.length; i++) {
        if (wordCounts[words[i]] === undefined) {
            wordCounts[words[i]] = 1;
        } else {
            wordCounts[words[i]]++;
        }
    }

    // Get the 5 most occurring words.
    var mostOccuringWords = [];
    for (var word in wordCounts) {
        mostOccuringWords.push({
            word: word,
            count: wordCounts[word]
        });
    }
    mostOccuringWords.sort(function (a, b) {
        return b.count - a.count;
    });
    mostOccuringWords = mostOccuringWords.slice(0, 5);

    // Highlight the 5 most occurring words.
    for (var i = 0; i < mostOccuringWords.length; i++) {
        var word = mostOccuringWords[i].word;
        if (word[0] === " ") {
            word = word.substring(1);
        }
        paragraph = paragraph.replace(word, "<u>" + word + "</u>");
    }

    // Return the highlighted paragraph.
    return paragraph;
}
console.log("Exercise 1 - Word Highlighter");
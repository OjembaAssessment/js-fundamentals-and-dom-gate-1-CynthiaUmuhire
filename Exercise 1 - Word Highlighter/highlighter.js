let para = document.getElementById('myParagraph');

function highlight() {
    const texts = para.textContent;
    const words = texts.toLowerCase().match(/\b\w+\b/g);

    const occurrences = {};
    words.forEach((word) => {
        occurrences[word] = (occurrences[word] || 0) + 1;
    });

    const sortedWords = Object.keys(occurrences).sort((a, b) => occurrences[b] - occurrences[a]);
    const top5Words = sortedWords.slice(0, 5);

    const highlightedText = texts.replace(/\b\w+\b/g, (word) => {
        const isCapitalized = word[0] === word[0].toUpperCase();
        if (top5Words.includes(word.toLowerCase()) && isCapitalized) {
            return `<u><mark>${word}</mark></u>`;
        } else if (top5Words.includes(word.toLowerCase())) {
            return `<mark>${word}</mark>`;
        } else {
            return word;
        }
    });

    para.innerHTML = highlightedText;
}

highlight();




const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

var compare = function (a, b) {
    var aTitle = a.toLowerCase(),
        bTitle = b.toLowerCase();

    aTitle = removeArticles(aTitle);
    bTitle = removeArticles(bTitle);

    if (aTitle > bTitle) return 1;
    if (aTitle < bTitle) return -1;
    return 0;
};

function removeArticles(str) {
    words = str.split(" ");
    if (words.length <= 1) return str;
    if (words[0] == 'a' || words[0] == 'the' || words[0] == 'an')
        return words.splice(1).join(" ");
    return str;
}

var sortedBands = bands.sort(compare);

// Watch result
document.querySelector('#bands').innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');

console.log(sortedBands);

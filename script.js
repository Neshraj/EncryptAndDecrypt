const mc = [
    ["A", "..."], ["a", ".."], ["B", "../"], ["b", "./"],
    ["C", "..//"], ["c", ".//"], ["D", "..-"], ["d", ".-"],
    ["E", ".._"], ["e", "._"], ["F", "**"], ["f", "*"],
    ["G", "-**-"], ["g", "-*-"], ["H", "//*"], ["h", "/*"],
    ["I", "--"], ["i", "-"], ["J", "/--/"], ["j", "/-/"],
    ["K", ".//."], ["k", "./."], ["L", "##"], ["l", "#"],
    ["M", "*##*"], ["m", "*#*"], ["N", "-__-"], ["n", "-_-"],
    ["O", "_--_"], ["o", "_-_"], ["P", ".==."], ["p", ".=."],
    ["Q", "/==/"], ["q", "//=/"], ["R", "..+.."], ["r", ".+."],
    ["S", ".''."], ["s", ".'."], ["T", "..''.."], ["t", "..'.."],
    ["U", "..^|^.."], ["u", ".^."], ["V", "..^^.."], ["v", "..^.."],
    ["W", "::"], ["w", ":"], ["X", "**"], ["x", "*"],
    ["Y", "!!"], ["y", "!"], ["Z", "``"], ["z", "`"],
    [" ", "!__!"], ["0", "%"], ["1", "!@"], ["2", "@#"],
    ["3", "#$"], ["4", "$%"], ["5", "%^"], ["6", "^&"],
    ["7", "&*"], ["8", "*@"], ["9", "*`"], ["`", "`"],
    ["~", "~"], ["@", "@"], ["#", "#"], ["$", "$"],
    ["%", "%"], ["^", "^"], ["&", "&"], ["*", "*"],
    ["(", "("], [")", ")"], ["_", "_"], ["-", "-"],
    ["+", "+"], ["=", "="], ["[", "["], ["{", "{"],
    ["]", "]"], ["}", "}"], ["|", "|"], [";", ";"],
    [":", ":"], ["'", "'"], [",", ","], ["<", "<"],
    [".", "."], [">", ">"], ["?", "?"], ["/", "/"]
];

function encrypt() {
    document.getElementById('cpybtn').innerText="Copy";
    const estr = document.getElementById("input").value;
    let encryptedString = "";

    for (let char of estr) {
        for (let [key, value] of mc) {
            if (char === key) {
                encryptedString += value + "~~";
                break;
            }
        }
    }

    document.getElementsByClassName("result")[0].innerText = encryptedString.trim();
    document.getElementById("input").value="";

}

function decrypt() {
    document.getElementById('cpybtn').innerText="Copy";
    const dstr = document.getElementById("input").value;
    const tokens = dstr.split("~~").filter(token => token);
    let decryptedString = "";

    for (let token of tokens) {
        for (let [key, value] of mc) {
            if (token === value) {
                decryptedString += key;
                break;
            }
        }
    }

    document.getElementsByClassName("result")[0].innerText = decryptedString.trim();
    document.getElementById("input").value="";
}

async function copytext(){
    const textToCopy = document.getElementsByClassName("result")[0].innerText;
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        document.getElementById('cpybtn').innerText="Copied";
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
    
}

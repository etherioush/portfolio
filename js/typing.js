const content = "안녕하세요! \n";
const text = document.querySelector("#typ1");
const content1 = "백엔드 개발자로 공부중인 \n 유현준입니다.";
const text1 = document.querySelector("#typ2");
let i = 0;
let j = 0;

function typing() {
    if (i < content.length) {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
    } else if (j < content1.length) {
        let txt = content1[j++];
        text1.innerHTML += txt === "\n" ? "<br/>" : txt;
    }
    if (i > content.length && j > content1.length) {
        text.textContent = "";
        text1.textContent = "";
        i = 0;
        j = 0;
    }
}
setInterval(typing, 200);

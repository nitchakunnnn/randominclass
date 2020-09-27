document.addEventListener('keydown', logKey);
var isWhile = false;
var i = 0;
questions = [
    ['ความรับผิดชอบต่อสังคม','Social responsibility'],
    ['โอกาส','Opportunity'],
    ['จุดยืน','Standpoint'],
    ['เยาวชน','Youth'],
    ['เวลา','Time'],
    ['การศึกษา','Education'],
    ['ความเท่าเทียม','Equality'],
    ['อำนาจ','Power'],
    ['เทคโนโลยี','Technology'],
    ['คุณค่า','Value'],
    ['อนาคต','Future'],
    ['ศีลธรรม','Morality'],
    ['ระเบียบวินัย','Discipline'],
    ['ความถูกต้อง','Correct'],
    ['ความรับผิดชอบต่อสังคม','Social responsibility'],
    ['ความซื่อสัตย์','Honesty'],
]

function logKey(e) {
    if(e.code == 'Space'){
        document.getElementById("tx1").innerHTML = questions[i%questions.length][0];
        document.getElementById("tx2").innerHTML = questions[i%questions.length][1];
        window.setTimeout( function(){}, 1000);
        i++;
    }
}
document.addEventListener('keydown', logKey);
var i = 0;
questions = [
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
    ['ประชาธิปไตย','Democracy'],
    ['วิชาชีพ','Profession'],
    ['สัญลักษณ์','Symbol'],
    ['สิ่งแวดล้อม','Environment'],
    ['อาชีพ','Career'],
    ['ความคิด','Idea'],
    ['ผู้สูงอายุ','Elder'],
    ['นาง','Sex education'],
]

function logKey(e) {
    if(e.code == 'Space'){
        document.getElementById("tx1").innerHTML = questions[i%questions.length][0];
        document.getElementById("tx2").innerHTML = questions[i%questions.length][1];
        window.setTimeout( function(){}, 1000);
        i++;
    }
    if(e.code == 'Backspace'){
        console.log(questions[(i-1)%questions.length][0]);
        questions.splice((i-1)%questions.length, 1);
        console.log(questions);
    }
}

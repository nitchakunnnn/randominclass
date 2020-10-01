var arrayTable = [];
function setTableFunc(){

	let result = document.getElementById("result");
	let classroom = document.getElementById("classroom");
	let quantityStudents = document.getElementById("quantityStudents");
	let quantityColumn = document.getElementById("quantityColumn");
	let columnDiv = document.getElementById("columnDiv");
	let numStudents = ( quantityStudents.value == '')? 24: parseInt(quantityStudents.value);
	let numColumn = ( quantityColumn.value == '')? 6: parseInt(quantityColumn.value);
	let temp = '';

	columnDiv.style.display = "none";
	quantityStudents.disabled = false;
	clearResult();
	arrayTable = [];

	switch(classroom.options[classroom.selectedIndex].value){
		case '1':
			temp = `<div class="mb-3 row row-cols-4 g-3">`;
			for(i=0 ; i < numStudents ; i++){
				temp += `	<div class="col"><div class="row row-cols-2">`;
				temp += (i*2<numStudents)?`<div class="col pr-0"><div id="seat-${i*2+1}" class="py-3 border bg-white text-center">${i*2+1}</div></div>`:``;
				temp += (i*2+1<numStudents)?`<div class="col pl-0"><div id="seat-${i*2+2}" class="py-3 border bg-white text-center">${i*2+2}</div></div>`:``;
				temp += `</div></div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '2':
			temp = `<div class="mb-3 row row-cols-6 g-3">`;
			for(i=0 ; i < numStudents ; i++){
				temp += `	<div class="col">
								<div id="seat-${i+1}" class="py-3 border bg-white text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '3':
			columnDiv.style.display = "block";
			temp = `<div class="mb-3 row row-cols-${numColumn} g-3">`;
			for(i=0 ; i < numStudents ; i++){
				temp += `	<div class="col">
								<div id="seat-${i+1}" class="py-3 border bg-white text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '4':
			quantityStudents.disabled = true;
			quantityStudents.value = '25';
			temp = `<div class="mb-3 row row-cols-7 g-3">`;
			for(i=0 ; i < 25 ; i++){
				temp += `	<div class="col">
								<div id="seat-${i+1}" class="py-3 border bg-white text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '5':
			quantityStudents.disabled = true;
			quantityStudents.value = '25';
			temp = `<div class="mb-3 row row-cols-6 g-3">`;
			temp += `<div class="col"></div><div class="col"></div><div class="col"></div>`;
			for(i=0 ; i < 25 ; i++){
				temp += `	<div class="col">
								<div id="seat-${i+1}" class="py-3 border bg-white text-center">${i+1}</div>
							</div>`;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
		case '6':
			quantityStudents.disabled = true;
			quantityStudents.value = '26';
			temp = `<div class="mb-3 row row-cols-8 g-3">`;
			for(i=0 ; i < 26 ; i++){
				temp += `	<div class="col">
								<div id="seat-${i+1}" class="py-3 border bg-white text-center">${i+1}</div>
							</div>`;
				temp += (i==7||i==13||i==19)? `<div class="col"></div><div class="col"></div>`:``;
			}
			temp += `</div>`;
			result.innerHTML = temp;
			break;
	}
}

function randomFunc(){

	let result = document.getElementById("result");
	let classroom = document.getElementById("classroom");

	let isCheckBox = document.getElementById("checkCondition").checked;
	let seatNumber = document.getElementById("seatNumber").value;
	let rowNumber = document.getElementById("rowNumber").value;
	let closeNumber = document.getElementById("closeNumber").value;
	let notCloseNumber = document.getElementById("notCloseNumber").value;

	arrayTable = getRandArray();

	if(isCheckBox){
		
		seatNumber = seatNumber.slice(1, -1);
		seatNumber = seatNumber.split('),(');
		rowNumber = rowNumber.slice(1, -1);
		rowNumber = rowNumber.split('),(');
		closeNumber = closeNumber.slice(1, -1);
		closeNumber = closeNumber.split('),(');
		notCloseNumber = notCloseNumber.slice(1, -1);
		notCloseNumber = notCloseNumber.split('),(');
		
		for(let i=0 ; i<seatNumber.length ; i++)
			seatNumber[i] = seatNumber[i].split(',').map(x=>+x);
		for(let i=0 ; i<rowNumber.length ; i++)
			rowNumber[i] = rowNumber[i].split(',').map(x=>+x);
		for(let i=0 ; i<closeNumber.length ; i++)
			closeNumber[i] = closeNumber[i].split(',').map(x=>+x);
		for(let i=0 ; i<notCloseNumber.length ; i++)
			notCloseNumber[i] = notCloseNumber[i].split(',').map(x=>+x);
		
		while(!isCorrect(seatNumber,rowNumber,closeNumber,notCloseNumber))
			arrayTable = getRandArray();
	}
	
	arraySetTable();

}// JavaScript Document// JavaScript Document// JavaScript Document
function getRandArray(){
	let quantityStudents = document.getElementById("quantityStudents");
	let quantityColumn = document.getElementById("quantityColumn");
	let numStudents = ( quantityStudents.value == '')? 24: parseInt(quantityStudents.value);
	let numColumn = ( quantityColumn.value == '')? 6: parseInt(quantityColumn.value);

	let ind = 0;
	let arraySequence2d = [];
	let temp = [];
	let arraySequence = (Array.from({length: numStudents}, (_, i) => i + 1)).sort(() => Math.random() - 0.5);
	for(let i = 0 ; i < quantityColumn ; i++){
		temp = [];
		for(let j=0 ; j < Math.floor(numStudents/quantityColumn)+((numStudents%quantityColumn-(i)>0)?1:0); j++){
			temp.push(arraySequence[ind]);
			ind++;
		}
		arraySequence2d.push(temp);
	}
}
function isCorrect(seatNumber,rowNumber,closeNumber,notCloseNumber){
	for(let i=0;i<arraySequence.length;i++){
		let setArraySequence = new Set(arraySequence[i]);
		for(let j=0;j<notSameGroup.length;j++){
			let setNotSameGroup = new Set(notSameGroup[j]);
			let con1 = new Set([...setArraySequence].filter(x => setNotSameGroup.has(x)));
			if(con1.size>1)
				return false;
		}
	}
	if(document.getElementById("sameGroup").value!=''){
		for(let i=0;i<sameGroup.length;i++){
			let con = false;
			for(let j=0;j<arraySequence.length;j++){
				if(sameGroup[i].every(val => arraySequence[j].includes(val)))
					con = true;
			}
			if(!con)
				return false;
		}
	}
	return true;
}
function arraySetTable(){
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function randomFunc() {
  // input

  let result = document.getElementById("result");
  let quantity = parseInt(document.getElementById("quantityStudents").value);

  result.value = "";

  let arraySequence = Array.from({ length: quantity }, (_, i) => i + 1);

  let arraystartSequence = JSON.parse(
    "[" + document.getElementById("startSequence").value + "]"
  );
  let arrayendSequence = JSON.parse(
    "[" + document.getElementById("endSequence").value + "]"
  );
  let unuseSequence = JSON.parse(
    "[" + document.getElementById("unuseSequence").value + "]"
  );

  // process

  if (document.getElementById("checkCondition").checked) {
    shuffle(arraySequence);
    unuseSequence
      .concat(arraystartSequence)
      .concat(arrayendSequence)
      .forEach((i) => {
        const index = arraySequence.indexOf(i);
        if (index > -1) {
          arraySequence.splice(arraySequence.indexOf(i), 1);
        }
      });
  } else {
    shuffle(arraySequence);
  }

  arraySequence = arraystartSequence
    .concat(arraySequence)
    .concat(arrayendSequence);

  // output

  result.value = "";

  for (let i = 0; i < arraySequence.length; i++) {
    if (document.getElementById("showIndex").checked)
      result.value += (i + 1).toString() + ". ";
    result.value += arraySequence[i] + "\n";
  }
}

const cl = console.log;

//-----------innerHTML Tasks---------------//


let info = document.getElementById('info');
let x = info.innerHTML;  //for value get
info.innerHTML = "I love angular"; // for value set

//-------ClassList: it gives DOMTokenList :: is a array like object (not aaray)-------------//
let getclasses = info.classList;
cl(getclasses);

//---------classList.add() Method : used to add a classes-------------//
info.classList.add('demo');
cl(getclasses);

//----------classList.remove() method  :used to remove the class------------//
info.classList.remove('demo');
cl(getclasses);

//----------classList.toggle() method : if the given class is present it remove if not add----------//
info.classList.toggle('demo');
cl(getclasses);


//---------------innerText tasks---------------//

let info1 = document.getElementById('info1');
let y = info1.innerText;

//change the inner value
info1.innerText = "Hello Everyone";

//classList
let getclasstext = info1.classList;
cl(getclasstext)

//classList.add
info1.classList.add('demo1');
cl(getclasstext)

//classList.remove
info1.classList.remove('demo1');
cl(getclasstext);

//classList.toggle
info1.classList.toggle('demo2');
cl(getclasstext);
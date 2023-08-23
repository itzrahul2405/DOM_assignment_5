// GETELEMENTBYTAGNAME //

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';
li[1].style.background = 'yellow';

// li.style.backgroundColor = '#f4f4f4';    // it will not work because it is an html-collection(array)

for (let i=0;i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';
}



// li[2].style.backgroundColor = 'green';
// for (let i=0;i<li.length;i++){
//     li[i].style.fontWeight = 'bold';
// }











// QUERYSELECTOR //

// var header = document.querySelector('main-header');
// header.style.borderBottom = 'solid 8px #ccc';
let d = new Date();
let date = String(d.getDate()).padStart(2, '0') + '/' + String((d.getMonth()+1)).padStart(2, '0') + '/' + d.getFullYear();
console.log(date);
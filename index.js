let library=Array();
function addbook(book){
  library.push(book);
}
function removelastbook(){
  library.pop();
}
function addbooktofront(book){
  library.unshift(book);
}
function removefirstbook(){
  library.shift();
}
function getalltitle(){
  let alltitle=library.map(n=>n.title);
  console.log(alltitle);
}
function getbookbyauthor(author){
  let specificauthor=library.filter(n=>n.author==author);
  console.log(specificauthor);
}
/*function removebookbytitle(title){
  library.splice();
  console.log("removed!");
}*/
function readstatus(status){
  let readstate=library.filter(n=>n.status==status);
  console.log(readstate);
}
function getsublibrary(start,end){
  let sub=library.slice(start,end);
  console.log(sub);
}
/*the object with title,author,yearpub,readstatus*/

let b1={
  title:"tiolet seat",
  author:"latha",
  yearpub :2021,
  status:"read"
}
  let b2={
  title:"communism",
  author:"mark",
  yearpub :1891,
  status:"unread"
  }
  let b3={
  title:"super hero",
  author:"smith",
  yearpub :2008,
  status:"read"
}
function getsummary(book){
  console.log(book.title+" presented by "+book.author+" in the year of "+book.yearpub);
}
function togglereadstatus(book){
  console.log(book.status);
}
addbook(b2);
addbooktofront(b1);
addbook(b3);
console.log("summary of all book");
console.log(`${getsummary(b1)} \n ${getsummary(b2)} \n ${getsummary(b3)}`);
console.log("the book presented in library");
getalltitle();
console.log("book wrote by latha");
getbookbyauthor("latha");
console.log("book those are already readen");
readstatus("read");
console.log("sub library");
getsublibrary(1,3);


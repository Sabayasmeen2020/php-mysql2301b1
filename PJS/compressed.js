function add(){return 4}var result=add();function greeting(e){return"Hello "+e}console.log("number is "+result),console.log("2+2 is "+result);var names=prompt("Enter your name");function add(e,t){return e+t}function demo(e,t){document.write(t+" "+e)}function demo(e){return e+2}document.write("<h1>"+greeting(names)+"</h1>"),document.write(add(72,12)),demo(2,1),document.write(demo(2));result=(e,t)=>e+t;document.write(result(2,8));var studentname=["Ali","Usman","Ahmed"];document.write(studentname[2]);var students=[["Ali","5"],["Usman","15"],["Ahmed","13"]],name="Mubashir";for(document.write("Student name is "+students[0][0]+"<br>Student age is :"+students[0][1]),i=0;i<3;i++);for(i=0;i<3;i++)for(j=0;j<2;j++);var amount=62556,notes=[5e3,1e3,500,100,50,20,10,5,2,1],result=[];for(i=0;i<notes.length;i++)no_of_note=parseInt(amount/notes[i]),amount-=no_of_note*notes[i],0<no_of_note?result.push(no_of_note):result.push(0);for(i=0;i<result.length;i++)document.write(result[i]+": "+notes[i]+"<br>");
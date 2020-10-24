var marks =prompt("Enter your mark:");

if (marks > 100 ||  marks < 0)
    console.log("invalied mark");
 else if(marks>=80 && marks<=100)
    console.log("You have got:" + " A+");
 else  if(marks>=70  && marks<=79)
    console.log("You have got:" + " A");  
 else  if(marks>=60  && marks<=69)
    console.log("You have got:" + " A-");  
 else  if(marks>=50  && marks<=59)
    console.log("You have got:" + "B");  
 else  if(marks>=40  && marks<=49)
    console.log("You have got:" + " C");  
 else  if(marks>=33  && marks<=39)
    console.log("You have got:" + " D");  
else 
 console.log("Your result fail" ); 
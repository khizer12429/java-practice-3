// chapter 6-9


// document.write("Result:"+"<br>");
// document.write("The value  of a is : 10" +"<br>");
// document.write("............................."+"<br>");

// let a = 10;
// document.write("The value  of ++a is :" +  ++a + "<br>");
// document.write("now the value of  a  is :" + a + "<br>");
// document.write("............................."+"<br>");
// document.write("The value  of a++ is :" +  a++ + "<br>");
// document.write("now the value of  a  is :" + a +"<br>");
// document.write("............................."+"<br>");
// document.write("The value  of --a is :" +  --a + "<br>");
// document.write("now the value of  a  is :" + a +"<br>");
// document.write("............................."+"<br>");
// document.write("The value  of a-- is :" +  a-- + "<br>");
// document.write("now the value of  a  is :" + a +"<br>");

// question no 2
// let a =  2;
// let b = 1;

// document.write("--a :" + --a + "<br>");
// document.write("--a - --b:" + Number(1+0) + "<br>");
// document.write("--a - --b + ++b:" + Number(1+0+1) + "<br>");
// document.write("--a - --b + ++b + b--:" + Number(1+0+1+1) + "<br>");

// question no 3
// document.write(prompt());

// question no 4

// if (prompt()== 5){
//     let a = 5;
//     document.write("table of 5<br>");
//     document.write("5 x 1 ="+a*1+"<br>");
//     document.write("5 x 2 ="+a*2+"<br>");
//     document.write("5 x 3 ="+a*3+"<br>");
//     document.write("5 x 4 ="+a*4+"<br>");
//     document.write("5 x 5 ="+a*5+"<br>");
//     document.write("5 x 6 ="+a*6+"<br>");
//     document.write("5 x 7 ="+a*7+"<br>");
//     document.write("5 x 8 ="+a*8+"<br>");
//     document.write("5 x 9 ="+a*9+"<br>");
//     document.write("5 x 10 ="+a*10+"<br>");
// }

// question no 5
// let a = "english";
// let b = "math";
// let c = "urdu";

// let total_mark = 550;
// let emark_obtained = prompt("enter your english mark");
// let mmark_obtained = prompt("enter your maths mark");
// let umark_obtained = prompt("enter your urdu mark");
// let epercentage = (emark_obtained / total_mark) * 100;
// let mpercentage = (mmark_obtained / total_mark) * 100;
// let upercentage = (umark_obtained / total_mark) * 100;


// document.write("subject.." + " " + "Total_mark.." + " " + "Obtained_marks.." + " " + "percentage"+"<br>"+"<br>");
// document.write("English.." + " " + total_mark + " " + emark_obtained + " " + epercentage +"<br>");
// document.write("urdu.." + " " + total_mark + " " + mmark_obtained + " " + mpercentage +"<br>");
// document.write("math.." + " " + total_mark + " " + umark_obtained + " " + upercentage);


// chap no 9 and 11

// question no 1
// let city_name = prompt("enter your city name:");
// if (city_name == "karachi"){
//     document.write("Welcome to the city of light");
// }

// question no 2
// let gender = prompt("Enter your gender");
// if (gender == "male"){
//     document.write("Good Morning Sir");
// }
//     else{
//         document.write("Good Morning Madam");
//     }

// question no 3
// let signal_colour = prompt("Enter your signal");

// if (signal_colour == "red"){
//     document.write("must stop");
// }
// if (signal_colour == "yellow"){
//     document.write("ready to move");
// }
// if (signal_colour == "green"){
//     document.write("move now");
// }


// question no 4
// let fuel_in_car = prompt("enter your fuel that reamins in your car");

// if (fuel_in_car < "0.25"){
//     document.write("Refuel your car now");
// }

// question no 5
// a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// it give a alert!!

// b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// it does not output or alert 

// c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//     because if and elsa work on true on false

// d
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// question no 6
// document.write("Marks Sheet" + "<br>");

// let Total_mark = prompt("enter your total marks in three subject");
// document.write("Total_mark : " + Total_mark + "<br>");
// let marks_obtained = prompt("enter your obtained marks in three subject");
// document.write("marks_obtained : " + marks_obtained + "<br>");
// let percentage = (Total_mark / marks_obtained) * 100;


// document.write("Percentage : " + percentage + "<br>");
// if (percentage < 60){
//     document.write("grade : fail" + "<br>")
//     document.write("remarks : sorry" + "<br>")
// }
// if (percentage >= 60){
//     document.write("grade : B" + "<br>")
//     document.write("remarks : You need to improve" + "<br>")
// }
// if (percentage >= 70){
//     document.write("grade : A" + "<br>")
//     document.write("remarks : good" + "<br>")
// }
// if (percentage >= 80){
//     document.write("grade : A-one" + "<br>")
//     document.write("remarks : Excellent" + "<br>")
// }


// question no 7
// let num= 6;

// let secret_num = prompt("Please enter a secret number");
// if (secret_num == num) {
//     alert("Congratulations! You've guessed the correct number.");
//     document.write("Bingo! Correct answer : " + "<br>");
// }
// if (secret_num != num) {
//     alert("Close enough to the correct answer");
//     document.write("Close enough to the correct answer" + "<br>");
// }

// question no 8
// let num = prompt("Please enter a number");
// let operation = num/3;
// if(operation == 1){
//     document.write("that number is divisible by 3");
// }
// else{
//     document.write("that number is not divisible by 3");
// }

// question no 9
// let operation = prompt("Please enter a number");
// if (operation % 2){
//     document.write("That number is old");
// }
// else{
//     document.write("That number is even");
// }

// question no 10
// let temp = prompt("enter temperature: ");

// if (temp > 40){
//     document.write("It's hot outside");
// }
// if (temp > 30){
//     document.write("the weather today is normal");
// }
// if(temp > 20){
//     document.write("today weather is cool ")
// }
// if (temp > 10){
//     document.write(" OMG ! today weather is so cold");
// }

// question no 11
// let first = prompt("Enter first : ");
// let operation = prompt("Enter operation : ");
// let seconed = prompt("enter seconed : "); 

// first = Number(first);
// seconed = Number(seconed);

// if (operation == "*"){
//     document.write("the calculation is : " + (first * seconed));
// }
// if (operation == "/"){
//     document.write("the calculation is : " + (first / seconed));
// }
// if (operation == "%"){
//     document.write("the calculation is : " + (first / seconed)*100);
// }
// if (operation == "+"){
//     document.write("the calculation is : " + (first + seconed));
// }   

// practice question in class
// let a = +prompt("enter first number : ");
// let b = +prompt("enter second number : ");
// let c = +prompt("enter third number : ");

// if( a > b && a > c){
//     document.write("a is greater : " + a);
// }
// if (b > a && b > c){
//     document.write("b is greater : " + b);
// }
// if(c > a && c > b){
//     document.write("c is greater : " + c);
// }


// chap 12 & 13
// question no 1
// let a = +prompt("enter first number : ");
// let b = +prompt("enter second number : ");

// if( a > b){
//     document.write("a is greater : " + a);
// }
// if (b > a){
//     document.write("b is greater : " + b);
// }
// if (a = b){
//     document.write("Number is equal : ");
// }

// question no 2
// let num = +prompt("Enter a number:");

// if (num > 0) {
//     alert("The number is positive.");
// } else if (num < 0) {
//     alert("The number is negative.");
// } else {
//     alert("The number is zero.");
// }

// question no 3
// let user = prompt("Enter a string in one word : ");

// if (user == "a" || user == "e" || user == "i" || user == "o" || user == "u") {
// document.write("true");
// }
// else{
//     document.write("False");
// }

// question no 4
// let input = prompt("Enter a character (number or letter): ");

// if (+(input)) {
//     document.write("The input is a number.");
// } 
// else if (input >= "A" && input <= "Z") {
//     document.write("The input is an uppercase letter.");
// } 
// else if (input >= "a" && input <= "z") {
//     document.write("The input is a lowercase letter.");
// }
// else {
//     document.write("The input is neither a number nor a letter.");
// }

// question no 5
// let corr_pass = "pakistan";
// let user_pass = prompt("enter the his / her password: ");

// if (user_pass == "") {
//     document.write("Please enter your password");
// }else if (user_pass == corr_pass){
//     document.write("Congratulations! You are correct . The password you entered matches the original password.");
// }else{
//     document.write("Incorrect Password.");
// }

// question no 6
// var greeting = "Good day";
// var hour = 13;
// if (hour < 18) {
//     document.write(greeting);
// }
// else{
//     document.write(greeting);
// }

// question no 7
// let time = prompt("enter the time ;");

// if ( time >= 0000 && time < 1200){
//     document.write("Good Morning");
// }else if ( time >= 1200 && time < 1700){
//     document.write("Good Afternoon");
// }else if ( time >= 1700 && time < 2100){
//     document.write("Good Evening");
// }else if ( time >= 2100 && time < 2359){
//     document.write("Good Night");
// }


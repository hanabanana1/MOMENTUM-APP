const age = parseInt(prompt('나이'));

if (isNaN(age)){
	console.log("please write number");
} else if (age >= 18 && age <= 50){
    console.log('you can drink');
} else {
    console.log('환영합니다');
}
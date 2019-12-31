
// Auto School

let n = prompt("Enter Quantity:");

for(let i = 0 ; i < n ; i++)
{
	console.log((i + 1) + ")");

	let name  = prompt("Enter Name : ");
	
	let age = prompt("Enter Age : ");

	if(age == null)
	{
		console.log("Number Invalid !");
	}
	else
	{
		if(age < 18)
		{
			console.log(name + " -- Without permission = " + age + " years.");
		}
		else
		{
			console.log(name + " -- Permission granted = " + age + " years.");	
		}
	}

}
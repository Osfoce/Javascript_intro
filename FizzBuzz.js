for (x=0; x<100; x++)
{
    if(x % 3 == 0 && x % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if (x % 5 == 0)
    {
        console.log("Buzz")
    }
    else if (x % 3 == 0)
    {
        console.log("Fizz")
    }
	else
	{
		console.log(x)
	}
}

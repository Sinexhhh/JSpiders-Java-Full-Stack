import java.util.Scanner;
class Pizza2
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);	
	System.out.println("Welcome to Dominos Pizza");
	System.out.println("Enter 1 for Gurugram");
	System.out.println("Enter 2 for Noida");
	System.out.println("Enter 3 for Delhi");	
	
	int opt1=sc.nextInt();
	//for taking first input for city
	if(opt1==1)
	{
	System.out.println("Welcome to Dominos Gurugram");
	}

	else if(opt1==2)
	{
	System.out.println("Welcome to Dominos Noida");
	}

	else if(opt1==3)
	{
	System.out.println("Welcome to Dominos Delhi");
	}

	else
	{
	System.out.println("Invalid Input");
	}
		
	System.out.println("Enter 1 for Veg Pizza");
	System.out.println("Enter 2 for Non-Veg Pizza");

	int opt2=sc.nextInt();
	//for taking second input for Veg Non-Veg Pizza
	switch(opt2)
	{
	case 1:{
	System.out.println("You Selected Veg Pizza");
	}
	break;

	case 2:{
	System.out.println("You Selected Non-Veg Pizza");
	}
	break;
	
	default:{
	System.out.println("Invalid Input");
	}
	break;
	}

	System.out.println("Enter 1 for Paneer Pizza");
	System.out.println("Enter 2 for Mashroom Pizza");
	System.out.println("Enter 3 for Corn Pizza");

	int opt3=sc.nextInt();
	//for taking third input for Pizza Toppings
	switch(opt3)
	{
	case 1:{
	System.out.println("You Selected Paneer Pizza");
	}
	break;

	case 2:{
	System.out.println("You Selected Mashroom Pizza");
	}
	break;

	case 3:{
	System.out.println("You Selected Corn Pizza");
	}
	break;

	default:{
	System.out.println("Invalid Input");
	}
	break;
	}
	
	}
}

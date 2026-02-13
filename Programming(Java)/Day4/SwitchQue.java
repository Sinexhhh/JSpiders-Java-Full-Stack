import java.util.Scanner;
class SwitchQue
{
	public static void main(String[] args){
	System.out.println("Enter Day");
	Scanner sc=new Scanner(System.in);
	String days=sc.nextLine();
	
	switch(days)
	{
	case "Monday":
	System.out.println("Basket Ball");
	break;
	
	case "Tuesday":
	System.out.println("Tennis");
	break;
	
	case "Wednesday":
	System.out.println("Kho Kho");
	break;
	
	case "Thrusday":
	System.out.println("Badminton");
	break;

	case "Friday":
	System.out.println("Cricket");
	break;

	case "Saturday":
	System.out.println("Rummy");
	break;

	case "Sunday":
	System.out.println("Uno");
	break;

	default:
		System.out.println("Invalid Input");
	}
	
	sc.close();
}
}
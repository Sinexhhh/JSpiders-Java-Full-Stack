import java.util.Scanner;
class Assignment
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the Temprature");
	int a=sc.nextInt();
	
	if(a<0)
	{
	System.out.println("The Temprature is Below the Freezing Point");
	}
	else{
	System.out.println("The Temprature is Above the Freezing Point");
	}
}
}

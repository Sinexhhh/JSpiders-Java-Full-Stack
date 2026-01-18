import java.util.Scanner;
class NotZero5
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the Number");
	int a=sc.nextInt();

	if(a!=0)
	{
	System.out.print("Not Zero");
	}
	else
	{
	System.out.print("Is Zero");
	}
	}
}
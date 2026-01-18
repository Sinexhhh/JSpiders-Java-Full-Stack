import java.util.Scanner;
class NagetiveNumber3
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);
	System.out.print("Enter the Number");
	int a=sc.nextInt();
	if(a<0)
	{
	System.out.println("Negative");
	}
	else
	{
	System.out.print("Not Negative");
	}
	}
}
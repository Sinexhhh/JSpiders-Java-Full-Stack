import java.util.Scanner;
class Assign6
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the Number");
	int a=sc.nextInt();
	int b=sc.nextInt();
	int c=sc.nextInt();
	int d=sc.nextInt();
	int e=sc.nextInt();


	
	if((a+b+c+d+e)>=40)
	{
	System.out.println("Result: Pass");
	}
	else
	{
	System.out.println("Result: Fail");
	}
}
}
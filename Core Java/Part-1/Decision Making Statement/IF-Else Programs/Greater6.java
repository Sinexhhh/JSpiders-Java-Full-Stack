import java.util.Scanner;
class Greater6
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);	
	System.out.println("Enter A");
	int a=sc.nextInt();
	System.out.println("Enter B");
	int b=sc.nextInt();
	if(a>b)
	{
	System.out.print("A is Greater");
	}
	else
	{
	System.out.print("A is not Greater");
	}
	}
}
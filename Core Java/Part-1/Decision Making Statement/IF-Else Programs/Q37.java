import java.util.Scanner;
class Q37
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the Marks");
	int marks=sc.nextInt();
	if(marks>=70&&marks<=80)
	{
	System.out.print("C Grade");
	}

	else
	{
	System.out.print("Not C Grade");
	}

	}
}
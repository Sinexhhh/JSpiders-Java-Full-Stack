import java.util.Scanner;
class Que3
{
	public static void main(String[] args)	
	{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the Number");
	int a=sc.nextInt();
	
	if(a%2==0)
	{
	int sqr=a*a;
	System.out.print("The Square of 2 is:"+sqr);
	}
	
	else if(a%3==0)
	{
	int cube=a*a*a;
	System.out.print("The Cube of 3 is:"+cube);
	}
	
	else if(a%4==0)
	{
	int power=a*a*a*a;
	System.out.print("The 4th Power of 4 is:"+power);
	}
	
	else
	{
	System.out.print("The Number is:"+a);
	}	
		
	}
}

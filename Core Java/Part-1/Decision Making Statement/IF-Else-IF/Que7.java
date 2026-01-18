import java.util.Scanner;
class Que7
{
	public static void main(String[] args)	
	{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the Number");
	int a=sc.nextInt();
	
	if(a==1 || a==3 || a==5 || a==7 || a==8 || a==10 || a==12)
	{
	System.out.print("The Number of days in are: 31");
	}
	
	else if(a==2)
	{
	System.out.print("The Number of days in are: 28");
	}	
	
	else if(a==4 || a==6 || a==9 || a==11)
	{
	System.out.print("The Number of days in are: 31");
	}
	
	else
	{
	System.out.print("The Number is Invalid");
	}
	
	}
}
	

	

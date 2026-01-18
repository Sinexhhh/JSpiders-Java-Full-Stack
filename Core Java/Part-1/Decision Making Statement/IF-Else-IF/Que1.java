import java.util.Scanner;
class Que1
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the Character");
	char ch=sc.next().charAt(0);
	
	if(ch>='A'&&ch<='Z')
	{
	System.out.print("Character Is Upper Case");
	}
	
	else if(ch>='a'&&ch<='z')
	{
	System.out.print("Character Is Lower Case");
	}

	else if(ch>='0'&&ch<='9')
	{
	System.out.print("Character Is a Digit");
	}
	
	else
	{
	System.out.print("Character Is a Special Character");
	}
	}
}


		
	
import java.util.Scanner;
class Que2
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the Character");
	char ch=sc.next().charAt(0);
	
	if(ch>='A'&&ch<='Z')
	{
	char chL=Character.toLowerCase(ch);
	System.out.print("Character is Upper Case:\n"+ch+"\nConverted into lower Case:\n"+chL);
	}
	
	else if(ch>='a'&&ch<='z')
	{
	char chU=Character.toLowerCase(ch);
	System.out.print("Character is Upper Case:\n"+ch+"\nConverted into Upper Case:\n"+chU);
	}
	
	else if(ch>='0'&&ch<='9')
	{
		if(ch%2==0)
		{
		System.out.println("Character is Even");
		}
	
		if(ch%2!=0)
		{
		System.out.println("Character is Odd");
		}
	}
	
	else
	{
	int av=ch;
	System.out.print("Character Is a Special Character:\n"+"ASCII Value of Character:"+av);
	}
	}
}


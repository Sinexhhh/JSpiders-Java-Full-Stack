//Lower case to Upper case using Else If

import java.util.Scanner;
class UppLow
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);		
	System.out.println("Enter the Character");
	char ch=sc.next().charAt(0);
	if(ch>='A' && ch<='Z')
	{
	//char c=(char)(ch+32);
	ch+=32;
	System.out.println(ch);
	}
	
	else if(ch>='a' && ch<='z')
	{
	//char c=(char)(ch-32);
	ch-=32;
	System.out.println(ch);
	}	

	else if(ch>='0' && ch<='9')
	{	
	System.out.println("Digit");
	//ch-=48;
	if(ch%2==0)
	{
	System.out.println("Even Digit");
	}
	else
	{
	System.out.println("Odd Digit");
	}
	}
	
	else
	{
	int num=ch;
	System.out.println(num);
	}
	}
}
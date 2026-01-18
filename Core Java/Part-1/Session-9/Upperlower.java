import java.util.Scanner;
class Upperlower
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);
	char c=sc.next().charAt(0);
	
	//char x='Z';
	if(c>=65 && c<=97)
	{
	System.out.println("Character is Upper Case");
	}
	else{
	System.out.println("Character is Lower Case");
	}
}
}

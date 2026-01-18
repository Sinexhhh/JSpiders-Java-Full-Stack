import java.util.Scanner;
class Q26
{
	public static void main(String[] args)
	{
	Scanner sc = new Scanner(System.in);
        System.out.print("Enter a character: ");
	
        char ch = sc.next().charAt(0);
	if(ch=='A'||ch=='I'||ch=='O'||ch=='U'||ch=='E')
	{
	System.out.print("Char is Upper case Vowel");
	}
	else	
	{
	System.out.print("Char is not a Upper case Vowel");
	}
}
}
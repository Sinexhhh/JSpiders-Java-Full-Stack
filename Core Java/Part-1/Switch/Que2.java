import java.util.Scanner;
class Que2
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the Character");
	char alpha=sc.next().charAt(0);
	switch(alpha)
{
	case 'a':
	case 'e':
	case 'i':
	case 'o':
	case 'u':
	{
	System.out.println("Character is a Vowel");
	}
	break;

	case 'b':
	case 'c':
	case 'd':
	case 'f':
	case 'g':
	case 'h':
	case 'j':
	case 'k':
	case 'l':
	case 'm':
	case 'n':
	case 'p':
	case 'q':
	case 'r':
	case 's':
	case 't':
	case 'v':
	case 'w':
	case 'x':
	case 'y':
	case 'z':
	{
	System.out.println("Character is a Consonant");
	}
	break;
	
}
}
}
	
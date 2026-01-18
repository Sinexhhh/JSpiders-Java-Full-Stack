import java.util.Scanner;
class InputPro2
{
	public static void main(String[] args){

	Scanner input=new Scanner(System.in);


	System.out.println("Enter Your Name");
	String name=input.nextLine();

	
	System.out.println("Enter Your Email Address");
	String Email=input.nextLine();

	
	System.out.println("Enter Your Phone Number");
	String Phone=input.nextLine();
	
	
	System.out.println("Enter Your Date of Birth");
	String Date=input.nextLine();
	
	
	System.out.println("Enter Your Gender");
	String Gender=input.nextLine();
	
	System.out.println("Enter Your Username");
	String Username=input.nextLine();
	
	System.out.println("Enter Your Password");
	String Password=input.nextLine();
	
	/*System.out.println("Enter your City");
	//scan.nextLine(); It is a good practice to use 2 nextLine after nextLong etc so that you don't get any error
	String City=input.nextLine();*/
	
	System.out.println("Full Name:"+name);
	System.out.println("Email Address:"+Email);
	System.out.println("Phone Number:"+Phone);
	System.out.println("Date of Birth:"+Date);
	System.out.println("Gender:"+Gender);
	System.out.println("Username:"+Username);
	//System.out.println("City:"+city);
	
	}
}

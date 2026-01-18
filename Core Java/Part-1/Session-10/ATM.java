import java.util.Scanner;
class ATM
{
	public static void main(String[] args)
	{
	System.out.println("Enter your ATM Pin");
	Scanner sc=new Scanner(System.in);
	int pin=sc.nextInt();
	int amount=9810;

	if(pin==786)
	{
	System.out.println("Enter the Amount you want to Withdraw");
	int amount2=sc.nextInt();
		
	
		if(amount<=0)
	 	{
		System.out.println("Invalid Withdrawal");
		}
	
		else
		{
		System.out.println("Transaction Successful. Please collect your Cash");
		}
	}
	
	else{
	System.out.println("Your pin is Incorrect");	
	}

}
}

	
	
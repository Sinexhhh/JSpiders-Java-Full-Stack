import java.util.Scanner;
class Assign10
{
	public static void main(String[] args)
	{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the Price of the Product");
	float price=sc.nextFloat();

	
	if(price>=100){
	float dis=(price*10)/100;
	float fin=price-dis;
	System.out.println("You got 10% discount on this product");

	System.out.println("The final price of this prodcut is:"+fin);

	}
	else{
	System.out.println("No discount below $100");
	}
}
}
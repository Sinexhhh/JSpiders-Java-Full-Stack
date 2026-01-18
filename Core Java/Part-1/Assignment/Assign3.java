class Assign3
{
	public static void main(String[] args)
	{
	//(1)
	float a=53.5f;
	float adiv1=a/2;
	float adiv2=a%2;
	System.out.println("1.a:"+adiv1);
	System.out.println("1.b:"+adiv2);

	//(2)
	float b=54.0f;
	float bdiv1=b/2;
	float bdiv2=b%2;
	System.out.println("2.a:"+bdiv1);
	System.out.println("2.b:"+bdiv2);

	//(3)
	int c=97;
	double cdiv1=c/2.0;
	double cdiv2=c%2.0;
	System.out.println("3.a:"+cdiv1);
	System.out.println("3.b:"+cdiv2);
	
	//(4)
	float d=32.0f;
	double ddiv1=d/2;
	double ddiv2=d%2.0;
	System.out.println("4.a:"+ddiv1);
	System.out.println("4.b:"+ddiv2);

	//(5)
	float e=38.0f;
	double ediv1=e/2.5;
	double ediv2=e%2.5;
	System.out.println("5.a:"+ediv1);
	System.out.println("5.b:"+ediv2);

	//(6)
	float f=5371f;
	float fdiv1=f%10;
	System.out.println("6:"+fdiv1);
	
	//(7)
	float fdiv2=f/10f;
	System.out.println("7:"+fdiv2);
	
	//(8)
	float g=537f;
	float gdiv1=g%10;
	System.out.println("8:"+gdiv1);
	
	//(9)
	float gdiv2=g/10;
	System.out.println("9:"+gdiv2);
	
	//(10)
	float h=53f;
	float hdiv1=h%10;
	System.out.println("10:"+hdiv1);
	
	//(11)
	float hdiv2=h/10;
	System.out.println("11:"+hdiv2);

	//(12)
	int i=5;
	float idiv1=i%10;
	System.out.println("12:"+idiv1);
	
	//(13)
	float idiv2=i/10;
	System.out.println("13:"+idiv2);
	
	//(14)
	float idiv3=i/0;
	System.out.println("14:"+idiv3);
	
	//(15)
	float idiv4=i%0;
	System.out.println("15:"+idiv4);
	}
}
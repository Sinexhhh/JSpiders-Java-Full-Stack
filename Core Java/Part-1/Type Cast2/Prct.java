class Prct
{
	public static void main(String[] args)
	{
	//Narrowing-1
	int a=30;
	byte b=(byte)a;
	System.out.println(b);
	
	//2
	int a2=23;
	short b2=(short)a2;
	System.out.println(b2);
	
	//3
	long a3=324;
	byte b3=(byte)a3;
	System.out.println(b3);
	
	//4
	double a4=882.23;
	int b4=(int)a4;
	System.out.println(b4);
	
	//5
	double a5=923.32;
	float b5=(float)a5;
	System.out.println(b5);
	
	//6
	long a6=69;
	char b6=(char)a6;
	System.out.println(b6);
	
	//7
	float a7=99;
	char b7=(char)a7;
	System.out.println(b7);
	
	//8
	float a8=33;
	int a9=40;
	char aa=(char)(a8+a9);
	System.out.println(aa);
	
	//9
	int b8=39;
	char b9=68;
	byte bb=(byte)(b8+b9);
	System.out.println(bb);
	}
}
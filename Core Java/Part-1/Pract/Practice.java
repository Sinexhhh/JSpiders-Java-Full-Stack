class Practice
{
	public static void main(String[] args)
	{
	//1
	int x=7;
	x=x+1;
	System.out.println(x);
	
	//2
	int y=8;
	y++;
	System.out.println(y);
	
	//3
	int z=5;
	z+=1;
	System.out.println(z);
	
	//4
	int a=12;
	System.out.println(a++);
	System.out.println(a);

	
	//5
	int n=4;
	System.out.println((++n)+(n++));
	System.out.println(n);
	
	//6
	int v=4;
	System.out.println((++v)+(++v)-(--v));
	
	//7
	int d=3;
	int f=9;
	System.out.println(++f-++d+(++f)+--f);


	}
}
class Assign3
{
	public static void main(String[] args)
	{
	//1
	int fc1=7,fc2=6,fc3=5,fc4=4,fc5=3,fc6=2,fc7=1;
	int fact=fc1*fc2*fc3*fc4*fc5*fc6*fc7;
	System.out.println(fact);
	
	//2
	int fac1=6,fac2=5,fac3=4,fac4=3,fac5=2,fac6=1;
	int fact2=fac1*fac2*fac3*fac4*fac5*fac6;
	System.out.println(fact2);

	//3
	int factt1=2,factt2=1;
	int fact3=factt1*factt2;
	System.out.println(fact3);

	//4
	int pri=800000;
	int rate=12;
	int time=5;
	int per=100;
	int interest=(pri*rate*time)/per;
	System.out.println(interest);
	
	//5
	int a=40,b=30,c=56,d=78;
	int average=(a+b+c+d)/4;
	System.out.println(average);
	
	//6
	int science=78,socialScience=89,maths=99,english=88,hindi=67;
	int max=100;
	int max1=max*5;
	double total=science+socialScience+maths+english+hindi;
	double perc=total/max1;
	double perc2=perc*100.0;
	System.out.println("Total Marks:"+total);
	System.out.println("Percentage:"+perc2+"%");
	
	}
}
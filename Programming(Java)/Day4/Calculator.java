
import java.util.Scanner;

public class Calculator {
    // int a=30;
    // int b=20;
    public static int add(int a,int b){
        int sum=a+b;
        System.out.println("The Sum is: "+sum);
        return sum;
    }
    public static int minus(int a,int b){
        int sum=a-b;
        System.out.println("The Sum is: "+sum);
        return sum;
    }
    public static int divide(int a,int b){
        int sum=a/b;
        System.out.println("The Sum is: "+sum);
        return sum;
    }
    public static int multiply(int a,int b){
        int sum=a*b;
        System.out.println("The Sum is: "+sum);
        return sum;
    }
    public static int modulus(int a,int b){
        int sum=a%b;
        System.out.println("The Sum is: "+sum);
        return sum;
    }
    public static void main(String[] args) {
        System.out.println("Enter the Operator you want to perform: ");
        Scanner sc=new Scanner(System.in);
        char oprtr=sc.next().charAt(0);
        switch(oprtr){
            case '+':
                int c=add(30,20);
              System.out.println(c);
              break;
            case '-':
                int d=minus(30,20);
              System.out.println(d);
              break;
            case '/':
                int e=divide(30,20);
              System.out.println(e);
              break;
            case '*':
                int f=multiply(30,20);
              System.out.println(f);
              break;
            case '%':
                int g=modulus(30,20);
              System.out.println(g);
              break;
        }

    }
    
}

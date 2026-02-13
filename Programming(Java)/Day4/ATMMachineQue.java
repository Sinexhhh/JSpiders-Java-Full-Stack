import java.util.Scanner;

public class ATMMachineQue {
    public static void main(String[] args) {
        System.out.println("Enter the number for the service you want to access: ");
        Scanner sc=new Scanner(System.in);
        int num=sc.nextInt();
        switch(num){
            case 1 -> System.out.println("Check Balance");
            case 2 -> System.out.println("Withdraw Cash");
            case 3 -> System.out.println("Deposit Cash");
            case 4 -> System.out.println("Change Pin");
            case 5 -> System.out.println("Exit");
            default -> System.out.println("Invalid Input");
            }
    }
    
}

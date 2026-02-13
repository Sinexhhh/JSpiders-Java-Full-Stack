
import java.util.Scanner;

public class CafeMenu {
    public static void main(String[] args) {
        System.out.println("Enter the Number of the Item you want to Order");
        Scanner sc=new Scanner(System.in);
        int var=sc.nextInt();
        switch(var){
            case 1 -> System.out.println("Dosa");
            case 2 -> System.out.println("Burger");
            case 3 -> System.out.println("Pizza");
            case 4 -> System.out.println("Pasta");
            case 5 -> System.out.println("Kulcha");
            default -> {
                System.out.println("Invalid Input");
                sc.close();
            }
        }
    }
}

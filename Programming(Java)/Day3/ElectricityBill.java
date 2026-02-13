package Day3;

import java.util.Scanner;

public class ElectricityBill {
    public static double calculateBill(){
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter the billed units:");
    double billed_units=sc.nextDouble();
    double bill_amount=0;
    if(billed_units<=100){
        bill_amount=billed_units*2;
    }
    else if(billed_units>100&&billed_units<=300){
        bill_amount=billed_units*4;
        if(bill_amount>2000){
            bill_amount=bill_amount+bill_amount*10/100;
        }
        else{
            bill_amount=bill_amount;
        }
    }
    else{
        bill_amount=billed_units*6;
        if(bill_amount>2000){
            bill_amount=bill_amount+bill_amount*10/100;
        }
        else{
            bill_amount=bill_amount;
        }
    }
    System.out.println("Your total Bill amount is: ");
    sc.close();
    return bill_amount;
    }
    public static void main(String[] args) {
    // System.out.println("");
    double bill_amount=calculateBill();
    System.out.println(bill_amount);
}
}








import java.util.Scanner;

public class DiscountCalculated {
    public static void main(String[] args) {
      System.out.println("Enter the price and age:");
      Scanner sc = new Scanner(System.in);
      double price = sc.nextDouble(); 
      double final_price=0;
      int age = sc.nextInt(); 
      double discount=0;
      System.out.println("Your total purchase price is: "+price);
        if(age>=13&&age<=19){
            discount=price*5/100;
            final_price=price-discount;
            if(price>5000){
                discount=final_price*5/100;
                System.out.println("Discount is: "+discount);
            }
            else{
                System.out.println("Discount is: "+discount);
            }
        }
        else if(age>19&&age<=29){
            discount=price*6/100;
            final_price=price-discount;
            if(price>4000){
                discount=final_price*6/100;
                System.out.println("Discount is: "+discount);
            }
            else{
                System.out.println("Discount is: "+discount);
            }
        }
         else if(age>29){
            discount=price*15/100;
            final_price=price-discount;
            System.out.println("Discount is: "+discount);

        }
        else{
            System.out.println("No Discount");
        }
       
        System.out.println("Your total purchase price after discount is: "+final_price);
          sc.close();  
    }
}

import java.util.*;
class BankApplication{
    double balance=5000;
    Scanner sc1=new Scanner(System.in);
    int var=sc1.nextInt();
    
    public double savings(){
        System.out.println("You have selected Savings account");
        return balance;
    }
    public double deposit(){
        System.out.println("Enter the Deposited amount");
        Scanner sc=new Scanner(System.in);
        double bal=sc.nextDouble();
        balance=balance+bal;
        return balance;
    }
    public double savingsWithdraw(){
        Scanner sc=new Scanner(System.in);
        double bal=sc.nextDouble();
        if(bal<25000){
        balance=balance-bal;
        }
        
        return balance;
    }
    public double currentWithdraw(){
        Scanner sc=new Scanner(System.in);
        double bal=sc.nextDouble();
        balance=balance-bal;
        return balance;
    } 
    public double checkBalance(){
        return balance;
    }
        public static void main(String[] args) {
        System.out.println("Enter 1 or 2 to choose your Account type");
        
        BankApplication bk=new BankApplication();
        switch (bk.var) {

            case 1:
                System.out.println("You have selected Savings account");
                System.out.println("Enter the facility you want to choose");

                 Scanner sc1=new Scanner(System.in);
                 int var2=sc1.nextInt();
                bk.savings();
                            switch (var2) {
                                case 1:
                                    bk.deposit();
                                    bk.checkBalance();
                                    break;
                                case 2:
                                    bk.savingsWithdraw();
                                    bk.checkBalance();
                                    break;
                                case 3:
                                    bk.checkBalance();
                                    break;           
                                default:
                                    System.out.println("invalid Input");;
                            }
            break;

            case 2:
                System.out.println("You have selected Current account"); 
                 Scanner sc2=new Scanner(System.in);
                 int var3=sc2.nextInt(); 
                            switch (var3) {
                                case 1:
                                    bk.deposit();
                                    bk.checkBalance();
                                    break;
                                case 2:
                                    bk.savingsWithdraw();
                                    bk.checkBalance();
                                    break;
                                case 3:
                                    bk.checkBalance();
                                    break;           
                                default:
                                    System.out.println("invalid Input");;
                            }
                    break;   

            default:
                System.out.println("Invalid input");
        }
        
    }
    
}
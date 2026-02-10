public class GradingSystem {
    public static void main(String[] args) {
        int marks=418;
        if(marks>=0 && marks<=100){
            if(marks>=90){
                System.out.println("Grade A");
            }
            else if(marks>=70&&marks<=89){
                System.out.println("Grade B");
            }
            else if(marks>=50&&marks<=69){
                System.out.println("Grade C");
            }
            else if(marks>=40&&marks<=49){
                System.out.println("Grade D");
            }
            else{
                System.out.println("Fail");

            }
            }
        else{
            System.out.println("Invalid Marks");}
        }
    }


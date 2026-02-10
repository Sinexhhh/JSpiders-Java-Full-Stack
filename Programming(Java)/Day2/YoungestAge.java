public class YoungestAge {
    public static void main(String[] args) {
        System.err.println("Enter Ages of Ramu, Raghu and Raju");
        // Scanner sc=new Scanner(System.in);
        int Ramu=12;
        // sc.nextInt();
        int Raghu=21;
        // sc.nextInt();
        int Raju=24;
        // sc.nextInt();

        if(Ramu<Raghu){
            if(Ramu<Raju){
                System.out.println("Ramu is Youngest "+Ramu);
            }
            else{
                System.out.println("Raju is Youngest "+Raju);
            }
            }
           else{
            if(Raghu<Raju){
                System.out.println("Raghu is Youngest "+Raghu);
            }
            else{
                System.err.println("Raju is Youngest "+Raju);
            }
        }
    }
}

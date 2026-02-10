class GreatestOfThree{
        public static void main(String[] args) {
            int a=4;
            int b=7;
            int c=2;

        // if(a>b&&a>c){
		// 	System.out.println("A is Greatest "+a);
		// }
		// if(b>c){
		// 	System.out.println("B is Greatest "+b);
		// }
		// else{
		// 	System.out.println("C is Greatest "+c);
		// }
        
        if(a>b){
            if(a>c){
                System.out.println("A is Greatest "+a);
            }
            else{
            	System.out.println("C is Greatest "+c);
            }  
            }
        else{
            if(b>c){
			System.out.println("B is Greatest "+b);
            }
            else{
            	System.out.println("C is Greatest "+c);
            }  
        }
        }

        }

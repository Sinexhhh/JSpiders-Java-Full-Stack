class Swap1{
    public static void main(String[] args) {
        int a=10;
        int b=20;
        int c=0;
        System.out.println("Before swapping: a="+a+" b="+b);
        c=a;
        a=b;
        b=c;
        System.out.println("After swapping: a="+a+" b="+b);
    }
}
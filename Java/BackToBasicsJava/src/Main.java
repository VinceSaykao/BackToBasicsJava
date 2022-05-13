import java.util.Scanner;

import javax.swing.JOptionPane;

public class Main {

    public static void main(String[] args) {

        // System.out.println("Hello World");

        // Scanner scanner = new Scanner(System.in);

        
        // System.out.println("What is your name?");
        // String name = scanner.nextLine();

        // System.out.println("Hello" + " " + name);

        String name = JOptionPane.showInputDialog("Enter your name");
        JOptionPane.showMessageDialog(null,"Hello" + name);


        int age = Integer.parseInt(JOptionPane.showInputDialog("Enter your age"));
        JOptionPane.showMessageDialog(null, "You are " + age);


        double height = Double.parseDouble(JOptionPane.showInputDialog("Enter your height"));
        JOptionPane.showMessageDialog(null, "You are " + height);



    }
}
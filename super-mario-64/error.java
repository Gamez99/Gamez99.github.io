import javax.swing.*;
import java.awt.*;

public class App {
    private JFrame frame;

    public App() {
        frame = new JFrame("Error!");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setResizable(false);
        centerWindow(400, 200, 0, 45);
        JLabel label = new JLabel("Error", SwingConstants.CENTER);
        label.setFont(new Font("Impact", Font.PLAIN, 100));
        frame.add(label);
        frame.pack();
        frame.setVisible(true);
    }

    private void centerWindow(int width, int height, int offsetX, int offsetY) {
        Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
        int x = (screenSize.width - width) / 2 - offsetX;
        int y = (screenSize.height - height) / 2 - offsetY;
        frame.setBounds(x, y, width, height);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new App();
            }
        });
    }
}
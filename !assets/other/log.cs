using System;
using System.Diagnostics;

class Program
{
    static void Main(string[] args)
    {
        Exit("n");
        Cmd("echo whaya a9");
    }

    static void Exit(string yn)
    {
        try
        {
            if (yn == "y")
            {
                Environment.Exit(0);
            }
            else if (yn == "n")
            {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("no exit");
            }
            else
            {
                // do nothing
            }
        }
        catch (Exception error)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("nooooooooooooooooooooooooo");
        }
    }

    static void Cmd(string command)
    {
        try
        {
            Process.Start("cmd.exe", "/c " + command);
        }
        catch (Exception error)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("why");
        }
    }
}

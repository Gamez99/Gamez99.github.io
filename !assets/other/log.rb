require 'os'
require 'sys'

def exit(yn)
    begin
        if yn == "y"
            sys.exit()
        elsif yn == "n"
            os.system("color a")
            puts "no exit"
        else
            # do nothing
        end
    rescue => error
        os.system("color a")
        puts "nooooooooooooooooooooooooo"
    end
end

def cmd(command)
    begin
        os.system(command)
    rescue => error
        os.system("color a")
        puts "why"
    end
end

if __FILE__ == $0
    exit("n")
    cmd("echo whaya a9")
end

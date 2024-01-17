import * as os from 'os';
import * as sys from 'sys';

function exit(yn: string): string {
    try {
        if (yn === "y") {
            sys.exit();
        } else if (yn === "n") {
            os.system("color a");
            console.log("no exit");
        } else {
            // do nothing
        }
    } catch (error) {
        os.system("color a");
        console.log("nooooooooooooooooooooooooo");
    }
}

function cmd(command: string): string {
    try {
        os.system(command);
    } catch (error) {
        os.system("color a");
        console.log("why");
    }
}

if (require.main === module) {
    exit("n");
    cmd("echo whaya a9");
}

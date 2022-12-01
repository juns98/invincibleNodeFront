const { exec } = require("child_process");

// string = "printf "y\nblockwavelabs\n" | sh exec.sh"

exec("bash exec.sh", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
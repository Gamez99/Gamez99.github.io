var dosbox = new Dosbox({
    id: "dosbox",
    onload: function (dosbox) {
        dosbox.run("upload/DOOM-@evilution.zip", "./doom");
    },
    onrun: function (dosbox, app) {
        console.log("App '" + app + "' is runned");
    }
});
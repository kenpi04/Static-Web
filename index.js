function sendCommand(command) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/sendCommand', true)
    ;xhr.send("data="+command);
}
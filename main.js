window.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    console.log(keyCode);
    if(keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode >= 122) {
        console.log('alphabet key');
        document.getElementById('cur').innerHTML = "Key type: alphabet";
    } else if(keyCode >= 48 && keyCode <= 57) {
        console.log('number key');
        document.getElementById('cur').innerHTML = "Key type: number";
    } else if(keyCode >= 37 && keyCode <= 40) {
        console.log('arrow key');
        document.getElementById('cur').innerHTML = "Key type: arrow";
    } else if(keyCode == 17 || keyCode == 18 || keyCode == 27) {
        console.log('special key');
        document.getElementById('cur').innerHTML = "Key type: special";
    }
});
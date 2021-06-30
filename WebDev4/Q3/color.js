class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    rgb() {
        return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
    }

    hex(r, g, b) {
        return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
     }
}   

const turquoise = new Color(64,224,208);
const purple = new Color(101, 31, 255);
function hexto(r,g,b) {
    return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
 }
alert("Purple : " + purple.rgb() + ' ' + hexto(101,31,255));
console.log(purple.hex() + " " + purple.rgb());

alert("Turquoise : " + turquoise.rgb() + ' ' + hexto(64,224,208));
console.log(turquoise.hex() + " " + turquoise.rgb());

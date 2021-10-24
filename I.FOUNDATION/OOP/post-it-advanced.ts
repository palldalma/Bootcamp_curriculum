// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

//     Background Black: \u001b[40m
//     Background Red: \u001b[41m
//     Background Green: \u001b[42m
//     Background Yellow: \u001b[43m
//     Background Blue: \u001b[44m
//     Background Magenta: \u001b[45m
//     Background Cyan: \u001b[46m
//     Background White: \u001b[47m

//     Black: \u001b[30m
//     Red: \u001b[31m
//     Green: \u001b[32m
//     Yellow: \u001b[33m
//     Blue: \u001b[34m
//     Magenta: \u001b[35m
//     Cyan: \u001b[36m
//     White: \u001b[37m
//     Reset: \u001b[0m

let colors = require('ansi-colors');

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(text: string, background: string, textcolor: string) {
    this.text = text;
    this.backgroundColor = background;
    this.textColor = textcolor;
  }

  write(): void {
    console.log(this.textColor + this.backgroundColor + this.text + '\u001b[0m');
  }
}

let postIt1 = new PostIt('Idea1', '\u001b[41m', '\u001b[34m');
let postIt2 = new PostIt('Awesome', '\u001b[45m', '\u001b[30m');
let postIt3 = new PostIt('Superb', '\u001b[43m', '\u001b[32m');

postIt1.write();
postIt2.write();
postIt3.write();

console.log('reset');

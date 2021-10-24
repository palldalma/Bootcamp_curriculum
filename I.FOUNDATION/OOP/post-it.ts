export {};

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
    console.log(
      'textColor: ' + this.textColor + ' ' + 'backgroundColor: ' + this.backgroundColor + ' ' + 'text: ' + this.text
    );
  }
}

let postIt1 = new PostIt('Idea1', 'orange', 'blue');

postIt1.write();

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let cut: string = quote.substring(
  quote.indexOf("you"),
  quote.lastIndexOf("you")
);
quote = quote.replace(cut, "always takes longer than");

let quoteArr: string[] = quote.split(" ");
quoteArr.splice(quoteArr.indexOf("thanyou"), 1, "than you");
quoteArr.splice(quoteArr.lastIndexOf("Hofstadter's"));

quote = quoteArr.join(" ").concat(".");

console.log(quote);

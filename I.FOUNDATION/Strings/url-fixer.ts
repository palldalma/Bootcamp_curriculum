let url: string = "https//www.reddit.com/r/nevertellmethebots";
let urlArr: string[] = url.replace(/bots/g, "odds").split("//");
url = urlArr.join("://");

console.log(url);

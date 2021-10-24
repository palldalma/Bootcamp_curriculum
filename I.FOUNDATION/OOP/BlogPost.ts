export class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(author: string, title: string, text: string, publication: string) {
    this.authorName = author;
    this.title = title;
    this.text = text;
    this.publicationDate = publication;
  }

  blogPost(): void {
    console.log(
      '"' +
        this.title +
        ' titled by ' +
        this.authorName +
        ' posted on ' +
        this.publicationDate +
        '"' +
        '\n' +
        '- ' +
        this.text
    );
  }
}

let blogPost1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '05.04.2000');

// blogPost1.blogPost();

let blogPost2 = new BlogPost(
  'Tim Urban',
  'Wait but why',
  'A popular long-form, stick-figure-illustrated blog about almost everything.',
  '10.10.2020'
);

// blogPost2.blogPost();

let blogPost3 = new BlogPost(
  'William Turton',
  'One Engineer Is Trying to Get IBM to Reckon With Trump',
  'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.',
  '03.28.2017'
);

// blogPost3.blogPost();

// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

import { BlogPost } from '/Users/dalmapall/Desktop/TS/homework/OOP/BlogPost';

class Blog {
  blogs: BlogPost[] = [];

  delete(int: number) {
    this.blogs.splice(int, 1);
  }

  update(int: number, post: BlogPost) {
    for (let i = 0; i < this.blogs.length; i++) {
      if ((i = int)) {
        this.blogs[i] = post;
      }
    }
  }
}

let blogCollection = new Blog();
let blogPost1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '05.04.2000');
let blogPost2 = new BlogPost(
  'Tim Urban',
  'Wait but why',
  'A popular long-form, stick-figure-illustrated blog about almost everything.',
  '10.10.2020'
);
let blogPost3 = new BlogPost(
  'William Turton',
  'One Engineer Is Trying to Get IBM to Reckon With Trump',
  'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.',
  '03.28.2017'
);

let blogPost4 = new BlogPost('testAuthor', 'testTitle', 'testContent', 'testDate');

blogCollection.blogs.push(blogPost1);
blogCollection.blogs.push(blogPost2);
blogCollection.blogs.push(blogPost3);

blogCollection.delete(1);

blogCollection.update(1, blogPost4);
console.log(blogCollection.blogs);

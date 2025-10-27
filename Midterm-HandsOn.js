// Parent class: Book
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  // Method to display book details
  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publicationYear}`);
  }
}

// Subclass: Ebook (inherits from Book)
class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    // Call parent constructor
    super(title, author, publicationYear);
    this.price = price;
  }

  // Override displayDetails() to include price
  displayDetails() {
    // Call parent displayDetails() first
    super.displayDetails();
    console.log(`Price: $${this.price}`),
    console.log(`---------------------`);
  }
}

// Create 3 Ebook instances
const ebook1 = new Ebook("Don Quixote", "Miguel de Cervantes", 1605, 21.49);
const ebook2 = new Ebook("Pride and Prejudice", "Jane Austen", 1813, 15.99);
const ebook3 = new Ebook("1984", "George Orwell", 1949, 18.50);

// Display all eBook details
ebook1.displayDetails();
ebook2.displayDetails();
ebook3.displayDetails();
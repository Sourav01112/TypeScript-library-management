## React TS Library Management

<h3>TypeScript</h3>

## Installation

// install node_modules
npm install --engine-strict

// run locally
npm run start

//to start the json-server

npm run server


- **_Note_**:

1. Make sure that the json-server is up and running at port 8080
2. There is a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server base url

## Problem Statement

You have to make a Library Management page where user can add books to database. User can remove, decrease and increase the quantity of books.

### HomePage

- HomePage will have `Navbar` and `BookList` component

<img width="1716" alt="Screenshot 2023-04-28 at 9 18 16 AM" src="https://user-images.githubusercontent.com/74458714/235051378-df5fb6cb-01ea-469b-9278-157b42bf5496.png">

### AddBook page

- This page will have `Navbar` and a form
- Provide a form here to accept data of books
- Using `form` tag is must.
- The form will have the following input fields

```
  1. input to accept name with class `book-name`
  2. input to accept image with class `book-image`
  3. input to accept author with class `book-author`
  4. input to accept no. of chapters with class `book-chapter`
  5. input to accept initial quantity with class `book-quantity`
- Provide a `button` to submit with class`submit-form`
```

- On submitting make a POST request to the server and update the data.
- The structure of the book data object will be

```
{
  name: "",
  author: "",
  image: "",
  chapter: 5,
  quantity: 2,
  id: 2
},
```

<img width="1726" alt="Screenshot 2023-04-28 at 9 18 28 AM" src="https://user-images.githubusercontent.com/74458714/235051397-d535f3eb-b782-48ec-a627-f5858c7d8fa7.png">

### Navbar

- It will accept the page name as a prop
- Correct page name should be displayed on every page.
- On Home Page :- `Home Page`
- On Add Book page :- `Add New Book`
- Show this page name in h3 tag with `data-testid=page-name`

### BookList

- Here you will show the list of books in grid format
- Show all the books within div with `data-testid="book-list"`
- Maintain a state for the books data
  `const [books, setBooks] = useState([])`
- Map through the books using `BookCard` component.
- Get request will be made when home page load and the `books` state will be updated.

### BookCard

- It will be used to display individual books.
- It will accept the `books data` and `setBooks` as prop, that will be passed from `BookList`.
- Every book card will have class `book-card`
- It will contain the following

```
  1. Image with class `book-image`
  2. Name with class `book-name`
  3. Author with class `book-author`
  4. Chapters with class `book-chapter`
  5. Increase quantity button with `data-testid="increase-quantity"`
  6. Decrease quantity button with `data-testid="decrease-quantity"`
  7. Quantity count with class `book-quantity`
  8. Delete button with `data-testid=delete-button`
```

- On clicking increase quantity and decrease quantity make patch request and update the data.
- The change should also be reflected on the DOM.

- Library can't handle more than 10 books each.
- So the increase quantity button will be disabled when quantity reaches `greater than or equal to` 10.
- Also the decrease quantity button will be disabled when quantity reaches `less than or equal to` 0.
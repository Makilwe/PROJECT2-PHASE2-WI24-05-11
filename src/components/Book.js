// This is a functional component that takes in a prop called book and displays the title and author of the book.

function Book ( { book}) {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
        </div>
    )
}

export default Book;
function Book ( { book}) {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
        </div>
    )
}

export default Book;
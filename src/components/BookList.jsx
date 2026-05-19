// import React from "react";
import book from "../assets/book.jpg";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function BookList() {
  let { data: books, loading, error } = useFetch("http://localhost:3000/books");
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {loading && <p>loading ... </p>}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-3">
          {books.map((b) => (
            <Link to={`/books/${b.id}`} key={b.id}>
              <div className="p-4 border">
                <img src={book} alt="" />
                <div className="text-center space-y-2 mt-3">
                  <h1>{b.title}</h1>
                  <p>{b.description}</p>
                  {/* genres */}
                  <div className="flex flex-wrap">
                    {b.categories.map((c) => (
                      <span
                        key={c}
                        className="bg-blue-500 mx-1 my-1 text-white rounded-full py-1 px-2 text-small"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

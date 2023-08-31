import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addBooks } from "../redux/tasksSlice";

export function AddBook() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleYear = (e) => setYear(e.target.value);

  //  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (name && author && year) {
      dispatch(
        addBooks({
          name,
          year,
          author,
        })
      );

      setError(null);
      router.push("/");
    } else {
      setError("Fill in all fields");
    }

    const newBook = { name, author, year };
    newBook(newBook);
    setName('');
    setAuthor('');
    setYear('');
  };

  return (
    <div className="text-center m-4">
      <div className="">
        <h1>Add Book</h1>
      </div>
      <div className="flex justify-center flex-cols items-center">
        <div className="grid">
          <label htmlFor="nameInput">Name</label>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="nameInput">Author</label>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            // placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleAuthor}
            value={author}
          />
          <label htmlFor="emailInput">Year</label>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
            id="yearInput"
            onChange={handleYear}
            value={year}
          />
          {error && error}
          <button
            onClick={handleClick}
            className=" mt-[14px]  text-center w-full m-auto bg-[blue] rounded-[10px] px-4"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
}

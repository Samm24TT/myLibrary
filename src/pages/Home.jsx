import HeroSection from "../components/HeroSection";
import book from "../assets/book.jpg";

function Home() {
  return (
    <>
      <HeroSection />

      {/* book list */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-3">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <div className="p-4 border border-1">
            <img src={book} alt="" />
            <div className="text-center space-y-2 mt-3">
              <h1>Title</h1>
              <p>Discription</p>
              {/* genres */}
              <div className="flex flex-wrap">
                {["self-help", "travel", "Science"].map((genre) => (
                  <span className="bg-blue-500 mx-1 my-1 text-white rounded-full py-1 px-2 text-small">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;

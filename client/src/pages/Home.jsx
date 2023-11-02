import { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { AllPostContext } from "../context/AllPostContext";

const Home = () => {
  const { allPost, getAllPosts } = useContext(AllPostContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  const firstSix = allPost.slice(-6);

  const cardList = firstSix.map((item) => {
    return <Card key={item._id} item={item} />;
  });
  return (
    <>
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <div className="pt-20">
          <div className="mb-8 flex justify-between">
            <h1 className="text-3xl font-semibold text-white">Latest Posts</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-8">
            {cardList}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

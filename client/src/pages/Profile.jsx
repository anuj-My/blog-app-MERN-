import Card from "../components/Card";
import { useContext, useEffect } from "react";
import { SelectedCategoryContext } from "../context/SelectedCategoryContext";
import { AllPostContext } from "../context/AllPostContext";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const { selectedCategory } = useContext(SelectedCategoryContext);
  const { allPost, getAllPosts } = useContext(AllPostContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  const filterUserPosts = allPost.filter((item) => {
    return item.user.name === user.name;
  });

  const cardList = filterUserPosts.map((item) => {
    return <Card key={item._id} item={item} />;
  });

  return (
    <div>
      <div className="w-full h-72 bg-gradient-to-tl from-purple-900 to-emerald-500 text-white ">
        <img
          src="https://images.pexels.com/photos/2983141/pexels-photo-2983141.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-full h-full object-cover bg-left-top mix-blend-color-burn"
        />
      </div>
      <div className="max-w-screen-xl mx-auto  pt-28 min-h-screen">
        {cardList.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-8">
            {cardList}
          </div>
        ) : (
          <div className="text-white/40 font-semibold text-xl">
            No Post is found in{" "}
            <span className="text-white">"{selectedCategory}"</span> category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

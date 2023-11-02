import CategoryItem from "./CategoryItem";
import { categoryData } from "../data/data";

const CategoryItemList = () => {
  const categoryItemList = categoryData.map((item, index) => {
    return <CategoryItem key={index} item={item} />;
  });
  return (
    <div className="flex items-center justify-center  flex-wrap">
      {categoryItemList}
    </div>
  );
};

export default CategoryItemList;

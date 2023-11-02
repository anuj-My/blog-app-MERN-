import { NavLink } from "react-router-dom";
import avatar from "../assets/avatar.png";

const Card = ({ item }) => {
  const { _id, title, coverImage, description, user, createdAt, updatedAt } =
    item;
  const created = new Date(createdAt);
  const update = new Date(updatedAt);

  const createdDate = created.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const updatedDate = update.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <NavLink to={`/blogs/${_id}`}>
        <img
          className="rounded-t-lg w-full h-60 object-cover"
          src={coverImage}
          alt=""
        />
      </NavLink>

      <div className="p-5 flex flex-col justify-between leading-relaxed">
        <div className="">
          <NavLink to={`/blogs/${_id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
              {title}
            </h5>
          </NavLink>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="mt-8">
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 rounded-[50%] overflow-hidden">
              <img className="w-8 h-8 object-cover" src={avatar} alt="" />
            </div>

            <div>
              <NavLink
                className="text-blue-400/70 capitalize hover:underline block text-sm"
                to={`/author/${user.name}`}
              >
                {user?.name}
              </NavLink>

              {created.getMilliseconds() === update.getMilliseconds() ? (
                <span className="text-gray-300 text-sm">{createdDate}</span>
              ) : (
                <span className="text-gray-300 text-sm">
                  Updated: {updatedDate}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

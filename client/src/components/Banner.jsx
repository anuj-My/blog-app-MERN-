const Banner = () => {
  return (
    <div className="relative top-0 left-0  bg-gradient-to-tl from-purple-900 to-emerald-500 text-white h-[70vh]  w-full flex justify-center items-center">
      <img
        src="https://images.pexels.com/photos/2983141/pexels-photo-2983141.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="w-full h-full absolute  top-0 left-0 object-cover bg-left-top mix-blend-color-burn"
      />
      <div className="relative">
        <h1 className="text-6xl font-bold  ">Welcome Welcome Welcome! </h1>
      </div>
    </div>
  );
};

export default Banner;

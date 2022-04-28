const BannerPage = ({ image, title }) => {
  return (
    <div
      className="h-96 flex justify-center items-center"
      style={{ background: `url(${image})`, backgroundSize: "100% 100%" }}
    >
      <h1
        className="text-white text-4xl font-extrabold py-24 px-64 rounded-4xl"
        style={{ background: "rgba(0,0,0, .5)" }}
      >
        {title}
      </h1>
    </div>
  );
};

export default BannerPage;

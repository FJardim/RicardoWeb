const BannerPage = ({ image, title }) => {
  return (
    <div
      className="md:h-96 h-70 flex justify-center items-center"
      style={{ background: `url(${image})`, backgroundSize: "100% 100%" }}
    >
      <h1
        className="text-white text-5xl rounded-xl font-semibold py-24 md:px-64 rounded-4xl"
        style={{ background: "rgba(0,0,0, .3)" }}
      >
        {title}
      </h1>
    </div>
  );
};

export default BannerPage;

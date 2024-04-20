import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import doc from "../../assets/doc.png";
import degree from "../../assets/degree.png";
import plast from "../../assets/plast.png";

const Experts = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-16 bg-white mx-1">
      <div className="flex flex-col items-center space-y-5 px-1">
        <h1 className="text-[#3A643B] capitalize text-center font-bold text-xl md:text-3xl border-b-4 max-w-[536px] border-[#C3D0C4]">
          Meet our Ayurveda experts
        </h1>
      </div>
      <div className="slider-container mt-10 w-5/6 mx-auto">
        <Slider {...settings} className="">
          {demo.map((item, i) => (
            <div
              className="flex  items-center h-screen w-full justify-between"
              key={i}
            >
              <div className="max-w-xs">
                <div className="bg-[#FFF7E2] shadow-xl rounded-b-3xl rounded-lg pt-3">
                  <div className="photo-wrapper p-2">
                    <img
                      className="w-32 h-32 rounded-full mx-auto"
                      src={doc}
                      alt={item.name}
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                      {item.name}
                    </h3>
                    <div className="text-center text-gray-400 text-xs font-semibold">
                      <p>{item.position}</p>
                    </div>

                    <div className="text-[#0C0C0C] flex justify-center items-center space-x-1 text-center text-xs my-2">
                      <img src={degree} width={20} />
                      <p>{item.exp}</p>
                    </div>

                    <div className="w-1/2 mx-auto bg-[#b0d3b0] text-green-900 p-1 rounded-full flex justify-center items-center space-x-1 text-center text-xs my-2">
                      <img src={plast} width={20} />
                      <p>{item.specialist}</p>
                    </div>
                    <div className="text-center mt-4 mb-0 bg-[#3A643B] p-2 rounded-b-3xl text-white">
                      <h1>Book a session</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Experts;

const demo = [
  {
    name: "Dr. Vaishali sharma",
    position: "Ayurveda Practitioner (BAMS, MD)",
    exp: "25 years of experience",
    specialist: "Skin Specialist",
  },
  {
    name: "Dr. Vaishali sharma",
    position: "Ayurveda Practitioner (BAMS, MD)",
    exp: "25 years of experience",
    specialist: "Skin Specialist",
  },
  {
    name: "Dr. Vaishali sharma",
    position: "Ayurveda Practitioner (BAMS, MD)",
    exp: "25 years of experience",
    specialist: "Skin Specialist",
  },
  {
    name: "Dr. Vaishali sharma",
    position: "Ayurveda Practitioner (BAMS, MD)",
    exp: "25 years of experience",
    specialist: "Skin Specialist",
  },
];

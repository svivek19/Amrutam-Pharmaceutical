import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Approach = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
          Our ayurvedic approach
        </h1>
        <p className="text-[#666666] text-center max-w-[536px]">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>
      <div className="slider-container mt-10 ">
        <Slider {...settings} className="">
          {demo.map((item) => (
            <div
              key={item?.id}
              className="border-t-[6px]  border-[#3A643B] border-x-2 border-x-white rounded-[28px] bg-[#FFF7E2] p-6  text-white md:p-8 text-2xl font-bold "
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative mx-auto h-fit w-fit rounded-full bg-[#3a643bb7] py-5 px-8">
                  {item?.id}
                </div>
                <h2 className="text-xl text-[#3A643B] font-bold">
                  {item?.name}
                </h2>
                <h6 className="text-center font-medium text-lg text-[#2E2E2E]">
                  {item?.text}
                </h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Approach;

const demo = [
  {
    id: 1,
    name: "Make Appointment",
    text: "You must make an appointment in advance, to choose the service and date.",
  },
  {
    id: 2,
    name: "Consultations",
    text: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
  },
  {
    id: 3,
    name: "Treatment Planning",
    text: "The Ayurvedic practitioner creates a personalized treatment plan for you",
  },
  {
    id: 4,
    name: "Maintenance",
    text: "These visits allow for assessment of progress, adjustments to the treatment.",
  },
];

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
          {demo.map((item) => (
            <div className="flex items-center h-screen w-full justify-between">
              <div className="max-w-xs">
                <div className="bg-white shadow-xl rounded-lg py-3">
                  <div className="photo-wrapper p-2">
                    <img
                      className="w-32 h-32 rounded-full mx-auto"
                      src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                      alt="John Doe"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                      John Doe
                    </h3>
                    <div className="text-center text-gray-400 text-xs font-semibold">
                      <p>Web Developer</p>
                    </div>
                    <table className="text-xs my-3">
                      <tbody>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">
                            Address
                          </td>
                          <td className="px-2 py-2">
                            Chatakpur-3, Dhangadhi Kailali
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">
                            Phone
                          </td>
                          <td className="px-2 py-2">+977 9955221114</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">
                            Email
                          </td>
                          <td className="px-2 py-2">john@example.com</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-center my-3">
                      <a
                        className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                        href="#"
                      >
                        View Profile
                      </a>
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

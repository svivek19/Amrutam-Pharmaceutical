import React from "react";
import Slider from "react-slick/lib/slider";

const ValidCustomers = () => {
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
    <div className="py-16 bg-[#FFF7E2] px-2 mx-1 rounded-xl">
      <div className="flex flex-col items-center space-y-5 px-1">
        <h1 className="text-[#3A643B] text-center font-bold text-xl md:text-3xl border-b-4 max-w-[536px] border-[#C3D0C4]">
          Stories from our valued customers!
        </h1>
      </div>

      <div className="slider-container mt-10">
        <Slider {...settings}>
          {users.map((user, index) => (
            <div key={index}>
              <div className="flex flex-col justify-between rounded-md border border-neutral-800 bg-white rounded-t-2xl shadow-sm max-w-sm mx-auto">
                <span className="bg-[#ECE7FF] py-2 px-3 rounded-t-2xl">
                  {user.heading}
                </span>
                <div className="mt-6 flex items-center gap-6">
                  <div className="flex p-2">
                    <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                      <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                        <img
                          alt={user.name}
                          src={user.img}
                          width="80"
                          height="80"
                          decoding="async"
                          data-nimg="1"
                          className="inline-block"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                    <div className="text-[#333333]">
                      <p className="leading-relaxed tracking-wide font-semibold mx-2">
                        {user.name}
                      </p>
                      <p className="leading-relaxed tracking-wide mx-2">
                        {user.place}
                      </p>
                    </div>
                  </div>
                  <div className="ml-14 md:ml-24">
                    <h1>{user.date}</h1>
                  </div>
                </div>

                <div className="px-2">
                  <svg
                    width="140"
                    height="24"
                    viewBox="0 0 140 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.25 9.45H14.6625L12 1.125L9.3375 9.45H0.75L7.6875 14.5875L5.0625 22.875L12 17.7375L18.9375 22.875L16.275 14.55L23.25 9.45Z"
                      fill="#EEDE4D"
                    />
                    <path
                      d="M52.25 9.45H43.6625L41 1.125L38.3375 9.45H29.75L36.6875 14.5875L34.0625 22.875L41 17.7375L47.9375 22.875L45.275 14.55L52.25 9.45Z"
                      fill="#EEDE4D"
                    />
                    <path
                      d="M81.25 9.45H72.6625L70 1.125L67.3375 9.45H58.75L65.6875 14.5875L63.0625 22.875L70 17.7375L76.9375 22.875L74.275 14.55L81.25 9.45Z"
                      fill="#EEDE4D"
                    />
                    <path
                      d="M110.25 9.45H101.662L99 1.125L96.3375 9.45H87.75L94.6875 14.5875L92.0625 22.875L99 17.7375L105.938 22.875L103.275 14.55L110.25 9.45Z"
                      fill="#EEDE4D"
                    />
                    <path
                      d="M139.25 9.45H130.662L128 1.125L125.337 9.45H116.75L123.688 14.5875L121.062 22.875L128 17.7375L134.938 22.875L132.275 14.55L139.25 9.45Z"
                      fill="#EEDE4D"
                    />
                  </svg>
                </div>

                <div className="px-2">
                  <q className="my-2 font-semibold">{user.quates}</q>
                  <p className="text-base font-normal leading-relaxed tracking-wide text-[#555555] pb-4">
                    {user.para}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ValidCustomers;

const users = [
  {
    heading: "Consulted for Skin",
    name: "Sophie Moore ",
    place: "Chennai",
    date: "17/02/24",
    quates: "One of a kind service",
    img: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    para: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    heading: "Consulted for hair",
    name: "Sophie Moore  ",
    place: "Chennai",
    date: "17/02/24",
    img: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    quates: "One of a kind service",
    para: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    heading: "Consulted for hair",
    name: "Sophie Moore  ",
    place: "Chennai",
    date: "17/02/24",
    img: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    quates: "One of a kind service",
    para: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    heading: "Consulted for hair",
    name: "Sophie Moore",
    place: "Chennai",
    date: "17/02/24",
    img: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    quates: "One of a kind service",
    para: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
];

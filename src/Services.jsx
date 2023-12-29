import React from "react";


const Services = () => {
  return (
    <>
      <div id="services">
        <h1 className="text-center text-4xl mx-auto py-20">Services</h1>

        <div className="flex items-center flex-col md:flex-row mx-auto justify-evenly gap-5 px-10 pb-20 md:px-0">
          <div className="overflow-hidden  bg-red-400 cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div className="w-full flex justify-center">
                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out overflow-visible">
                  <div className="font-bold">Party</div>

                  {/* <div className="opacity-60 text-sm ">
                  Get ready to elevate your nightlife experience with Hardik Mali's electrifying party sets. Join the revelry as beats collide, and the dance floor transforms into a pulsating haven of celebration. It's not just a party; it's a sonic journey that promises unforgettable moments and non-stop euphoria. Let the music ignite the night, and the good times roll with Hardik Mali at the helm!
                  </div> */}
                </div>
              </div>
            </div>
            <img
              alt=""
              className="h-80 object-cover group-hover:scale-110 transition duration-300 ease-in-out"
              src="p2.jpg"
            />
          </div>
          <div className="overflow-hidden cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div className="flex justify-center w-full">
                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                  <div className="font-bold ">Wedding</div>

                  {/* <div className="opacity-60 text-sm ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio dolores error iure, perferendis sequi totam. Ad
                    aliquam aperiam atque deleniti dolor dolorem enim esse et
                    in, inventore itaque, pariatur reprehenderit.
                  </div> */}
                </div>
              </div>
            </div>
            <img
              alt=""
              className="h-80 object-cover group-hover:scale-110 transition duration-300 ease-in-out"
              src="p1.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

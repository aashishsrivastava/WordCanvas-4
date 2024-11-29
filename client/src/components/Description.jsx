import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
const Description = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}


        
        className="flex flex-col items-center justify-center my-24  p-6 md:px-28 "
      >
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 capitalize">
          create ai images
        </h1>
        <p className="text-gray-500 mb-8 capitalize">
          {" "}
          Turn Text To Image, In Seconds.
        </p>
        <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center ">
          <img
            src={assets.sample_img_1}
            alt=""
            className="w-80 xl:w-96  rounded-lg  "
          />{" "}
          <div className="">
            <h2 className="text-3xl font-medium max-w-lg mb-4 ">
              Lorem ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit
              amet.
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dolore accusantium reiciendis corrupti natus laboriosam
              quidem itaque in tenetur nihil tempore delectus ex earum, hic modi
              ipsam soluta explicabo recusandae.
            </p>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dolore accusantium reiciendis corrupti natus laboriosam
              quidem itaque in tenetur nihil tempore delectus ex earum, hic modi
              ipsam soluta explicabo recusandae.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Description;

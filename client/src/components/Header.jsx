import React, { useContext } from "react";
import { assets } from "../assets/assets";
// import { motion } from "framer-motion";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <>
      <motion.div
        className="fex flex-col justify-center items-center text-center my-20 "
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          // viewport={{ once: true }}
        >
          <p>Beast Text to Image Generator</p>
          <img src={assets.star_icon} alt="" />
        </motion.div>
        <motion.h1 className="text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center  capitalize">
          {/* turn your thought into a beautiful <span className="text-blue-600">canvas</span>, in seconds */}
          turn text to <br />{" "}
          <span
            className="text-blue-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 2 }}
          >
            Image
          </span>
          , in seconds.
        </motion.h1>
        <motion.p
          className="text-center max-w-xl mx-auto mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Transform your ideas into captivating visuals with AI-powered
          text-to-image generation. Unleash creativity and design effortlessly!
        </motion.p>
        <div className="flex justify-center items-center">
          <motion.button
            onClick={onClickHandler}
            className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5  items-center justify-center flex gap-2 rounded-full "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              default: { duration: 0.5 },
              opacity: { delay: 0.8, duration: 2 },
            }}
          >
            <span className="capitalize">generate here </span>
            <img className="w-6" src={assets.star_group} alt="" />
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center mt-16 gap-3"
        >
          {Array(6)
            .fill("")
            .map((item, index) => (
              <motion.img
                whileHover={{ scale: 1.05, duration: 0.1 }}
                className="rounded hover:scale-105 transition-all duration-200 cursor-pointer max-sm:w-10"
                src={
                  index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1
                }
                alt=""
                key={index}
                width={70}
              />
            ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-2 text-neutral-600"
        >
          Generaed images from WordCanvas
        </motion.p>
      </motion.div>
    </>
  );
};

export default Header;

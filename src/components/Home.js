import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        // initial={{ scale: 0.1 }}
        animate={{ fontSize: 50, x: 0, y: 0, scale: 1 }}
        transition={{
          yoyo: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default Home;

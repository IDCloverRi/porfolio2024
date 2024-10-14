"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;

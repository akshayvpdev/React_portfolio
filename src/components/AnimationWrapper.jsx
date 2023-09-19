import React from "react";
import { motion } from "framer-motion";

export default function MotionLayout({children}) {
    return (
        
        <motion.div
        initial={{ x: "-40px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 1 }}>
            {children}
        </motion.div>
    );
}

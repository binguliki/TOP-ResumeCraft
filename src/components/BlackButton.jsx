import * as motion from "motion/react-client";
export default function BlackButton({ text }) {
    return (
        <motion.button className="black-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >{text}
        </motion.button>
    )
}
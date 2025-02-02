import { motion } from 'framer-motion';

const ContactMeModal = ({modalOpen, handleClose}) => {

    const dropIn = {
        hidden: {
            y: "-100vh", 
            opacity: 0,
        }, 
        visible: { 
            y: "0",
            opacity: 0,
            transition: {
                duration: 0.1, 
                type: "spring",
                damping: 25,
                stiffness: 500
            }
        }, 
        exit: {
            y: "100vh", 
            opacity: 0,
        }
    }

    return (
        <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible'"
            exit="exit"
        >
        <p>
            Lorem ipsum dolor sit amet consectetur.
        </p>
        <button onClick={handleClose}> Close </button>
        </motion.div>
    )
}

export default ContactMeModal; 
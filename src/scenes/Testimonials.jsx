import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
const Testimonials = () => {
  const testimonialStyle = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
    justify-end p-20 sm:pt-16 px-8 sm:px-16 pb-8 sm:pb-16 mt-32 sm:mt-48`;

  return (
    <section className="pt-32 pb-16" id="testimonials">

      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-accent">
          TESTIMONIALS
        </p>
        <LineGradient width="w-2/4" />
        <p className="mt-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}

      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-primary ${testimonialStyle}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="absolute top-[-80px] sm:top-[-120px] left-1/2 -ml-[75px] sm:-ml-[110px] w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] rounded-full bg-cover bg-center bg-[url('./assets/person-1.jpeg')]"></div>
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text=xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            omnis iste ab ducimus vel corporis nulla quia libero quaerat, velit
            consequatur error, cum maiores fugiat voluptatem repellat porro
            reprehenderit facilis!
          </p>
        </motion.div>

        <motion.div
          className={`bg-accent ${testimonialStyle}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="absolute top-[-80px] sm:top-[-120px] left-1/2 -ml-[75px] sm:-ml-[110px] w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] rounded-full bg-cover bg-center bg-[url('./assets/person-2.jpeg')]"></div>
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text=xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            omnis iste ab ducimus vel corporis nulla quia libero quaerat, velit
            consequatur error, cum maiores fugiat voluptatem repellat porro
            reprehenderit facilis!
          </p>
        </motion.div>

        <motion.div
          className={`bg-highlight ${testimonialStyle}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="absolute top-[-80px] sm:top-[-120px] left-1/2 -ml-[75px] sm:-ml-[110px] w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] rounded-full bg-cover bg-center bg-[url('./assets/person-3.jpeg')]"></div>
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text=xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            omnis iste ab ducimus vel corporis nulla quia libero quaerat, velit
            consequatur error, cum maiores fugiat voluptatem repellat porro
            reprehenderit facilis!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

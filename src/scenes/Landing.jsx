import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImg from "../assets/profile.png";
import SocialMediaIcons from "../components/SocialMediaIcons";

import me from "../assets/me.jpg";
const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center mdL:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[300px]
                  before:w-full before:max-w-[300px] md:before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px]"
              src={me}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="rounded-t-full z-10 w-full max-w-[300px] md:max-w-[400px] hover:filter hover:saturate-200 transition duration-500 "
            src={me}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair text-center md:text-start relative z-10">
            <span className="relative z-10">Hussein</span> {""}
            <span
              className="xs:relative xs:text-white md:text-card xs:font-semibold z-10 md:before:content-brush
                    before:absolute before:-left-[35px] before:-top-[120px] before:z-[-1]"
            >
              Elassy
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Passionate frontend developer with expertise in React, JavaScript,
            and modern web technologies. I create responsive, user-friendly
            interfaces that bring ideas to life with clean code and exceptional
            user experiences.
          </p>
        </motion.div>
        {/* call to actions*/}

        <motion.div
          className="flex mt-5 justify-center md:justify-start "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue rounded-sm py-3 px-7 font-semibold
                text-sm text-deep-blue hover:text-white transition duration-500"
            href="#contact"
            onClick={() => setSelectedPage("contact")}
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            href="#contact"
            onClick={() => setSelectedPage("contact")}
          >
            <div className="bg-deep-blue w-full  h-full flex items-center justify-center font-playfair px-10 hover:text-accent transition duration-500">
              Let's Talk
            </div>
          </AnchorLink>
        </motion.div>

        {/* social media icons*/}
        <motion.div
          className="flex mt-5 justify-center md:justify-start "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;

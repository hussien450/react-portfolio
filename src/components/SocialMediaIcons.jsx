import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com/in/hussein-elassy-8970911a3"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img alt="linkedin" src={linkedin} className="w-6 h-6" />
      </a>

      <a
        href="https://www.facebook.com/hossen.mohamedalassy/"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img alt="twitter" src={facebook} className="w-6 h-6" />
      </a>
      <a
        href="https://github.com/hussien450"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img alt="linkedin" src={twitter} className="w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/husseinelassy/"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img alt="linkedin" src={instagram} className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

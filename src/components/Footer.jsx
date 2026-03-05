// import { assets } from "../assets/assets";
import logo from "../assets/download.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Top Footer */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Left Section */}
          <div>

            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="logo" className="h-8 md:h-11 w-auto object-contain" />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text.
            </p>

          </div>

          {/* Company Links */}
          <div>

            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>

            <ul className="space-y-2 text-gray-400 text-sm">

              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About us
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-white transition">
                    Projects
                </a>
              </li>

              <li>
                <a href="#contactus" className="hover:text-white transition">
                  Contact us
                </a>
              </li>

            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="font-semibold mb-4 text-lg">
              Subscribe to our newsletter
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-[#162447] text-sm outline-none"
              />

              <button className="bg-blue-600 px-4 py-2 rounded-r-md text-sm hover:bg-blue-700 transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <p className="text-center text-gray-400 text-sm">
          Copyright {new Date().getFullYear()} © UrbanNest. All Right Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
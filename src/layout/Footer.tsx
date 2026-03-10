import logo_white from "../assets/images/common/Logo_White.webp";
import { NavLink } from "react-router-dom";

import Container from "../components/common/Container";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { navigationLinks } from "../data/navigation";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 text-white bg-gray-900">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo_white}
                alt="urbanNest Logo"
                loading="lazy"
                className="object-contain w-auto h-8 md:h-11"
              />
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-2 text-sm text-gray-400">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Subscribe to our newsletter
            </h3>

            <p className="mb-4 text-sm text-gray-300">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>

            <div className="flex">
              <Input
                id="newsletter-email"
                type="email"
                aria-label="Newsletter email"
                placeholder="Enter your email"
                required
                className="bg-[#162447] text-white border-none"
              />

              <Button aria-label="Subscribe to newsletter">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-gray-700"></div>

        {/* Copyright */}
        <p className="text-sm text-center text-gray-400">
          Copyright {new Date().getFullYear()} © UrbanNest. All Right Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

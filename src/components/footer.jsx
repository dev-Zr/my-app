// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  const socialIcons = ["twitter", "linkedin", "github", "discord"];
  const footerColumns = [
    {
      title: "Product",
      links: [
        { name: "Features", to: "/features" },
        { name: "Pricing", to: "/pricing" },
        { name: "Use Cases", to: "/use-cases" },
        { name: "Integrations", to: "/integrations" },
        { name: "API", to: "/api" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Careers", to: "/careers" },
        { name: "Blog", to: "/blog" },
        { name: "Press", to: "/press" },
        { name: "Contact", to: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", to: "/help" },
        { name: "Documentation", to: "/docs" },
        { name: "Community", to: "/community" },
        { name: "Status", to: "/status" },
        { name: "Terms of Service", to: "/terms" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#002F1C] via-[#041E13] to-black text-gray-300 py-14 px-6 overflow-hidden border-t border-[#FFD700]/20">
      {/* Subtle red glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,0,0,0.05),_transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,0,0,0.06),_transparent_70%)]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#FFD700] to-[#C6A800] rounded-md shadow-md shadow-[#FFD700]/40 transition-transform hover:rotate-3"></div>
              <h3 className="text-2xl font-bold text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">
                AM
              </h3>
            </div>
            <p className="text-sm mb-5 text-gray-400 leading-relaxed">
              The royal marketplace for AI specialists — where innovation meets intelligence. Build, buy, and trade brilliance.
            </p>
            <div className="flex space-x-5">
              {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-[#FFD700] hover:scale-110 transition-all duration-300"
                >
                  <i className={`fab fa-${icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerColumns.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-[#FFD700] font-semibold mb-5 tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="footer-link text-gray-400 hover:text-[#FFD700] transition-all duration-300 hover:pl-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFD700]/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            © 2025 <span className="text-[#FFD700] font-medium">AM</span> — All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-[#FFD700] transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#FFD700] transition">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-[#FFD700] transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

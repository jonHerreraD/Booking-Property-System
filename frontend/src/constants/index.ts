interface NavLink {
    name: string;
    description: string;
    link: string;
}

const navLinks: NavLink[] = [
    { name: "Where", description: "Search Destinations", link: "#work" },
    { name: "Check In", description: "Add Dates", link: "#experience" },
    { name: "Check Out", description: "Add Dates", link: "#skills" },
    { name: "Who", description: "Add Guests", link: "#testimonials" },
];

const menu = [
    {option: "Profile", link: "", description: ""},
    {option: "Settings", link: "", description: ""},
    {option: "Become a Host", link: "", description: "Start hosting now and earn extra income!"},
    {option: "Help & Support", link: "", description: ""},
    {option: "Sign Out", link: "", description: ""}
];

const languages = [
    { language: "Spanish", region: "Mexico" },
    { language: "English", region: "United States" },
];

const currencies = [
    {currency: "United States Dollar", abbreviation: "USD - $"},
    {currency: "Mexican Peso", abbreviation: "MXN - $"}
];

const navOptions = [
    {name: "Discover", link:"#discover"},
    {name: "Trust & Safety", link:"#trust-safety"},
    {name: "Availability", link:"#availability"}
];

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "#" },
        { text: "Get help with a safety issue", href: "#" },
        { text: "Anti-discrimination", href: "#" },
        { text: "Disability support", href: "#" },
        { text: "Cancellation options", href: "#" },
        { text: "Report neighborhood concern", href: "#" },
      ]
    },
    {
      title: "Hosting",
      links: [
        { text: "Anchor Homes your home", href: "#" },
        { text: "Anchor Homes your experience", href: "#" },
        { text: "Cover for Hosts", href: "#" },
        { text: "Hosting resources", href: "#" },
        { text: "Community forum", href: "#" },
        { text: "Hosting responsibly", href: "#" },
        { text: "Join a free Hosting class", href: "#" },
        { text: "Find a co-host", href: "#" },
      ]
    },
    {
      title: "Anchor Homes",
      links: [
        { text: "2025 Summer Release", href: "#" },
        { text: "Newsroom", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Investors", href: "#" },
        { text: "Gift cards", href: "#" },
      ]
    }
  ];

  const bottomLinks = [
    { text: "Terms", href: "#" },
    { text: "Sitemap", href: "#" },
    { text: "Privacy", href: "#" },
    { text: "Your Privacy Choices", href: "#" },
  ];


export default navLinks; // default export
export { languages };    // named export
export {currencies};
export {menu};
export {navOptions};
export {footerSections};
export {bottomLinks};


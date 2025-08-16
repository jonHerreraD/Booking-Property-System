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

export default navLinks; // default export
export { languages };    // named export
export {currencies};
export {menu};



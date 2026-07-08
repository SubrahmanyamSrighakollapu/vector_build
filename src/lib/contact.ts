export const companyContact = {
  phoneDisplay: "+001 4698289888",
  phoneE164: "919876543212",
  email: "Sales@buildrighttec.com",
  socials: {
    whatsapp: "https://wa.me/919876543212?text=Hello%20Build Right Tech%2C%20I%27d%20like%20to%20discuss%20a%20project.",
    linkedin: "https://www.linkedin.com/search/results/companies/?keywords=Build Right Tech",
  },
} as const;

export const globalOffices = [
    {
    city: "Lewisville, USA",
    country: "usa",
    flag: "/flags/usa-rect.svg",
    address: [
      "520 Four Stones Blvd, Lewisville,",
      "TX 75058, USA",
    ],
  },
    {
    city: "Turner, Australia",
    country: "australia",
    flag: "/flags/australia-rect.svg",
    address: [
      "99 Northbourne Avenue, Turner",
      "ACT 2612, Australia",
    ],
  },
  {
    city: "Bengaluru, India",
    country: "india",
    flag: "/flags/india-rect.svg",
    address: [
      "Novel Tech Park, Hosur Rd, Kudlu Gate,",
      "Krishna Reddy Industrial Areas, H.S.R Extension, Bengaluru,",
      "Karnataka 560068",
    ],
  },
  {
    city: "Hyderabad, India",
    country: "india",
    flag: "/flags/india-rect.svg",
    address: [
      "Sahasra Heights, Mothi Nagar,",
      "Hyderabad, 500018, Telangana",
    ],
  },
] as const;

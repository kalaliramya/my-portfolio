// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Contact config={config} />
//       <Footer config={config} />
//     </>
//   );
// }

// export default App;

const config = {
  name: "Kalali Ramya",
  title: ".NET Developer",
  titleHighlight: "Full Stack",
  tagline: "Building scalable APIs and clean UIs with .NET Core, React & Azure.",

  stats: {
    exp: "5+",
    projects: "20+",
    clients: "12+"
  },

  contact: {
    email: "ramyagoud582@gmail.com",
    phone: "+919490827967",
    github: "github.com/kalaliramya",
    linkedin: "linkedin.com/in/ramya-kalali-dotnetdeveloper/",
    location: "Hyderabad"
  },

  skills: {
    Backend: ["C#", ".NET Core", "ASP.NET", "SQL"],
    Frontend: ["React", "JS", "Tailwind"],
  },

  projects: [
    {
      title: "E-Commerce",
      desc: "Full stack app",
      tags: ["React", ".NET"],
    }
  ],

  experience: [
    {
      role: "Senior Dev",
      company: "XYZ",
      period: "2022-2024",
      desc: "Worked on APIs"
    }
  ]
};

export default config;
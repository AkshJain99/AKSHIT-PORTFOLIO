/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "AKSHIT",
  title: "Hi all, I'm AKSHIT JAIN",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Angular / Django / Flask and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Akshjain99",
  linkedin: "https://www.linkedin.com/in/Akshjain99/",
  gmail: "akshjain.jain74@gmail.com",
  gitlab: "https://gitlab.com/Akshjain99",
  medium: "https://medium.com/@Akshjain99",
  twitter: "https://x.com/Akshjain99",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES TO BUILD PRODUCT AND EARN MONEY!!",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean etc"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-django"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fab fa-flask"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Stencil.js",
      fontAwesomeClassname: "fab fa-stencil"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SMVDU University",
      logo: require("./assets/images/smvdu1.jpg"),
      subHeader: "Bachelors of Engineering in Computer Science",
      duration: "July 2017 - July 2021",
      desc: "Started First GDSC club by google at Universty campus.",
      descBullets: [
        
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development (Reactjs, Angular 8+)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend (Django, flask)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "SimplifyVMS",
      companylogo: require("./assets/images/simplifyworkforce.jpeg"),
      date: "June 2021 – Present",
      desc: ""
    },
    {
      role: "Software Engineer Intern",
      company: "Neurobit Technologies Co.",
      companylogo: require("./assets/images/neurobit.webp"),
      date: "Jan 2021 – June 2021",
      desc: ""
    },
    {
      role: "Co-Founder",
      company: "Plant4u Botanicals Pvt Ltd",
      companylogo: require("./assets/images/plant4u.jpeg"),
      date: "June 2020 – July 2021",
      desc: ""
    },
    {
      role: "Software Developer Intern",
      company: "Hikaya LLC",
      companylogo: require("./assets/images/hikaya.webp"),
      date: "June 2019 – September 2019",
      desc: ""
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Developer Club Lead 2019-20",
      subtitle:
        "Established and led the first GDSC technical community at SMVDU, demonstrating leadership and organizational skills.",
      image: require("./assets/images/gdsc-logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/17vLRVA2lRNtWh3Xq8WrArwzgpd0KDL93/view"
        },
      ]
    },
    {
      title: "KWOC MENTOR 2018-20",
      subtitle:"Mentored Kharagpur Winter of Code organized by IITKharagpur as inboth 2018 and 2019.",
      image: require("./assets/images/kwoc.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "KWOC CERTIFICATE",
          url: "https://drive.google.com/file/d/1o00e1c1y799pQWDXoSsA03B7GTCeoyoK/view"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I am thinking to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Coming Soon :)",
      description:
        ""
    },
    {
      url: "",
      title: " Coming Soon :D",
      description:
        ""
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND SPEAK TO THE WORLD 😅"
  ),

  talks: [
    {
      title: "Coming Soon: A Tech Talk That Will Make You LOL!",
      subtitle: "Stay tuned for some laughs and geeky wisdom!",
      slides_url: "",
      event_url: ""
    } 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "akshjain.jain74@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "akshjain99", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

import self from "../img/self.jpeg";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.jpeg";
import mock3 from "../img/mockAPI.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Victor",
  lastName: "Ortega",
  initials: ".py", // the example uses first and last, but feel free to use three or more if you like.
  position: "Software Apps Developer & Entrepreneur",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in Mexico",
    },
    {
      emoji: "💼",
      text: "Strategist - Custom Software Solutions at Pichones Corp",
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/qupi818",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/vorteg",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/victorm-ortegar01",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/QupiVorteg",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Victor. Engineer with 13 years of experience in electronic and software areas, specialist on software architecture analysis and design. Very passionate for development and building projects from scratch. In recent years been working in developer roles for Computer Vision (AI/ML), Linux OS customized, automated testing, automated process, developing IoT applications, cloud applications deployment, creating documentation and web development.  ",
  skills: {
    proficientWith: [
      "Technical Lead Python Developer & Computer Vision(AI / ML)",
      " Senior Python developer",
      "Full Stack developer",
      "Software Engineer Developer lead",
      "System Validation engineer",
      "Program Manager Intern",
      "Hardware Technician",
    ],
    exposedTo: [
      "python",
      "django",
      "flask",
      "fastapi",
      "pandas",
      "jupyter notebook",
      "computer vision",
      "deep learning",
      "pytorch",
      "react",
      "nextjs",
      "nodejs",
      "javascript",
      "typescript",
      " and more",
    ],
  },
  hobbies: [
    {
      label: "cats",
      emoji: "🐱",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "video games",
      emoji: "🎮",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Pichones Corp",
      live: "https://pichonescorp.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/vorteg/pichonGatsby", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "PC English",
      live: "https://www.facebook.com/PCenglishclass",
      source: "",
      image: mock2,
    },
    {
      title: "Combination Sum API",
      live: "https://9daobr.deta.dev/docs",
      source: "https://github.com/vorteg/combination-sum-api",
      image: mock3,
    },
  ],
};

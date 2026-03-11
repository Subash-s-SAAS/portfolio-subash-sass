import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Subash",
  lastName: "Thatheuse",
  name: `Subash Thatheuse`,
  role: "Software Engineer",
  avatar: "/images/subash.jpeg",
  email: "subashsuni55@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  displayLocation: "India/Tamilnadu",
  languages: ["English", "Tamil", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://www.github.com/subashf23s",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/subash-thatheuse",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">SUBASH</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Subash, a Software engineer at{" "}
      <Text as="span" size="xl" weight="strong">
        Litmus7
      </Text>
      , where I craft intuitive <br /> user experiences. After hours, I build my
      own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Subash is an India-based software engineer with a passion for
        transforming complex challenges into simple, elegant software solutions.
        His work spans digital interfaces, interactive experiences, and the
        convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Litmus7",
        timeframe: "2024 July - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Worked on several Retail projects including Tata Croma, Helly
            Hansen, Boggi Milano UAE.
          </>,
          <>Done several PoCs : Sanity CMS, Three.js , Tanstack Start.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/logos/litmus7.png",
            alt: "Litmus7",
            width: 9,
            height: 6,
          },
        ],
      },
      {
        company: "Gadgeon",
        timeframe: "2022 May - 2024 June",
        role: "Software Engineer",
        achievements: [
          <>Worked with KORE wireless.</>,
          <>Developed internal seat booking app.</>,
          <>Created a UI Library to be used across the projects.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/logos/gadgeon.png",
            alt: "Gadgeon",
            width: 9,
            height: 6,
          },
        ],
      },
      {
        company: "OBO Technology",
        timeframe: "2020 May - 2024 May",
        role: "Technical Member",
        achievements: [
          <>Worked with KORE wireless.</>,
          <>Developed internal seat booking app.</>,
          <>Created a UI Library to be used across the projects.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/logos/obo.png",
            alt: "OBO",
            width: 9,
            height: 6,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "NMCC, Kanyakumari, Tamilnadu.",
        description: (
          <>
            Studied Master of Computer Application.
            <br />
            Studied Bachelor of Computer Application
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Creates UI for webpage and apps based on the expertise from several
            projects.
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Tanstack",
            icon: "tanstack",
          },
          {
            name: "Tailwindcss",
            icon: "tailwind",
          },
          {
            name: "Shadcn",
            icon: "shadcn",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Backend",
        description: (
          <>
            Developed several Backend projects with diversive frameworks ,
            handling edge cases.
          </>
        ),
        tags: [
          {
            name: "Nodejs",
            icon: "nodejs",
          },
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Dev Tools",
        description: (
          <>Using best developer tools for the development process.</>
        ),
        tags: [
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "GitLab",
            icon: "gitlab",
          },
          {
            name: "VS Code",
            icon: "vscode",
          },
          {
            name: "Antigravity",
            icon: "antigravity",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

interface courseDetails {
  bannerimage: string;
  coursedetails: {
    title: string;
    description: string;
    duration: {
      hours: number;
      minutes?: number;
    };
    lessons: number;
    instructor: string;
    language: string;
  };
  courseprice: {
    imageurl: string;
    discountprice: number;
    price: number;
    hours?: number;
    minutes?: number;
    sections: number;
    includes: {
      imageurl: string;
      heading: string;
    }[];
  };
  coursedescription: {
    description: string[];
    requirements: string[];
    whatyouwilllearn: string[];
  };
}
interface CourseData {
  coursedetails: {
    [key: string]: courseDetails;
  };
}
const Coursesdata: CourseData = {
  coursedetails: {
    unity: {
      bannerimage: "/images/gamebanner.jpg",
      coursedetails: {
        title: "Unity Game Development",
        description: "Learn Unity Game Development ",
        duration: {
          hours: 30,
        },
        lessons: 12,
        instructor: "Prince Thomas",
        language: "Malayalam",
      },
      courseprice: {
        imageurl: "/images/unity.png",
        discountprice: 23600,
        price: 30000,
        hours: 30,
        sections: 5,
        includes: [
          {
            imageurl: "/icons/computer.svg",
            heading: "Access on Desktop",
          },
          {
            imageurl: "/icons/certificate.svg",
            heading: "Certificate of Completion",
          },
          {
            imageurl: "/icons/infinity.svg",
            heading: "Full lifetime access",
          },
        ],
      },
      coursedescription: {
        description: [
          "Learn how to create video games using Unity, the world-leading free-to-use game development tool. We start super simple so you need no prior experience of Unity or coding! With our online tutorials, you'll be amazed what you can achieve right from the first moment you start the course. ",
        ],
        requirements: [
          "Mac or PC capable of running Unity 2019 or later.",
          " A passion and willingness to learn how to code.",
        ],
        whatyouwilllearn: [
          "Learn Unity, a powerful modern language, from scratch. No prior programming experience is necessary.",
          "Build a solid foundation for game design and game development that will help you build your own games.",
          "Create playable game projects - good for your portfolio, or just for your own sense of achievement.",
          "Become excellent at using the Unity game engine.",
          "Develop highly transferable coding problem solving skills.",
        ],
      },
    },
    flutter: {
      bannerimage: "/images/flutter.png",
      coursedetails: {
        title: "Flutter",
        description:
          "A Complete Guide to the Flutter SDK & Flutter Framework for building native iOS and Android apps",
        duration: {
          hours: 30,
        },
        lessons: 12,
        instructor: "Farhan",
        language: "Malayalam",
      },
      courseprice: {
        imageurl: "/images/flutter.png",
        discountprice: 23600,
        price: 30000,
        hours: 30,
        sections: 24,
        includes: [
          {
            imageurl: "/icons/computer.svg",
            heading: "Access on Desktop",
          },
          {
            imageurl: "/icons/certificate.svg",
            heading: "Certificate of Completion",
          },
          {
            imageurl: "/icons/infinity.svg",
            heading: "Full lifetime access",
          },
        ],
      },
      coursedescription: {
        description: [
          "Flutter - a framework developed by Google - allows you to learn one language (Dart) and build beautiful native mobile apps in no time. Flutter is a SDK providing the tooling to compile Dart code into native code and it also gives you a rich set of pre-built and pre-styled UI elements (so called widgets) which you can use to compose your user interfaces.Flutter is extremely trending and gets used for major Google apps like their Adwords app - it's now marked as ready for production, hence now is the time to jump in and learn it!",
          "This course will teach Flutter & Dart from scratch, NO prior knowledge of either of the two is required! And you certainly don't need any Android or iOS development experience since the whole idea behind Flutter is to only learn one language.",
          "You'll learn Flutter not only in theory but we'll build a complete, realistic app throughout this course. This app will feature both all the core basics as well as advanced features like using Google Maps, the device camera, adding animations and more!",
          "With Flutter, you'll be able to write code only once and ship your apps both to the Apple AppStore and Google Play.",
        ],
        requirements: [
          "Basic programming language will help but is not a must-have",
          " You can use either Windows, macOS or Linux for Android app development - iOS apps can only be built on macOS though",
          "NO prior iOS or Android development experience is required",
          "NO prior Flutter or Dart experience is required - this course starts at zero!",
        ],
        whatyouwilllearn: [
          "Learn Flutter and Dart from the ground up, step-by-step",
          "Build engaging native mobile apps for both Android and iOS",
          "Use features like Google Maps, the device camera, authentication and much more!",
          "Learn how to upload images and how to send manual and automated push notifications",
          "Learn all the basics without stopping after them: Dive deeply into Flutter & Dart and become an advanced developer",
        ],
      },
    },
    reactjs: {
      bannerimage: "/images/reactnative.jpg",
      coursedetails: {
        title: "The Complete Guide to React JS",
        description:
          "Build powerful, fast, user-friendly and reactive web apps ",
        duration: {
          hours: 30,
        },
        lessons: 12,
        instructor: "X",
        language: "Malayalam",
      },
      courseprice: {
        imageurl: "/images/reactnative.jpg",
        discountprice: 23600,
        price: 30000,
        hours: 30,
        sections: 12,
        includes: [
          {
            imageurl: "/icons/computer.svg",
            heading: "Access on Desktop",
          },
          {
            imageurl: "/icons/certificate.svg",
            heading: "Certificate of Completion",
          },
          {
            imageurl: "/icons/infinity.svg",
            heading: "Full lifetime access",
          },
        ],
      },
      coursedescription: {
        description: [
          "React.js is the most popular JavaScript library you can use and learn these days to build modern, reactive user interfaces for the web. This course will teach you React.js in a practice-oriented way, using all the latest patterns and best practices you need. You will learn all the key fundamentals as well as advanced concepts and related topics to turn you into a React.js developer.",
          "This course is fully up-to-date with React 18 (the latest version of React).This course teaches you React in-depth, from the ground up, step by step by diving into all the core basics, exploring tons of examples and also introducing you to advanced concepts as well.",
        ],
        requirements: [
          "JavaScript + HTML + CSS fundamentals are absolutely required",
          "You DON'T need to be a JavaScript expert to succeed in this course!",
          "ES6+ JavaScript knowledge is beneficial but not a must-have",
          "NO prior React or any other JS framework experience is required!",
        ],
        whatyouwilllearn: [
          "Learn C#, a powerful modern language, from scratch. No prior programming experience is necessary.",
          "Build a solid foundation for game design and game development that will help you build your own games.",
          "Create playable game projects - good for your portfolio, or just for your own sense of achievement.",
          "Become excellent at using the Unity game engine.",
          "Develop highly transferable coding problem solving skills.",
        ],
      },
    },
    django: {
      bannerimage: "/images/django.png",
      coursedetails: {
        title: "",
        description:
          "Learn Unity in C# & Code Your First Five 2D Video Games for Web, Mac & PC. ",
        duration: {
          hours: 18,
          minutes: 17,
        },
        lessons: 12,
        instructor: "Prince",
        language: "Malayalam",
      },
      courseprice: {
        imageurl: "/images/django.png",
        discountprice: 30000,
        price: 23600,
        hours: 18,
        minutes: 17,
        sections: 12,
        includes: [
          {
            imageurl: "/icons/computer.svg",
            heading: "Access on Desktop",
          },
          {
            imageurl: "/icons/certificate.svg",
            heading: "Certificate of Completion",
          },
          {
            imageurl: "/icons/infinity.svg",
            heading: "Full lifetime access",
          },
        ],
      },
      coursedescription: {
        description: [
          "Python is consistently ranked in either first or second place as the most in-demand programming languages across the job market.  It has applications in data science, machine learning, web development, self-driving cars, automation, and many many other disciplines.  There has never been a better time to learn it!",
          "This course is all about getting you writing code ASAP, rather than sitting back watching a bunch of videos.  This course is all about writing the most modern, up-to-date Python code.The course covers all the latest additions and changes to the Python language.  The course also places a large emphasis on thinking like a Python developer, and writing code the Pythonic way.",
          "As for the curriculum, This course teaches all the key topics covered by other Python courses, but also covers more advanced topics like web scraping, crawling, and testing, just to name a few.",
        ],
        requirements: [
          "Mac or PC capable of running Unity 2019 or later.",
          " A passion and willingness to learn how to code.",
        ],
        whatyouwilllearn: [
          "Build powerful, fast, user-friendly and reactive web apps",
          "Provide amazing user experiences by leveraging the power of JavaScript with ease",
          "Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now",
          "Learn all about React Hooks and React Components",
        ],
      },
    },
    nodejs: {
      bannerimage: "/images/nodejs.png",
      coursedetails: {
        title: "Learn and Understand Node.js",
        description:
          "Learn Unity in C# & Code Your First Five 2D Video Games for Web, Mac & PC.",
        duration: {
          hours: 18,
          minutes: 17,
        },
        lessons: 12,
        instructor: "Prince",
        language: "Malayalam",
      },
      courseprice: {
        imageurl: "/images/nodejs.png",
        discountprice: 1400,
        price: 1800,
        hours: 18,
        minutes: 17,
        sections: 5,
        includes: [
          {
            imageurl: "/icons/computer.svg",
            heading: "Access on Desktop",
          },
          {
            imageurl: "/icons/certificate.svg",
            heading: "Certificate of Completion",
          },
          {
            imageurl: "/icons/infinity.svg",
            heading: "Full lifetime access",
          },
        ],
      },
      coursedescription: {
        description: [
          "Python is consistently ranked in either first or second place as the most in-demand programming languages across the job market.  It has applications in data science, machine learning, web development, self-driving cars, automation, and many many other disciplines.  There has never been a better time to learn it!",
          "This course is all about getting you writing code ASAP, rather than sitting back watching a bunch of videos.  This course is all about writing the most modern, up-to-date Python code.The course covers all the latest additions and changes to the Python language.  The course also places a large emphasis on thinking like a Python developer, and writing code the Pythonic way.",
          "As for the curriculum, This course teaches all the key topics covered by other Python courses, but also covers more advanced topics like web scraping, crawling, and testing, just to name a few.",
        ],
        requirements: [
          "Mac or PC capable of running Unity 2019 or later.",
          " A passion and willingness to learn how to code.",
        ],
        whatyouwilllearn: [
          "Learn C#, a powerful modern language, from scratch. No prior programming experience is necessary.",
          "Build a solid foundation for game design and game development that will help you build your own games.",
          "Create playable game projects - good for your portfolio, or just for your own sense of achievement.",
          "Become excellent at using the Unity game engine.",
          "Develop highly transferable coding problem solving skills.",
        ],
      },
    },
    python: {
      bannerimage: "/images/python.jpg",
      coursedetails: {
        title: " Python Django",
        description: "A complete guide to python",
        duration: {
          hours: 30,
        },
        lessons: 12,
        instructor: " Manu Prasad",
        language: "Malayalam",
      },
      courseprice: {
        imageurl: "/images/python.jpg",
        discountprice: 23600,
        price: 30000,
        hours: 30,
        minutes: 17,
        sections: 24,
        includes: [
          {
            imageurl: "/icons/computer.svg",
            heading: "Access on Desktop",
          },
          {
            imageurl: "/icons/certificate.svg",
            heading: "Certificate of Completion",
          },
          {
            imageurl: "/icons/infinity.svg",
            heading: "Full lifetime access",
          },
        ],
      },
      coursedescription: {
        description: [
          "Python is consistently ranked in either first or second place as the most in-demand programming languages across the job market.  It has applications in data science, machine learning, web development, self-driving cars, automation, and many many other disciplines.  There has never been a better time to learn it!",
          "This course is all about getting you writing code ASAP, rather than sitting back watching a bunch of videos.  This course is all about writing the most modern, up-to-date Python code.The course covers all the latest additions and changes to the Python language.  The course also places a large emphasis on thinking like a Python developer, and writing code the Pythonic way.",
          "As for the curriculum, This course teaches all the key topics covered by other Python courses, but also covers more advanced topics like web scraping, crawling, and testing, just to name a few.",
        ],
        requirements: [
          "A computer! We've got you covered whether you have a Mac or a PC.",
          " Prepare to write thousands of lines of python exercises!",
          "No previous experience with Python or coding is required.",
        ],
        whatyouwilllearn: [
          "Learn all the coding fundamentals in Python!",
          "Work through nearly 200 exercises and quizzes!",
          "Learn about all of the latest features in Python 3.6",
          "Use Python to create an automated web crawler and scraper",
          "Make complex HTTP requests to APIs using Python",
          "Master the quirks of Python style and conventions",
          "Really Really Understand Object Oriented programming in Python",
          "Learn testing and TDD (Test Driven Development) with Python",
          "Write your own Decorators and higher order functions",
          "Write your own Generators and other Iterators",
          "Confidently work with Lambdas!",
          "Master tricky topics like Multiple Inheritance and Polymorphism",
          "Build games with Python",
          "Build larger projects that span across multiple files",
          "Work with all the Python data structures: lists, dictionaries, sets, tuples, and more!",
          "Become an expert at list and dictionary comprehensions",
          "Master built-in python functions like zip and filter",
          "Handle errors and debug code",
          "Write your own custom modules",
          "Work with files, including CSV",
        ],
      },
    },
  },
};
export default Coursesdata;

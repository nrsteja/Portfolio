import { ReactNative, OpenAI, Figma, Java, VisualParadigm, OOPS, Python, Remix, LinearRegressions, NeuralNetwork, RandomForest, OpenCV, Numpy, Tailwind, XRVision, XRVisionImage, SUTDImage, SUTD, STEng, STEngImage, ROS, LiDAR, Linux, Unreal, SolidWorks, TensorFlow, CNN, Yolo, GroceryGrabber, HotelBooking, PremierLeague, HandGesture, PineappleStudios, HTML, CSS, ROSICON, TensorFlowIcon, ML, JavaScript, MobDev, Django, Mongo, MySQL, PostgreSQL, ExpressJS, SWE, Cpp, PyTorch, Word, Excel, Git, PowerPoint, Matlab, R, C, YoloIcon, WebDev, NodeJS, Knime, Tableau, Pandas, LinuxIcon, SolidWorksIcon, CREO, TypeScript } from '../../assets/components/Icons/Icons.jsx';
import photo from "./../images/photo.jpeg"
export const projectsData = [
    { 
      name: 'Mobile Application', domain: 'UI/UX Development', image: <GroceryGrabber />, level: "BrainHacks Hackathon", conducted: "DSTA", duration: "1 week", topic: 'Grocery Grabber', concepts: [{ name: "React Native", logos: <ReactNative /> }, { name: "OpenAI", logos: <OpenAI /> }, { name: "Figma", logos: <Figma /> }], repoLink: 'https://github.com/nrsteja/BrainHacks-Code-Exp', videoLink: 'https://youtu.be/hyBbfs9dUL4',
      description: "Collaborated on the development of GroceryGrabber, a mobile app designed to combat food waste by connecting consumers with supermarkets to track expiring products. Leveraged technologies such as React Native for app development, OpenAI’s GPT-4 for real-time receipt scanning, and Google Maps for displaying nearby supermarkets. Utilized Figma for wireframing and solidifying the app’s architecture. The app’s features include dynamic inventory management and recipe generation based on available ingredients" 
    },
    { 
      name: 'Camp Reservation System', domain: 'Object Oriented Program', image: <HotelBooking />, level: "University Project", conducted: "NTU", duration: "5 weeks", topic: 'Book Quick', concepts: [{ name: "Java", logos: <Java /> }, { name: "OOPS", logos: <OOPS /> }, { name: "Visual Paradigm", logos: <VisualParadigm /> }], repoLink: 'https://github.com/nrsteja/Camp-Management-System',
      description: "This camp reservation system project delves into the integration of object-oriented programming (OOP) and design principles to create a robust Camp Management application in Java Programming Language. Our detailed report outlines the methodology, highlights key test cases, and reflects our learning process throughout the development journey." 
    },
    { 
      name: 'Football Prediction', domain: 'DataSciene Analysis', image: <PremierLeague />, level: "University Project", conducted: "NTU", duration: "6 weeks", topic: 'Premier League', concepts: [{ name: "Linear Regression", logos: <LinearRegressions /> }, { name: "Neural Networks", logos: <NeuralNetwork /> }, { name: "Random Forest", logos: <RandomForest /> }], repoLink: "https://github.com/nrsteja/Premier-League-Table-Prediction", videoLink: 'https://youtu.be/5X2Aj6Evjow',
      description: "Premier League prediction project employed linear regression, neural networks, and random forest models to predict football team performance for the Champions League and Europa League. We discovered that home advantage, goal difference, and recent form play pivotal roles in match outcomes. This project enriched our expertise in ML for sports analytics, underscoring the significance of model selection and performance evaluation." 
    },
    { 
      name: 'Hand Gesture Remote', domain: 'AI Models', image: <HandGesture />, level: "Exploring AI Project", conducted: "XRVision", duration: "2 week", topic: 'Volume Controller', concepts: [{ name: "Python", logos: <Python /> }, { name: "OpenCV", logos: <OpenCV /> }, { name: "Numpy", logos: <Numpy /> }], 
      description: "The Hand Gesture Volume Controller project leverages computer vision and machine learning techniques to adjust device volume based on hand gestures. Implemented with Python, OpenCV, and NumPy, it detects and interprets hand movements, enabling users to control audio settings intuitively without physical contact. This innovative system enhances user interaction through gesture-based control technology." 
    },
    { 
      name: 'Recommendation System', domain: 'FullStack Development', image: <PineappleStudios />, level: "University Project", conducted: "NTU", duration: "10 weeks", topic: 'Pineapple Studios', concepts: [{ name: "React", logos: <ReactNative /> }, { name: "Remix", logos: <Remix /> }, { name: "Tailwind", logos: <Tailwind /> }], technologies: [{ name: "ROS", logos: <ROS /> }, { name: "LiDAR", logos: <LiDAR /> }, { name: "Linux", logos: <Linux /> }], repoLink: 'https://github.com/nrsteja/Pineapple-Studios-Recommendation-System', videoLink: 'https://www.youtube.com/watch?v=W-0Sp5LloUM',
      description: "Pineapple Studios is a full-stack recommendation system akin to a blend of Google Books, Netflix, and Spotify. It leverages Tailwind, Remix, React, and TypeScript for its frontend and MySQL for database management. The recommendation engine utilizes OpenAI, NumPy, Pandas, and scikit-learn to provide personalized suggestions on movies, books and songs based on user preferences." 
    }
  ]
export const experiencesData = [
    { 
      name: 'ST Engineering',
      domain: 'Software Engineer',
      role: 'Lidar Drone Software',
      duration: '3 months', 
      projects: '1 project', 
      from: '5/24', to: '8/24', 
      image: <STEngImage />, icon: <STEng />, 
      technologies: [{ name: "ROS", logos: <ROS /> }, { name: "LiDAR", logos: <LiDAR /> }, { name: "Linux", logos: <Linux /> }], 
      description: "As a software engineer intern at ST Engineering's Networks and Sensors department, I developed user-friendly software to automate and simulate drone operations using LiDAR technology on the ROS platform. My work streamlined tasks for on-site engineers, enabling efficient scene loading, saving, visualization in RViz, and background filtering for drone detection, enhancing Singapore's defense capabilities." 
    },
    { 
      name: 'SUTD', 
      domain: 'Research Assistant', 
      role: 'UI/UX & ROS Software', 
      duration: '7 months', 
      projects: '3 project', 
      from: '5/23', to: '8/23', 
      image: <SUTDImage />, icon: <SUTD />, 
      technologies: [{ name: "UnrealEngine", logos: <Unreal /> }, { name: "Python", logos: <Python /> }, { name: "SolidWorks", logos: <SolidWorks /> }], 
      description: "I interned at SUTD twice. First, as a drone software engineer, I enhanced drone efficiency using TensorFlow by testing various optimizers like Adam, AdaGrad, Gradient Descent, and AdaDelta. In my second internship as a software engineer, I developed simulations using Unreal Engine's node connectivity to test drones in various atmospheric conditions before real-world trials." 
    },
    { 
      name: 'XR Vision', 
      domain: 'AI/ML Engineer', 
      role: 'AI/ML Computer Vision', 
      duration: '10 months', 
      projects: '4 project', 
      from: '8/21', to: '5/22', 
      image: <XRVisionImage />, icon: <XRVision />, 
      technologies: [{ name: "YoloV4PA", logos: <Yolo /> }, { name: "TensorFlow", logos: <TensorFlow /> }, { name: "CNN", logos: <CNN /> }], 
      description: "I processed diverse datasets to extract insights and information, focusing on data segmentation and model training for improved machine learning efficiency. Using YoloV4PA, I specialized in object detection and model development. I cleaned, modeled, and tested datasets for accuracy, gaining experience in image processing and semantic segmentation. I collaborated on government projects, including Israel helmet detection, Changi Airport runway parking, Singapore prison fight detection, and port container detection." 
    },
]
//🌟
export const skillsData = [
  {name:'Web Development', icon:<WebDev/>},
  {name:'HTML', icon:<HTML/>},
  {name:'CSS', icon: <CSS />},
  {name:'JavaScript', icon:<JavaScript/>},
  {name:'TypeScript', icon:<TypeScript/>},
  {name:'React', icon:<ReactNative/>},
  {name:'React Native', icon:<ReactNative/>},
  {name:'Tailwind', icon:<Tailwind />},
  {name:'Mobile Development', icon:<MobDev/>}, 
  {name:'Django', icon:<Django/>},
  {name:'MongoDB', icon:<Mongo/>},
  {name:'MySQL', icon:<MySQL/>},
  {name:'PostgreSQL', icon: <PostgreSQL/>},
  {name:'Node.js', icon:<NodeJS/>},
  {name:'ExpressJS', icon: <ExpressJS/>},
  {name:'Software Engineering', icon:<SWE/>},
  {name:'Python', icon:<Python/>},
  {name:'C', icon:<C/>},
  {name:'Java', icon:<Java/>},
  {name:'C++', icon:<Cpp/>},
  {name:'R', icon:<R/>},
  {name:'Matlab', icon:<Matlab/>},
  {name:'ROS', icon:<ROSICON/>},
  {name:'Machine Learning', icon:<ML/>},
  {name:'Knime', icon:<Knime/>},
  {name:'Tableau', icon:<Tableau/>},
  {name:'YoloV4PA', icon:<YoloIcon />},
  {name:'PyTorch', icon:<PyTorch/>},
  {name:'TensorFlow', icon:<TensorFlowIcon />},
  {name:'Numpy', icon:<Numpy />},
  {name:'Pandas', icon:<Pandas/>},
  {name:'OpenCV', icon:<OpenCV />},
  {name:'Git', icon:<Git/>},
  {name:'Figma', icon:<Figma/>},
  {name:'Linux', icon:<LinuxIcon/>},
  {name:'Power Point', icon:<PowerPoint/>},
  {name:'Word', icon:<Word/>},
  {name:'Excel', icon:<Excel/>},
  {name:'SolidWorks', icon:<SolidWorksIcon/>},
  {name:'CREO', icon:<CREO/>},
];

export const awardsData = [
  {
    name: "Hackathon Finalists",
    description: "Reached the finals and represented NTU in the prestigious national BrainHacks Hackathon competition held by DSTA, Singapore 2024."
  },
  {
    name: "Dean's List",
    description: "Recognized for outstanding academic achievement, securing the top position in my NTU Computer Engineering cohort in 2023."
  },
  {
    name: "Subjective Award",
    description: "Recognized for outstanding performance in core module at Temasek Polytechnic, 2021."
  },
  {
    name: "Student of the Year",
    description: "Honored for exemplary academic and extracurricular excellence in the year 2015."
  },
];


export const aboutMeData = {
  description: "As a final-year Computer Engineering student at Nanyang Technological University, Singapore, I am passionate and driven with a strong foundation in programming, machine learning, and data analysis. I've consistently excelled in both academic and professional settings, demonstrating my commitment to pushing the boundaries of technology. From topping my cohort to developing innovative projects, my journey showcases my dedication to advancing technological solutions. Explore my portfolio to discover my projects, skills, and the unique blend of creativity and technical expertise I bring to every endeavor",
  image: photo,
};


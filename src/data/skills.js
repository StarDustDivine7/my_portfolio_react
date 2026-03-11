import { 
  SiFlutter, 
  SiDart, 
  SiAndroid, 
  SiApple,
  SiFirebase,
  SiGooglecloud
} from 'react-icons/si';
import { 
  FaCode, 
  FaServer, 
  FaLock, 
  FaPlug, 
  FaBrain, 
  FaRobot 
} from 'react-icons/fa';

export const skillCategories = [
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Android", icon: SiAndroid },
      { name: "iOS", icon: SiApple }
    ]
  },
  {
    category: "State Management",
    skills: [
      { name: "GetX", icon: FaCode },
      { name: "Riverpod", icon: FaCode },
      { name: "Provider", icon: FaCode },
      { name: "BLoC", icon: FaCode }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "REST APIs", icon: FaServer },
      { name: "Firebase", icon: SiFirebase },
      { name: "Firestore", icon: SiFirebase },
      { name: "Authentication", icon: FaLock },
      { name: "Socket.IO", icon: FaPlug },
      { name: "WebSockets", icon: FaPlug }
    ]
  },
  {
    category: "Cloud & AI",
    skills: [
      { name: "Google Cloud Platform", icon: SiGooglecloud },
      { name: "LLM Integration", icon: FaBrain },
      { name: "RAG Systems", icon: FaRobot }
    ]
  }
];

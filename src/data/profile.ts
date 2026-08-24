export const profile = {
  name: 'Godwin Edzer E',
  email: 'edzer40514@gmail.com',
  github: 'https://github.com/godwinedzer',
  linkedin: 'https://www.linkedin.com/in/godwin-edzer-e',
  resumeUrl: '/resume/Godwin_Edzer_E_Resume_FS.pdf',
}

export type Project = {
  number: string
  name: string
  label: string
  date: string
  description: string
  stack: string[]
  features: string[]
  github?: string
  metrics?: string[]
  featured?: boolean
}

export const projects: Project[] = [
  { number: '01', name: 'MediBrain AI — Intelligent Disease Prediction & Drug Recommendation System', label: 'FEATURED · AI / ML', date: 'Dec 2025 – Jun 2026', description: 'Developed a disease prediction and drug recommendation application integrating a React.js frontend, Node.js/Express.js backend, Flask-based machine-learning service, and MongoDB. Implemented JWT authentication and REST APIs, with XGBoost used for disease prediction and SHAP used to provide model explainability.', stack: ['React.js', 'Node.js', 'Express.js', 'Python', 'Flask', 'MongoDB', 'XGBoost', 'SHAP'], features: ['JWT authentication and REST APIs', 'XGBoost disease prediction', 'SHAP model explainability', 'Integrated frontend, backend, database, and ML service'], metrics: ['Accuracy: 98.37%', 'Precision: 97.8%', 'Recall: 97.5%', 'F1-score: 97.6%', 'Top-3 diagnostic accuracy: 99.63%'], github: 'https://github.com/godwinedzer/MediBrain-AI-Intelligent-Disease-Prediction-Drug-Recommendation-System', featured: true },
  { number: '02', name: 'Health Care Chatbot', label: 'WEB APPLICATION', date: 'Jan 2025 – Apr 2025', description: 'Built a healthcare chatbot application with a React.js frontend and Node.js/Express.js backend, using MongoDB for data management and Firebase for authentication. Implemented REST APIs and CRUD operations for application data and developed the user interface with React.js and Tailwind CSS.', stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs', 'Tailwind CSS'], features: ['Firebase authentication', 'REST APIs', 'MongoDB CRUD operations', 'React interface'] },
  { number: '03', name: 'Recipe Discovery Platform', label: 'WEB APPLICATION', date: 'Jan 2024 – May 2024', description: 'Built a recipe discovery and search platform using React.js, Express.js, and MongoDB. Implemented recipe search and filtering functionality, with REST APIs used to retrieve and manage recipe data and a React-based interface for presenting results.', stack: ['React.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'], features: ['Recipe search', 'Filtering functionality', 'MongoDB recipe collections', 'REST APIs for recipe retrieval'] },
  { number: '04', name: 'ZapGamepad — PadX', label: 'SYSTEMS / MOBILE', date: 'Personal Project', description: 'Built a real-time virtual gamepad system that uses an Android React Native interface and a Rust Windows host server to stream controller input over UDP.', stack: ['React Native', 'Expo', 'Rust', 'Tokio', 'UDP', 'ViGEmBus'], features: ['Binary UDP input protocol', 'QR code pairing', 'Virtual Xbox 360 controller emulation', 'Fail-safe input neutralization'], github: 'https://github.com/godwinedzer/GamepadX' },
]

export const skillGroups = {
  Frontend: ['React.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Database: ['MongoDB', 'MySQL'],
  Programming: ['JavaScript', 'Python', 'Java'],
  'Machine Learning / AI': ['Machine Learning', 'XGBoost', 'SHAP'],
  'Development Stack': ['MERN Stack', 'Firebase'],
}

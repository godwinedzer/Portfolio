export const profile = {
  name: 'Godwin Edzer E',
  email: 'edzer40514@gmail.com',
  github: 'https://github.com/godwinedzer',
  linkedin: 'www.linkedin.com/in/godwin-edzer-e',
  resumeUrl: '/resume/Godwin_Edzer_E_Resume.pdf',
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
  { number: '01', name: 'MediBrain AI — Intelligent Disease Prediction & Drug Recommendation System', label: 'FEATURED · AI / ML', date: 'Dec 2025 – Jun 2026', description: 'Developed an AI-assisted clinical decision support application using React.js, Node.js, Flask, MongoDB, XGBoost, and SHAP.', stack: ['React.js', 'Node.js', 'Express.js', 'Python', 'Flask', 'MongoDB', 'XGBoost', 'SHAP'], features: ['JWT authentication and REST APIs', 'XGBoost disease prediction', 'SHAP model explainability', 'Integrated frontend, backend, database, and ML service'], metrics: ['Accuracy: 98.37%', 'Precision: 97.8%', 'Recall: 97.5%', 'F1-score: 97.6%', 'Top-3 diagnostic accuracy: 99.63%'], featured: true },
  { number: '02', name: 'Health Care Chatbot', label: 'WEB APPLICATION', date: 'Jan 2025 – Apr 2025', description: 'Built a healthcare chatbot using React.js, Node.js, Express.js, MongoDB, and Firebase.', stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs', 'Tailwind CSS'], features: ['Firebase authentication', 'REST APIs', 'MongoDB CRUD operations', 'React interface'] },
  { number: '03', name: 'Recipe Discovery Platform', label: 'WEB APPLICATION', date: 'Jan 2024 – May 2024', description: 'Built a recipe search platform using React.js and Express.js.', stack: ['React.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'], features: ['Filtering functionality', 'MongoDB recipe collections', 'REST APIs for recipe retrieval'] },
]

export const skillGroups = {
  Frontend: ['React.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Database: ['MongoDB', 'MySQL'],
  Programming: ['JavaScript', 'Python', 'Java'],
  'Machine Learning / AI': ['Machine Learning', 'XGBoost', 'SHAP'],
  'Development Stack': ['MERN Stack', 'Firebase'],
}

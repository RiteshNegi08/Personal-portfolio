export const Bio = {
  name: "Ritesh Negi",
  roles: ["Test Automation Engineer", "SDET", "Quality Engineer"],
  description:
    "I build scalable test automation frameworks and reliable quality engineering solutions with Playwright, TypeScript, AI-augmented testing, and CI/CD pipelines.",
  phone: "+91 9760292663",
  email: "ritesh.negi.948@gmail.com",
  github: "https://github.com/RiteshNegi08",
  linkedin: "https://linkedin.com/in/ritesh-negi-8sep2001",
  resume: "https://drive.google.com/file/d/1QW4DAsL1VgRCwt01ZOFs_CFqUY5ct1QP/view?usp=sharing",
};

export const skills = [
  {
    title: "Test Automation",
    skills: ["Playwright", "Selenium WebDriver", "WebdriverIO"],
  },
  {
    title: "Programming Languages",
    skills: ["TypeScript", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Testing Frameworks",
    skills: ["Cucumber", "TestNG", "JUnit"],
  },
  {
    title: "API Testing",
    skills: ["Playwright", "Postman", "REST Assured"],
  },
  {
    title: "CI/CD & Version Control",
    skills: ["GitHub Actions", "Git", "GitHub"],
  },
  {
    title: "Data & Runtime",
    skills: ["MSSQL Server", "MongoDB", "Node.js", "Maven"],
  },
  {
    title: "Test Management",
    skills: ["Azure DevOps"],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Quality Engineer",
    company: "LTM",
    companyLogo: "https://www.ltm.com/content/dam/ltimcorporatewebsite/refresh-images/LTM-Logo.svg",
    date: "February 2025 - Present",
    location: "Onsite",
    project: "Health & Benefits Broker - Marsh US",
    projectLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z9tp-9s6m9oFy94db4UUXzljtqiYeYB7qKtqNMFKBIyXAgT5ePEmLtRF&s=10",
    desc: [
      "Contributed to the stability, accuracy, and functionality of a Health & Benefits Broker platform in the insurance domain.",
      "Tested policy administration, renewals, benefits management, billing, client onboarding, premium validation, and critical business journeys.",
      "Performed functional, smoke, regression, UI, and end-to-end testing; analyze requirements and acceptance criteria; design test scenarios, test data, and traceability mappings.",
      "Tracked defects in Azure DevOps and collaborate with developers, business analysts, and product teams to validate fixes.",
      "Participated in sprint planning, backlog refinement, daily stand-ups, sprint reviews, and retrospectives.",
      "Migrated 200+ legacy Selenium (C#) automation test cases to Playwright with TypeScript, reducing regression execution time by approximately 45% and improving framework maintainability and stability.",
      "Reported a critical billing defect during functional testing that was resolved before production.",
    ],
    metrics: [
      { value: "200+", label: "Legacy test cases migrated" },
      { value: "~45%", label: "Regression time reduction" },
      { value: "50%", label: "Increased Test Coverage for Critical Billing and Other Funtional Modules" },
      { value: "85%", label: "Reduced Production Regression Issues and Minimized Customer Impact" },
      { value: "3-4hrs", label: "Saved hours of manual testing time per release" },
      { value: "100%", label: "Data validation accross product configurations" },
    ],
    skills: [
      "Playwright",
      "TypeScript",
      "Selenium (C#)",
      "Azure DevOps",
      "MSSQL Server",
      "Github Actions",
      "Functional Testing",
      "Regression Testing",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Graphic Era Hill University",
    image: "https://gehu.ac.in/assets/images/geu-white-de3bfd09.svg",
    date: "August 2020 - July 2024",
    grade: "Average SGPA: 8.21",
    desc: "",
    degree: "Bachelor of Technology - Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "HBBCore - Playwright + TypeScript BDD Automation Framework",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdtO5nN9PKcg8IGZqTIkvQbBg2kHskGENmoLa5azhEw&s=10",
    domain: "Insurance / Health & Benefits",
    date: "End-to-end UI automation",
    description:
      "A scalable end-to-end automation framework designed for Health & Benefits business workflows.",
    tags: ["Playwright", "TypeScript", "Cucumber", "GitHub Actions", "JSON", "HTML Reporting"],
    workflows: ["Authentication", "Product management", "Billing", "Census upload", "End-to-end business workflows"],
    features: [
      "Reusable fixtures, modular utilities, parallel execution, and cross-browser testing",
      "Environment-specific configuration, authentication state reuse, and dynamic locator strategies",
      "Automatic screenshots and Cucumber reporting integrated with GitHub Actions CI/CD",
      "Custom HTML regression dashboard generated from Cucumber JSON reports, replacing manual Excel reporting",
      "Reusable JSON validation utility with configurable field mappings, reducing manual assertions across 500+ fields",
    ],
  },
  {
    id: 1,
    title: "Target - Selenium Hybrid Automation Framework",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/960px-Target_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    domain: "Retail & E-commerce",
    date: "UI and workflow automation",
    description:
      "A hybrid test automation framework using industry-standard practices for retail and e-commerce workflows.",
    tags: ["Java", "Selenium WebDriver", "TestNG", "Cucumber", "Maven", "Selenium Grid", "GitHub Actions", "Extent Reports"],
    workflows: ["Authentication", "Product search and filtering", "Shopping cart", "Checkout", "Order confirmation"],
    features: [
      "Page Object Model and reusable utilities",
      "Data-driven testing with Excel-based test data",
      "Parallel cross-browser execution with Selenium Grid",
      "Retry logic, explicit waits, screenshots, logging, and Extent Reports",
      "GitHub Actions integration",
    ],
  },
  {
    id: 2,
    title: "EaseMyTrip - Selenium Page Object Model Framework",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/EaseMyTrip_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    domain: "Travel & Tourism",
    date: "Travel booking workflow automation",
    description:
      "A Page Object Model-based automation framework for core travel booking workflows.",
    tags: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Excel", "Extent Reports"],
    workflows: ["User login", "Flight search", "Traveller details", "Fare selection", "Booking validation"],
    features: [
      "Reusable page classes and data-driven test scenarios",
      "Explicit waits, TestNG parameterization, and test grouping",
      "Assertions, Extent Reports, and screenshot capture",
      "Git and GitHub version control",
    ],
  },
];

export const expertise = [
  { title: "UI Automation", description: "Playwright, Selenium" },
  { title: "Functional Testing", description: "Requirement analysis, test case design, functional validation" },
  { title: "Regression Testing", description: "Smoke, regression, UI, and end-to-end testing" },
  { title: "API Testing", description: "Postman, REST Assured" },
  { title: "BDD", description: "Cucumber and Gherkin" },
  { title: "Framework Development", description: "Reusable fixtures, utilities, page objects, configuration management" },
  { title: "CI/CD", description: "GitHub Actions and automated regression execution" },
  { title: "Cross-Browser Testing", description: "Playwright browsers and Selenium Grid" },
  { title: "Defect Management", description: "Azure DevOps" },
  { title: "Database Validation", description: "MSSQL Server and MongoDB" },
];

export const certifications = [
  {
    title: "GitHub Copilot - The Complete Guide",
    provider: "Udemy",
    date: "March 2026",
    url: "https://www.udemy.com/certificate/UC-9227d243-a785-41b9-8782-f8845d129d5b/",
    preview: "https://udemy-certificate.s3.amazonaws.com/image/UC-9227d243-a785-41b9-8782-f8845d129d5b.jpg",
  },
  {
    title: "Prompt Engineering: Getting Future Ready",
    provider: "Udemy",
    date: "July 2025",
    url: "https://www.udemy.com/certificate/UC-57c170aa-1281-472e-a760-c99db642e60e/",
    preview: "https://udemy-certificate.s3.amazonaws.com/image/UC-57c170aa-1281-472e-a760-c99db642e60e.jpg",
  },
  {
    title: "Playwright: Web Automation Testing from Zero to Hero",
    provider: "Udemy",
    date: "April 2025",
    url: "https://www.udemy.com/certificate/UC-3987db97-5527-495a-a419-2194571ab521/",
    preview: "https://udemy-certificate.s3.amazonaws.com/image/UC-3987db97-5527-495a-a419-2194571ab521.jpg",
  },
  {
    title: "WebDriverIO + Node.js - JavaScript UI Automation from Scratch",
    provider: "Udemy",
    date: "March 2025",
    url: "https://www.udemy.com/certificate/UC-b8e5632e-b039-47dc-8e10-23670cd83254/",
    preview: "https://udemy-certificate.s3.amazonaws.com/image/UC-b8e5632e-b039-47dc-8e10-23670cd83254.jpg",
  },
];

export const achievements = [
  {
    title: "SDET Performance Recognition",
    description: "Recognized among the highest-performing trainees in the SDET batch.",
  },
  {
    title: "Client Appreciation",
    description: "Received client appreciation for rapidly onboarding to the project and contributing within a short timeframe.",
  },
  {
    title: "Shooting Star Award - LTM",
    description: "Recognized for outstanding performance and contributions to AI-augmented quality engineering and delivery excellence.",
  },
  {
    title: "College Cricket",
    description: "Represented the college cricket team in an inter-college tournament.",
  },
];

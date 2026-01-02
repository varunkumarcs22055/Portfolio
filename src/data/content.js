// All portfolio content data
export const personalInfo = {
    name: "Varun Kumar Thakur",
    title: "Research-Focused Software Engineer",
    tagline: "AI • Computer Vision • Backend Systems",
    location: "Nagpur, Maharashtra",
    phone: "+91 7758956282",
    email: "varunkumarthakur021@gmail.com",
    social: {
        linkedin: "https://www.linkedin.com/in/varunkumar-thakur-17884328a",
        github: "https://github.com/varunkumarcs22055",
        leetcode: "https://leetcode.com/u/varunkumarthakur021/"
    },
    about: `Research-focused Computer Science Engineer (CGPA: 8.76) specializing in AI/ML, Computer Vision, and Backend Engineering. Published researcher in IEEE and i-manager journals. Experienced in building scalable CNN-LSTM architectures and optimizing backend workflows during internships. Proven track record in national hackathons (IIT Delhi, Samsung) and solving ambiguous engineering problems.`
};

export const education = {
    institution: "S. B. Jain Institute of Technology, Management & Research",
    degree: "B.Tech in Computer Science and Engineering",
    cgpa: "8.76 / 10.0",
    duration: "2022 – 2026",
    location: "Nagpur, MH"
};

export const skills = {
    languages: ["Python (Advanced)", "C++", "Java", "SQL"],
    data: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
    aiml: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "NLTK"],
    architectures: ["CNN", "LSTM", "ResNet50", "InceptionV3", "Transformers", "GenAI"],
    web: ["React.js", "Flask", "Streamlit", "Django", "REST APIs", "Gradio"],
    tools: ["Git/GitHub", "VS Code", "PostgreSQL", "Linux"]
};

export const experience = [
    {
        id: 1,
        company: "Machdeal Pvt. Ltd.",
        role: "Web Development Intern",
        duration: "Jun 2024 – Aug 2024",
        location: "Nagpur, MH",
        highlights: [
            "Developed full-stack modules using Java and React; optimized database interactions for faster data retrieval",
            "Designed REST APIs and reduced latency by 40% via SQL indexing and connection pooling",
            "Integrated PostgreSQL using optimized JDBC queries and designed modular REST APIs with clean MVC architecture"
        ],
        technologies: ["Java", "React", "PostgreSQL", "REST APIs", "JDBC", "Servlets", "JSP"]
    },
    {
        id: 2,
        company: "The Jain International School",
        role: "Web Development Intern",
        duration: "Aug 2023 – Apr 2024",
        location: "Nagpur, MH",
        highlights: [
            "Managed school database systems; migrated legacy workflows to a modular MVC architecture",
            "Enhanced API efficiency by 30% using algorithmic query restructuring and REST best practices",
            "Built scalable backend modules using Java, JDBC, Servlets, JSP, and PostgreSQL"
        ],
        technologies: ["Java", "PostgreSQL", "MVC", "REST APIs", "SQL Optimization"]
    }
];

export const research = [
    {
        id: 1,
        title: "Comprehensive Deepfake Detection: A Comparative Study",
        venue: "IEEE PuneCon 2025",
        status: "Accepted",
        image: "/research-ieee.png",
        description: "Lead Author on a study comparing static vs. temporal forgery. Developed a Hybrid CNN-LSTM model achieving 91.5% accuracy by analyzing temporal inconsistencies using ResNet50 (Spatial) and LSTM (Temporal).",
        accuracy: "91.5%",
        technologies: ["CNN-LSTM", "ResNet50", "Temporal Analysis", "TensorFlow"],
        link: null,
        github: "https://github.com/varunkumarcs22055/Deepfake-Detection"
    },
    {
        id: 2,
        title: "Advanced Deepfake Image Detection Framework",
        venue: "i-manager's Journal of Image Processing (Vol. 12)",
        status: "Published",
        image: "/research-imanager.png",
        description: "Engineered an Ensemble Model using InceptionV3 and Xception via Transfer Learning. Achieved 94.50% accuracy on 19k+ images using rigorous class balancing and preprocessing techniques.",
        accuracy: "94.5%",
        technologies: ["InceptionV3", "Xception", "Transfer Learning", "Ensemble Methods"],
        link: "https://imanagerpublications.com/article/22384",
        github: "https://github.com/varunkumarcs22055/Deepfake-Detection"
    }
];

export const projects = [
    {
        id: 1,
        title: "Truth Shield",
        subtitle: "Deepfake Detection System",
        featured: true,
        image: "/project-truth-shield.png",
        description: "Award-winning capstone project with dual-stream ResNet50 + LSTM pipeline achieving 91.5% accuracy. Engineered real-time OpenCV preprocessing and validated technical viability at National Innovation Forums (IIT Delhi, BITS Pilani) against varied video formats.",
        technologies: ["Python", "TensorFlow", "PyTorch", "ResNet50", "LSTM", "OpenCV", "Streamlit"],
        liveDemo: "https://truthshieldai.vercel.app/",
        github: "https://github.com/varunkumarcs22055/Deepfake-Detection",
        duration: "Jan 2025 – Present",
        role: "Team Lead"
    },
    {
        id: 2,
        title: "AgriTech Intelligence Platform",
        subtitle: "Smart Farming Solution",
        featured: true,
        image: "/project-agritech.png",
        description: "Engineered a full-stack system achieving 99.3% accuracy using Random Forest trained on 246k+ agricultural records. Enabled real-time recommendation of 22+ crop varieties by analyzing 7 soil parameters with interactive visualization.",
        technologies: ["Python", "React.js", "Node.js", "Flask", "Scikit-Learn", "Random Forest", "Pandas"],
        github: "https://github.com/varunkumarcs22055/Crop-Prediction",
        duration: "Oct 2024"
    },
    {
        id: 3,
        title: "Secure Authentication System",
        subtitle: "Biometric Security",
        featured: true,
        image: "/project-secure-auth.png",
        description: "Developed a 100% offline biometric authentication system using 6-algorithm feature fusion (LBP, HOG), achieving verification speeds of <0.5 seconds. Implemented anti-spoofing liveness detection via texture analysis and CLAHE processing.",
        technologies: ["Python", "OpenCV", "Django", "MediaPipe", "dlib"],
        github: "https://github.com/varunkumarcs22055/Recognition-System",
        duration: "Aug 2024"
    },
    {
        id: 4,
        title: "AI Developer Chat App",
        subtitle: "Real-time Messaging",
        featured: false,
        image: "/project-chat-app.png",
        description: "Developed a scalable messaging backend with real-time chat, session management, and secure user authentication. Optimized database queries and connection pooling to reduce message latency by 30%.",
        technologies: ["Java", "Servlets", "JSP", "JDBC", "PostgreSQL", "React.js"],
        github: "https://github.com/varunkumarcs22055"
    }
];


export const achievements = [
    {
        id: 1,
        title: "SBI Youth Ideathon 2025",
        subtitle: "National Winner – Top 15",
        description: "Selected from 15,000+ teams at IIT Delhi",
        prize: "INR 20,000",
        icon: "🏆",
        highlight: true,
        certificateLink: "https://github.com/varunkumarcs22055/Certificates"
    },
    {
        id: 2,
        title: "Samsung Solve for Tomorrow 2025",
        subtitle: "Top 100 India",
        description: "Selected from 20,000+ teams for impactful tech solutions",
        icon: "🌟",
        highlight: true,
        certificateLink: "https://github.com/varunkumarcs22055/Certificates"
    },
    {
        id: 3,
        title: "Hack Wack 2.0",
        subtitle: "2nd Rank",
        description: "Top 3 out of 300+ participants at SB Jain, Nagpur",
        prize: "INR 8,000",
        icon: "🥈",
        certificateLink: "https://github.com/varunkumarcs22055/Certificates"
    },
    {
        id: 4,
        title: "HackAIthon 2025",
        subtitle: "Winner",
        description: "Azure Developer Community at YCCE, Nagpur",
        icon: "🏅",
        certificateLink: "https://github.com/varunkumarcs22055/Certificates"
    },
    {
        id: 5,
        title: "Google Cloud Champion",
        subtitle: "2024–25",
        description: "Google Cloud Platform certification and community recognition",
        icon: "☁️",
        certificateLink: "https://github.com/varunkumarcs22055/Certificates"
    },
    {
        id: 6,
        title: "BITS Pilani Beyond Profits",
        subtitle: "National Finalist – Top 20",
        description: "National Innovation Challenge",
        icon: "🎯",
        certificateLink: "https://github.com/varunkumarcs22055/Certificates"
    },
    {
        id: 7,
        title: "Azim Premji Social Enterprise",
        subtitle: "National Finalist",
        description: "Social Enterprise Challenge",
        icon: "💡",
        certificateLink: "https://github.com/varunkumarcs22055/Certificates"
    },
    {
        id: 8,
        title: "LeetCode Problem Solver",
        subtitle: "160+ Problems | Rating: 1406",
        description: "Consistent competitive programming practice",
        icon: "💻",
        link: "https://leetcode.com/u/varunkumarthakur021/"
    }
];

export const certifications = [
    {
        name: "DSA in Python – NPTEL",
        link: "https://github.com/varunkumarcs22055/Certificates"
    },
    {
        name: "Google Cloud Champion (2024–25)",
        link: "https://github.com/varunkumarcs22055/Certificates"
    },
    {
        name: "160+ LeetCode Problems (Max Rating: 1406)",
        link: "https://leetcode.com/u/varunkumarthakur021/"
    }
];

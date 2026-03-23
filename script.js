const coursesData = [
    {
        id: 1,
        title: "Web Development",
        instructor: "John Doe",
        duration: "8 weeks",
        rating: "4.8/5",
        reviews: 256,
        price: "₹4,999",
        description: "Learn HTML, CSS, JavaScript, React, and more.",
        curriculum: [
            "HTML5 & CSS3",
            "JavaScript ES6+",
            "React Framework",
            "APIs & Databases",
            "Deployment"
        ]
    },
    {
        id: 2,
        title: "Python Programming",
        instructor: "Jane Smith",
        duration: "6 weeks",
        rating: "4.9/5",
        reviews: 312,
        price: "₹3,999",
        description: "Master Python from basics to advanced.",
        curriculum: [
            "Python Basics",
            "Data Structures",
            "OOP",
            "Django",
            "Databases"
        ]
    },
    {
        id: 3,
        title: "Data Science",
        instructor: "Alex Brown",
        duration: "10 weeks",
        rating: "4.7/5",
        reviews: 198,
        price: "₹5,999",
        description: "Learn data analysis and machine learning.",
        curriculum: [
            "Statistics",
            "Python Libraries",
            "Data Visualization",
            "Machine Learning",
            "Projects"
        ]
    },
    {
        id: 4,
        title: "UI/UX Design",
        instructor: "Sarah Wilson",
        duration: "7 weeks",
        rating: "4.8/5",
        reviews: 275,
        price: "₹4,499",
        description: "Master design principles and prototyping.",
        curriculum: [
            "Design Principles",
            "Figma Basics",
            "Wireframing",
            "User Research",
            "Portfolio"
        ]
    },
    {
        id: 5,
        title: "Mobile App Dev",
        instructor: "Mike Johnson",
        duration: "9 weeks",
        rating: "4.6/5",
        reviews: 142,
        price: "₹5,499",
        description: "Build iOS and Android apps.",
        curriculum: [
            "React Native",
            "Flutter",
            "APIs",
            "State Management",
            "Deployment"
        ]
    },
    {
        id: 6,
        title: "Cloud Computing",
        instructor: "Emily Davis",
        duration: "8 weeks",
        rating: "4.9/5",
        reviews: 289,
        price: "₹4,799",
        description: "Master AWS, Azure, and cloud platforms.",
        curriculum: [
            "Cloud Fundamentals",
            "AWS Services",
            "Docker",
            "Kubernetes",
            "Security"
        ]
    }
];
function scrollCourses(distance) {
    const courseScroll = document.getElementById('courseScroll');
    courseScroll.scrollLeft += distance;
}
function renderCourses() {
    const courseScroll = document.getElementById('courseScroll');
    courseScroll.innerHTML = coursesData.map(course => `
        <div class="course-card">
            <h3>${course.title}</h3>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p class="course-rating">Rating: ${course.rating} (${course.reviews} reviews)</p>
            <div class="course-price">${course.price}</div>
            <p>${course.description}</p>
            <button onclick="viewDetails(${course.id})">View Details</button>
            <button class="enroll-btn" onclick="scrollToSection('login')">Enroll</button>
        </div>
    `).join('');
}
function viewDetails(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    const detailsContent = `
        <div class="course-details">
            <h3>${course.title}</h3>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Price:</strong> ${course.price}</p>
            <p><strong>Rating:</strong> ${course.rating}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <h3>Curriculum:</h3>
            <ul>
                ${course.curriculum.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <button class="enroll-btn" onclick="scrollToSection('login')" style="margin-top: 15px;">Enroll Now</button>
        </div>
    `;
    document.getElementById('courseDetailsContent').innerHTML = detailsContent;
    scrollToSection('details');
}
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function showError(input, message) {
    input.classList.add('error');
    const errorMsg = input.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('error-message')) {
        errorMsg.textContent = message;
        errorMsg.classList.add('show');
    }
}
function clearError(input) {
    input.classList.remove('error');
    const errorMsg = input.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('error-message')) {
        errorMsg.classList.remove('show');
    }
}
document.getElementById('pageLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('pageLoginEmail');
    const password = document.getElementById('pageLoginPassword');
    clearError(email);
    clearError(password);
    let isValid = true;
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Invalid email format');
        isValid = false;
    }
    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    }
    if (isValid) {
        const successMsg = document.getElementById('pageLoginSuccess');
        successMsg.textContent = `Login successful! Welcome back!`;
        successMsg.classList.add('show');
        this.reset();
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 2000);
    }
});
document.getElementById('pageRegisterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('pageRegName');
    const email = document.getElementById('pageRegEmail');
    const password = document.getElementById('pageRegPassword');
    const confirm = document.getElementById('pageRegConfirm');
    clearError(name);
    clearError(email);
    clearError(password);
    clearError(confirm);
    let isValid = true;
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Invalid email format');
        isValid = false;
    }
    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Password must be 6+ characters');
        isValid = false;
    }
    if (!confirm.value) {
        showError(confirm, 'Confirm password is required');
        isValid = false;
    } else if (password.value !== confirm.value) {
        showError(confirm, 'Passwords do not match');
        isValid = false;
    }
    if (isValid) {
        const successMsg = document.getElementById('pageRegisterSuccess');
        successMsg.textContent = `Registration successful! Welcome, ${name.value}!`;
        successMsg.classList.add('show');
        this.reset();
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 2000);
    }
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const message = document.getElementById('contactMessage');
    clearError(name);
    clearError(email);
    clearError(message);
    let isValid = true;
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Invalid email format');
        isValid = false;
    }
    if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
    }
    if (isValid) {
        const successMsg = document.getElementById('contactSuccess');
        successMsg.textContent = `Message sent! We will get back to you soon.`;
        successMsg.classList.add('show');
        this.reset();
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 3000);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
});

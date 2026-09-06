const pages = {
    "Dashboard": `
        <h1>Welcome back, Riya! 👋</h1>
        <p>Here's your academic overview.</p>

        <div class="cards">
            <div class="card">
                <h3>Attendance</h3>
                <p class="number">85%</p>
                <span>Overall attendance</span>
            </div>

            <div class="card">
                <h3>CGPA</h3>
                <p class="number">8.5</p>
                <span>Current semester</span>
            </div>

            <div class="card">
                <h3>Subjects</h3>
                <p class="number">6</p>
                <span>Current semester</span>
            </div>

            <div class="card">
                <h3>Assignments</h3>
                <p class="number">4</p>
                <span>Pending assignments</span>
            </div>
        </div>

        <div class="section">
            <h2>My Subjects</h2>
            <div class="subject-list">
                <div class="subject">
                    <strong>Data Modeling</strong>
                    <span>Attendance: 88%</span>
                </div>

                <div class="subject">
                    <strong>Engineering Mathematics</strong>
                    <span>Attendance: 82%</span>
                </div>

                <div class="subject">
                    <strong>C Programming</strong>
                    <span>Attendance: 90%</span>
                </div>

                <div class="subject">
                    <strong>Physics</strong>
                    <span>Attendance: 80%</span>
                </div>
            </div>
        </div>
    `,

    "Profile": `
        <h1>Student Profile 👤</h1>
        <p>Your personal and academic information.</p>

        <div class="section">
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> Riya</p>
            <p><strong>Student ID:</strong> STU2026AI001</p>
            <p><strong>Course:</strong> B.Tech CSE (AI & ML)</p>
            <p><strong>Semester:</strong> 1st Semester</p>
            <p><strong>Email:</strong> riya@student.edu</p>
        </div>
    `,

    "Subjects": `
        <h1>My Subjects 📚</h1>
        <p>Subjects for the current semester.</p>

        <div class="section">
            <h2>Subject List</h2>

            <div class="subject-list">
                <div class="subject">
                    <strong>Data Modeling</strong>
                    <span>Credits: 4</span>
                </div>

                <div class="subject">
                    <strong>Engineering Mathematics</strong>
                    <span>Credits: 4</span>
                </div>

                <div class="subject">
                    <strong>C Programming</strong>
                    <span>Credits: 4</span>
                </div>

                <div class="subject">
                    <strong>Physics</strong>
                    <span>Credits: 4</span>
                </div>
            </div>
        </div>
    `,

    "Attendance": `
        <h1>Attendance 📊</h1>
        <p>Subject-wise attendance record.</p>

        <div class="section">
            <h2>Attendance Details</h2>

            <div class="subject">
                <strong>Data Modeling</strong>
                <span>88%</span>
            </div>

            <div class="subject">
                <strong>Engineering Mathematics</strong>
                <span>82%</span>
            </div>

            <div class="subject">
                <strong>C Programming</strong>
                <span>90%</span>
            </div>

            <div class="subject">
                <strong>Physics</strong>
                <span>80%</span>
            </div>
        </div>
    `,

    "Assignments": `
        <h1>Assignments 📝</h1>
        <p>Track your assignments.</p>

        <div class="section">
            <h2>Assignment List</h2>

            <div class="subject">
                <strong>Data Modeling Project</strong>
                <span>Due: 10 September 2026 — Pending</span>
            </div>

            <div class="subject">
                <strong>C Programming Assignment</strong>
                <span>Due: 12 September 2026 — Pending</span>
            </div>

            <div class="subject">
                <strong>Mathematics Assignment</strong>
                <span>Submitted</span>
            </div>
        </div>
    `,

    "Timetable": `
        <h1>Timetable 🗓️</h1>
        <p>Your class schedule.</p>

        <div class="section">
            <h2>Today's Classes</h2>

            <div class="subject">
                <strong>09:00 AM — Data Modeling</strong>
                <span>Room A-201</span>
            </div>

            <div class="subject">
                <strong>11:00 AM — Mathematics</strong>
                <span>Room B-105</span>
            </div>

            <div class="subject">
                <strong>01:00 PM — C Programming</strong>
                <span>Computer Lab 1</span>
            </div>

            <div class="subject">
                <strong>03:00 PM — Physics</strong>
                <span>Room P-102</span>
            </div>
        </div>
    `,

    "Announcements": `
        <h1>Announcements 📢</h1>
        <p>Latest college updates.</p>

        <div class="section">
            <h2>Latest Notices</h2>

            <div class="announcement">
                📢 Data Modeling assignment submission tomorrow.
            </div>

            <div class="announcement">
                📢 Mid-term examination schedule released.
            </div>

            <div class="announcement">
                📢 Check your attendance regularly.
            </div>
        </div>
    `,

    "Grades": `
        <h1>Grades 🎓</h1>
        <p>Your academic performance.</p>

        <div class="section">
            <h2>Semester Performance</h2>

            <div class="subject">
                <strong>Data Modeling</strong>
                <span>Grade: A</span>
            </div>

            <div class="subject">
                <strong>Mathematics</strong>
                <span>Grade: A</span>
            </div>

            <div class="subject">
                <strong>C Programming</strong>
                <span>Grade: A+</span>
            </div>

            <div class="subject">
                <strong>Physics</strong>
                <span>Grade: B+</span>
            </div>

            <h3>Current CGPA: 8.5</h3>
        </div>
    `
};


// Get main content
const mainContent = document.querySelector(".main-content");

// Get all sidebar links
const links = document.querySelectorAll(".sidebar nav a");


// Add click event to every link
links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        // Get text of clicked link
        let pageName = link.innerText.trim();

        // Remove emoji from the beginning
        pageName = pageName.replace(/[^\w\s]/g, "").trim();

        // Show selected page
        if (pages[pageName]) {
            mainContent.innerHTML = pages[pageName];
        }

        // Change active link
        links.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });

});


// Logout
const logout = document.querySelector(".logout");

logout.addEventListener("click", function(event) {

    event.preventDefault();

    alert("You have been logged out successfully!");

});
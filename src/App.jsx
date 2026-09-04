import { useState } from 'react';
import styles from './App.module.css';

function App() {
    // 1. React State: manage all form input values using a single state object
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: ""
    });

    // State for storing the list of registered students
    const [students, setStudents] = useState([]);
    
    // State for displaying validation error messages
    const [error, setError] = useState("");

    // 2. Controlled Form Inputs: update state on every keystroke
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // Clear error when user types
    };

    // 3. Form Submission: handle form submit
    const handleSubmit = (e) => {
        // Prevent default page refresh on submit
        e.preventDefault();

        // Validate that all fields are filled
        if (!formData.name || !formData.email || !formData.course) {
            setError("Please fill out all fields.");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Save submitted student details
        setStudents([...students, formData]);

        // Clear the form after successful submission
        setFormData({ name: "", email: "", course: "" });
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Student Registration</h1>
                <p>Register a new student</p>
            </header>

            <main className={styles.main}>
                <section className={styles.formSection}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Student Name</label>
                            {/* Controlled Input */}
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            {/* Controlled Input */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="course">Course</label>
                            {/* Controlled Input */}
                            <input
                                type="text"
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                placeholder="Enter your course"
                            />
                        </div>

                        {error && <p className={styles.error}>{error}</p>}

                        <button type="submit" className={styles.submitBtn}>
                            Register Student
                        </button>
                    </form>
                </section>

                <section className={styles.listSection}>
                    <h2>Registered Students</h2>
                    {students.length === 0 ? (
                        <p className={styles.noStudents}>No students registered yet.</p>
                    ) : (
                        <div className={styles.cardsGrid}>
                            {/* 4. Display Submitted Student Details */}
                            {students.map((student, index) => (
                                <div key={index} className={styles.studentCard}>
                                    <h3 className={styles.cardTitle}>Student Details</h3>
                                    <div className={styles.cardInfo}>
                                        <p><strong>Name:</strong> {student.name}</p>
                                        <p><strong>Email:</strong> {student.email}</p>
                                        <p><strong>Course:</strong> {student.course}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;

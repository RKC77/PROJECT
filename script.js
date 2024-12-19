// Register User
function registerUser() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User registered:", userCredential.user);
            window.location.href = 'profile.html'; // Redirect to profile page
        })
        .catch((error) => {
            console.error(error.message);
        });
}

// Login User
function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User logged in:", userCredential.user);
            window.location.href = 'profile.html'; // Redirect to profile page
        })
        .catch((error) => {
            console.error(error.message);
        });
}
// Create Quiz
function createQuiz() {
    const quizName = document.getElementById('quiz-name').value;
    const quizTopic = document.getElementById('quiz-topic').value;
    const quizDuration = document.getElementById('quiz-duration').value;

    // Admin quiz data
    const quizData = {
        name: quizName,
        topic: quizTopic,
        duration: quizDuration,
        questions: [] // Will add questions after quiz creation
    };

    // Save quiz data in Firestore
    db.collection('quizzes').add(quizData)
        .then(docRef => {
            console.log("Quiz created with ID: ", docRef.id);
            window.location.href = 'quiz-details.html?id=' + docRef.id; // Redirect to quiz details page
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}


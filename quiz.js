document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", calculateScore);
});

function calculateScore() {
    let score = 0;
    let civilRightsScore = 0;
    let lgbtqScore = 0;
    let womenRightsScore = 0;

    // Correct answers mapping
    const answers = {
        q1: "b", q2: "b", q3: "b", q4: "a", q5: "a", // Civil Rights
        q6: "a", q7: "b", q8: "a", q9: "a", q10: "b", // LGBTQ+ Rights
        q11: "a", q12: "b", q13: "a", q14: "a", q15: "c" // Women's Rights
    };

    // Calculate total and category scores
    Object.keys(answers).forEach((q, index) => {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
            if (index < 5) civilRightsScore++;
            else if (index < 10) lgbtqScore++;
            else womenRightsScore++;
        }
    });

    // Generate personalized result message
    let resultMessage = `<h2>Your Score: ${score}/15</h2>`;
    if (score === 15) {
        resultMessage += "<p>You're a true advocate for all movements! You deeply understand history and its impact.</p>";
    } else if (civilRightsScore === 5) {
        resultMessage += "<p>You align closely with Civil Rights leaders like Martin Luther King Jr. and Rosa Parks!</p>";
    } else if (lgbtqScore === 5) {
        resultMessage += "<p>You relate most to LGBTQ+ advocates like Harvey Milk and Marsha P. Johnson!</p>";
    } else if (womenRightsScore === 5) {
        resultMessage += "<p>Your knowledge reflects feminist pioneers like Susan B. Anthony and Gloria Steinem!</p>";
    } else if (score >= 10) {
        resultMessage += "<p>You have a solid understanding of social movements. Keep learning and advocating!</p>";
    } else {
        resultMessage += "<p>Keep exploring history to become a stronger advocate for change!</p>";
    }

    document.getElementById("result").innerHTML = resultMessage;
}

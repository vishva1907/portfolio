import { useState } from "react";

function Contact() {
    const [message, setMessage] = useState("");
    const [showHelp, setShowHelp] = useState(false);

    return (
        <section className="contact">
            <h2>Contact Me</h2>

            <label>Message:</label>
            <br />

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
            />

            <p>You typed: {message}</p>

            <button onClick={() => setShowHelp(!showHelp)}>
                {showHelp ? "Hide Help" : "Show Help"}
            </button>

            {showHelp && (
                <p>Please enter your message in the input box above.</p>
            )}
        </section>
    );
}

export default Contact;
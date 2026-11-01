
import { useState } from "react";

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showHelp, setShowHelp] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim() || !message.trim()) {
            setStatus("Please enter your email and message.");
            return;
        }

        setStatus("Your message is ready! Contact form delivery is not configured yet.");
    };

    return (
        <section className="contact">
            <h2>Get In Touch</h2>

            <p className="subtitle">
                Have a question or want to work together? Feel free to send me a message.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="contact-email">Email Address</label>

                <input
                    id="contact-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="contact-message">Message</label>

                <textarea
                    id="contact-message"
                    rows="6"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <div className="button-group">
                    <button type="submit" className="send-btn">
                        Send Message
                    </button>

                    <button
                        type="button"
                        className="help-btn"
                        onClick={() => setShowHelp(!showHelp)}
                    >
                        {showHelp ? "Hide Help" : "Need Help?"}
                    </button>
                </div>

                {status && <p role="status">{status}</p>}

                {showHelp && (
                    <div className="help-box">
                        Enter a valid email address and your message,
                        then click <strong>Send Message</strong>.
                    </div>
                )}
            </form>
        </section>
    );
}

export default Contact;

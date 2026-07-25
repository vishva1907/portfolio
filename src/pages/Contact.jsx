import { useState } from "react";

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showHelp, setShowHelp] = useState(false);

    return (
        <section className="contact">
            <h2>Get In Touch</h2>

            <p className="subtitle">
                Have a question or want to work together? Feel free to send me a message.
            </p>

            <div className="contact-form">

                <label>Email Address</label>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Message</label>

                <textarea
                    rows="6"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <div className="button-group">
                    <button className="send-btn">
                        Send Message
                    </button>

                    <button
                        className="help-btn"
                        onClick={() => setShowHelp(!showHelp)}
                    >
                        {showHelp ? "Hide Help" : "Need Help?"}
                    </button>
                </div>

                {showHelp && (
                    <div className="help-box">
                        Please enter your email address and your message,
                        then click <strong>Send Message</strong>.
                    </div>
                )}

            </div>
        </section>
    );
}

export default Contact;
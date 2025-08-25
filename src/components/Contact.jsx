function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>

            <form id="contact-form" action="#">
                <div className="input-box">
                    <input type="text" id="name" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input-box">
                    <input type="tel" placeholder="Phone Number" />
                    <input type="text" placeholder="Subject" />
                </div>

                <textarea id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    );
}

export default Contact;

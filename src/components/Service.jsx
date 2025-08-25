function Service() {
    return (
        <section className="service reveal" id="services">
            <h2 className="heading">Services</h2>

            <div className="service-container">
                <div className="service-box">
                    <i className='bx bxs-microphone'></i>
                    <h3>Public Speaker</h3>
                    <p>Public speaking is something I'm learning to love—it helps me grow and step out of my comfort zone.
                    </p>
                    <a href="#" className="btn">Learn More</a>
                </div>

                <div className="service-box">
                    <i className='bx bxs-camera'></i>
                    <h3>Photograph</h3>
                    <p>Photography lets me freeze time and tell stories through images. Every click feels like capturing a
                        piece of emotion.</p>
                    <a href="#" className="btn">Learn More</a>
                </div>

                <div className="service-box">
                    <i className='bx bxs-brain'></i>
                    <h3>Content Creative</h3>
                    <p>I love creating content—whether it’s a post, a short video, or a design. It’s my way of sharing what
                        I love with others!</p>
                    <a href="#" className="btn">Learn More</a>
                </div>
            </div>
        </section>
    );
}

export default Service;
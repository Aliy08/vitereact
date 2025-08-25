function Home() {
    return (
        <section className="home reveal" id="home">
            <div className="home-img">
                <img src="/N1.jpg" alt="Nabila1" />
            </div>

            <div className="home-content">
                <h3>Hi</h3>
                <h1>It's <span>Nabila</span></h1>
                <h3 className="text-animation">
                    I'm a <span className="type-text"></span>
                </h3>
                <p>
                    Hi, I'm Nabila Aliyyuanda Fortun. I'm 17 years old. This is the first page of the website I created!
                    Oh, and by the way—I love watching K-Dramas. How about you?
                    Besides that, I also have some basic skills in design, photography, and videography.
                    Nice to meet u guys!
                </p>

                <div className="sosial-icons">
                    <a href="https://www.linkedin.com/in/nabila-aliyyuanda-fortun-44b4b2354/"><i
                        className='bx bxl-linkedin-square'></i></a>
                    <a href="https://www.instagram.com/nblalyyndaf_?igsh=azVvaGg0am1zYW5n"><i
                        className='bx bxl-instagram-alt'></i></a>
                    <a href="https://www.tiktok.com/@hiiialyy?_t=ZS-8yLvvAbOJmM&_r=1"><i className='bx bxl-tiktok'></i></a>
                    <a href="https://wa.me/qr/JXRPPHFBM6KQG1"><i className='bx bxl-whatsapp-square'></i></a>
                </div>

                <a href="#" className="btn">HIRE</a>
            </div>
        </section>
    );
}

export default Home;

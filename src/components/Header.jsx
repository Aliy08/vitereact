function Header() {
    return (
        <header className="header">
            <a href="#home" className="logo">Nabila
                <span>Aliyyuanda .F.</span></a>

            <i className='bx bx-menu' id="menu-icon"></i>


            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#services">Services</a>
                <a href="#certification">Certification</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;
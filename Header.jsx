function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h2>Brew and Bite Cafe</h2>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
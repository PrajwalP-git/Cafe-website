function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <h3>Cafe Delight</h3>
                        <p>Where every cup tells a story and every meal creates memories.</p>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <div className="contact-info">
                        <p><strong>📍 Address:</strong><br />
                            123 Coffee Street<br />
                            Downtown District<br />
                            City, State 12345</p>
                            
                            <p><strong>📞 Phone:</strong><br />
                            (555) 123-CAFE<br />
                            (555) 123-2233</p>
                            
                            <p><strong>✉️ Email:</strong><br />
                            hello@cafedelight.com</p>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Opening Hours</h4>
                    <div className="hours">
                        <p><strong>Monday-Friday</strong><br/>
                        7:00 AM - 9:00 PM</p>
                        
                        <p><strong>Saturday</strong><br/>
                        8:00 AM - 10:00 PM</p>
                        
                        <p><strong>Sunday</strong><br/>
                        9:00 AM - 8:00 PM</p>

                        <p className="holiday-note">
                            <em>Holiday hours may vary</em>
                        </p>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                         <a href="#" className="social-link">📘 Facebook</a>
                            <a href="#" className="social-link">📷 Instagram</a>
                            <a href="#" className="social-link">🐦 Twitter</a>
                            <a href="#" className="social-link">⭐ Yelp</a>
                    </div>

                    <div className="newsletter">
                        <h5>Stay Updated</h5>
                        <p>Get the latest news and special offers!</p>
                        <div className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="newsletter-input"
                            />
                            <button className="newsletter-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; 2025 Cafe Delight. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of service</a>
                        <a href="#">Site Map</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
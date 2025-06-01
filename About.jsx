function About(){
    return(
        <section className="about">
            <div className="container">
                <h2>About Our Cafe</h2>
                <p className="about-intro">Where passion meets flavor in every cup and bite</p>

                <div className="about-content">
                    <div className="about-text">
                        <div className="about-story">
                            <h3>Our Story</h3>
                            <p>
                                Founded in 2017, our cafe began as a dream to create a warm, welcoming space
                                where people could enjoy exceptional coffee, delicious food, & meaningful connections.
                                What started as a small corner cafe has grown into a beloved community hub,
                                serving handcrafted beverages and freshly prepared meals with love and dedication.
                            </p>
                        </div>

                        <div className="about-mission">
                            <h3>Our Mission</h3>
                            <p>
                                We believe that great food and coffee bring people together. Our mission is to 
                                source the finest ingredients, support local suppliers, and create an atmosphere
                                where every guest feels at home. From our signature blends to our chef-crafted
                                dishes, everything is made with passion and attention to detail.
                            </p>
                        </div>

                        <div className="about-values">
                            <h3>What we Stand For</h3>
                            <ul className="values-list">
                                <li><strong>Quality:</strong>Premium ingredients in every recipe</li>
                                <li><strong>Community:</strong>Supporting local farmers and suppliers</li>
                                <li><strong>Sustainability:</strong>Eco-friendly practices and packaging</li>
                                <li><strong>Hospitality:</strong>Making every visit memorable</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-image">
                        <div className="about-stats">
                            <div className="stat">
                                <h4>6+</h4>
                                <p>Years Serving</p>
                            </div>
                            <div className="stat">
                                <h4>1000+</h4>
                                <p>Happy Customers</p>
                            </div>
                            <div className="stat">
                                <h4>50+</h4>
                                <p>Menu Items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
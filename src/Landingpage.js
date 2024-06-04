// import React from 'react'
import './Landingpage.css'
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <div>
      <header>
        <div class="top-bar">
            <img src="https://www.99corporates.com/CompanyLogo/U72200KA2017PTC104914.jpg" height="50px" width="50px" ></img>
      
            <a href="#">List Your Business</a>
            <a href="#">Post a Free Ad</a>
            <Link to="/signUp" >Sign Up</Link> /{' '}
            <Link to="/signIn" >Sign In</Link>
        </div>
        <div class="hero">
            <h1>Fast, FREE way to get experts.</h1>
            <div class="search-bar">
                <select>
                    <option value="bangalore">Bangalore</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="mumbai">Hyderabad</option>
                </select>
                <input type="text" placeholder="Find your service here"></input>
                <button>GET EXPERTS</button>
            </div>
        </div>
    </header>

    <main>
        <section class="categories">
            <div class="category">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwv7XCat4V_yj_bGEBh_S1o1sd3SZne6wqyoHfW03nHkL8e7fN" alt="Home & Office"></img>
                <p>Home & Office</p>
            </div>
            <div class="category">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyCna4l60qhNMQkXry_kBG-y9ba_0Kkw5PxDmga69Rjlavgha7" alt="Home Improvement"></img>
                <p>Education & Training</p>
            </div>
            <div class="category">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWczABaZguQF3NbHOCIpATZXvpTKRTWWf8rK30WCrd43SfPbw2" alt="Home Improvement"></img>
                <p>Travelling & Transport</p>
            </div>
            <div class="category">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfgX1loKw0UOjhYQXO3kVG-xrmWkZ15AGBZnji1-f7qgpzu8vE" alt="Home Improvement"></img>
                <p>Health & Wealth</p>
            </div>
            <div class="category">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1pmQCUzDIq304LXrZMXMEUvAZtyNkloTgpcPThcdaGeOTNAKZ" alt="Home Improvement"></img>
                <p>Events</p>
            </div>
        </section>

        <section class="services">
            <h2>Education & Training</h2>
            <div class="services-container">
                <div class="service-card">
                    <img src="https://sulcdn.azureedge.net/content/hpc/entrance-exam-coaching.jpg" alt="Entrance Exam Coaching"></img>
                    <p>Entrance Exam Coaching</p>
                    <button>GET QUOTES</button>
                </div>
                <div class="service-card">
                    <img src="https://sulcdn.azureedge.net/content/hpc/distance-education.jpg" alt="Distance Education"></img>
                    <p>Distance Education</p>
                    <button>GET QUOTES</button>
                </div>
                <div class="service-card">
                    <img src="https://sulcdn.azureedge.net/content/hpc/school-tuitions.jpg" alt="School Tuitions"></img>
                    <p>School Tuitions</p>
                    <button>GET QUOTES</button>
                </div>
                <div class="service-card">
                    <img src="https://sulcdn.azureedge.net/content/hpc/job-training.jpg" alt="Job Training"></img>
                    <p>Job Training</p>
                    <button>GET QUOTES</button>
                </div>
            </div>
        </section>
        
        <section class="services">
            <h2>Home Services</h2>
            <div class="services-container">
                <div class="service-card">
                    <img src="https://sulcdn.azureedge.net/content/hpc/furniture-dealers.jpg" alt="Furniture Dealers"></img>
                    <p>Furniture Dealers</p>
                    <button>GET QUOTES</button>
                </div>
                <div class="service-card">
                    <img src="https://sulcdn.azureedge.net/content/hpc/pest-control-services.jpg" alt="Pest Control"></img>
                    <p>Pest Control</p>
                    <button>GET QUOTES</button>
                </div>
                <div class="service-card">
                    <img src="https://sulcdn.azureedge.net/content/hpc/carpenters.jpg" alt="Carpenters"></img>
                    <p>Carpenters</p>
                    <button>GET QUOTES</button>
                </div>
                <div class="service-card">
                    <img src="https://sulcdn.azureedge.net/content/hpc/domestic-help-services.jpg" alt="Domestic Help Services"></img>
                    <p>Domestic Help Services</p>
                    <button>GET QUOTES</button>
                </div>
            </div>
        </section>
        <section class="featured">
            <div class="feature">
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLbd5fH78yJbBmSEbEraChotYc2hH7akaBIdQxNa3bZloIcnnu"></img>
                <h3>All your wedding needs at your fingertips!</h3>
                <button>EXPLORE NOW</button>
            </div>
            <div class="feature">
              <img src="https://cdn.dribbble.com/userupload/12615717/file/original-510898e7ddc9ac133a0c81105df64426.jpg?crop=0x0-1366x1024&resize=400x300&vertical=center"></img>
                <h3>One-stop destination for all your home improvement needs!</h3>
                <button>EXPLORE NOW</button>
            </div>
        </section>

        <section class="study-abroad">
    <h2>Study Abroad Guide</h2>
    <div class="countries-container">
        <div class="country">
            <img src="https://sulcdn.azureedge.net/content/images/united-states-of-america-circle-flag.png" alt="Study in USA"></img>
            <p>Study in USA</p>
        </div>
        <div class="country">
            <img src="https://sulcdn.azureedge.net/content/images/united-kingdom-circle-flag.png" alt="Study in UK"></img>
            <p>Study in UK</p>
        </div>
        <div class="country">
            <img src="https://sulcdn.azureedge.net/content/images/united-states-of-america-circle-flag.png" alt="Study in USA"></img>
            <p>Study in USA</p>
        </div>
        <div class="country">
            <img src="https://sulcdn.azureedge.net/content/images/canada-circle-flag.png" alt="Study in Canada"></img>
            <p>Study in Canada</p>
        </div>
        <div class="country">
            <img src="https://sulcdn.azureedge.net/content/images/germany-circle-flag.png" alt="Study in Germany"></img>
            <p>Study in Germany</p>
        </div>
    </div>
</section>
        <section class="blog">
            <h2>We've Got it Blogged</h2>
            <div class="blog-post">
              <img src="https://sulcdn.azureedge.net/content/images/blogs/53734748-shutterstock_536108785.jpg" height="100px" width="150px"></img>
                <h3>Fully Funded PhD Programs at the University of Singapore</h3>
                <p>By John Doe | May 20, 2024</p>
                <button>READ MORE</button>
            </div>
            <div class="blog-post">
              <img src="https://sulcdn.azureedge.net/content/images/blogs/53734748-shutterstock_2157379791.jpg" height="100px" width="150px"></img>
                <h3>Fully Funded PhD Programs at the University of Singapore</h3>
                <p>By John Doe | May 20, 2024</p>
                <button>READ MORE</button>
            </div>
            <div class="blog-post">
              <img src="https://sulcdn.azureedge.net/content/images/blogs/54846187-shutterstock-2166824479-1-1.png" height="100px" width="150px"></img>
                <h3>Fully Funded PhD Programs at the University of Singapore</h3>
                <p>By John Doe | May 20, 2024</p>
                <button>READ MORE</button>
            </div>
            <div class="blog-post">
              <img src="https://media.istockphoto.com/id/1331493599/photo/shot-of-a-businessman-using-a-computer-while-working-in-a-call-center.jpg?s=1024x1024&w=is&k=20&c=Epyev20HzKLN4CFTZFJarB7e15X1PQhu9zIC77ogPZg=" height="100px" width="150px"></img>
                <h3>Fully Funded PhD Programs at the University of Singapore</h3>
                <p>By John Doe | May 20, 2024</p>
                <button>READ MORE</button>
            </div>
        </section>

        <section class="reviews">
            <h2>Our User Reviews</h2>
            <div class="review">
                <h3>Bharath Kumar</h3>
                <p>Next Gen CONSULTANTS</p>
                <p>Chartered Accountant</p>
                <button>READ ALL REVIEWS</button>
            </div>
            <div class="review">
                <h3>Mahesh</h3>
                <p>Next Gen CONSULTANTS</p>
                <p>Chartered Accountant</p>
                <button>READ ALL REVIEWS</button>
            </div>
            <div class="review">
                <h3>Suresh</h3>
                <p>Next Gen CONSULTANTS</p>
                <p>Chartered Accountant</p>
                <button>READ ALL REVIEWS</button>
            </div>
            <div class="review">
                <h3>Venkat</h3>
                <p>Next Gen CONSULTANTS</p>
                <p>Chartered Accountant</p>
                <button>READ ALL REVIEWS</button>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-categories">
            <div class="footer-category">
                <h4>Popular Categories</h4>
                <ul>
                    <li><a href="#">Coaching & Tuitions</a></li>
                    <li><a href="#">Business Services</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-cities"> 
            <h4>Cities</h4>
            <ul>
                <li><a href="#">Mumbai</a></li>
                <li><a href="#">Hyderabad</a></li>
                <li><a href="#">Bangalore</a></li>
            </ul>
        </div>
        <div class="footer-info">
            <p>© 2024 Copyright Speedy.com. All Rights Reserved.</p>
            <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
    </footer>
    </div>
  )
}
    

export default Landingpage

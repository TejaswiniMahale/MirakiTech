import React from "react";
import "./home.css"

function Home({logout}){
    return(
        <div style={{width:"100%"}}>
            <div className="navbar">
                    <div><button className="nav_element_button" style={{border: "2px solid #f55327"}} onClick={logout}>LogOut</button></div>
                <div className="nav_element">
                    <ul>
                        <li>
                            <div className="nav_element_input">
                                <img src="https://www.remoteco.com/assets/images/search_blue.svg" alt="" style={{paddingRight: "5px"}}/>
                                <input type="text" placeholder="Find Your Coach"/>
                            </div>
                        </li>
                        <li>
                            <p>
                                Remote Jobs
                            </p>
                        </li>
                        <li style={{display: "flex",gap: "10px"}}>
                            <img style={{width: "20px", verticalAlign: "middle",marginTop: "-15px"}} src="https://www.remoteco.com/assets/images/book_blue.svg" alt=""/>
                            <p>Blog</p>
                        </li>
                        <li>
                            <button className="nav_element_button" style={{border: "2px solid #f55327"}}>I WANT TO COACH</button>
                        </li>
                        <li>
                            <button className="nav_element_button" style={{border: "2px solid #f55327"}}>I WANT TO LEARN</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{position: "relative"}}>
                <div className="hero_section">
            
                    <div >
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="2000">
                            
                            <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <div className="slider_card" style={{padding: "20px",margin: "50px"}} >
                                
                                    <div >
                                        <div  className="card_flex_1">
                                            <div >
                                                <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                                </div>
                                                <div style={{marginTop: "10px"}}>
                                                    <div >
                                                        <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px",margin: "0px !important"}}>Daniela V.</p>
                                                    </div>
                                                    <div className="rating_card">
                                                        <i className="fa-sharp fa-solid fa-star"></i>
                                                        <i className="fa-sharp fa-solid fa-star"></i>
                                                        <i className="fa-sharp fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star-half-stroke"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <div style={{display:"flex" , gap:"5px"}}>
                                                        <p className="small_text" style={{margin: "5px !important"}}>Hourly rate :</p>
                                                        <p className="small_bold_text" style={{margin: "5px !important"}}>$10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                            <div>
                                                <button className="view_button" style={{width: "40%"}}>
                                                    BOOK NOW
                                                </button>
                                                <button className="view_button" style={{width: "50%"}}>
                                                    VIEW PROFILE
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card_flex_2">
                                            <div style={{marginTop: "30px"}}>
                                                <div>
                                                    <p className="small_text">
                                                        <span><img src="./Images/clock.svg" alt=""/></span>
                                                        Availability
                                                    </p>
                                                    <p className="small_bold_text">60 hrs/month</p>
                                                </div>
                                                
                                                <div>
                                                    <p className="small_text">
                                                        <span>
                                                            <img src="./Images//education.svg" alt=""/>
                                                        </span>Skill
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                            <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                                <p className="slider_card_skills-1">Tennis - 4</p>
                                                <p className="slider_card_skills-2">Running - 1</p>
                                            </div>
                                            
                                        
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" >
                                <div className="slider_card" style={{padding: "20px",margin: "50px"}} >
                                
                                    <div >
                                        <div  className="card_flex_1">
                                            <div >
                                                <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                                </div>
                                                <div style={{marginTop: "10px"}}>
                                                    <div >
                                                        <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px",margin: "0px !important"}}>Daniela V.</p>
                                                    </div>
                                                    <div className="rating_card">
                                                        <i className="fa-sharp fa-solid fa-star"></i>
                                                        <i className="fa-sharp fa-solid fa-star"></i>
                                                        <i className="fa-sharp fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star-half-stroke"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <div style={{display:"flex" , gap:"5px"}}>
                                                        <p className="small_text" style={{margin: "5px !important"}}>Hourly rate :</p>
                                                        <p className="small_bold_text" style={{margin: "5px !important"}}>$10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                            <div>
                                                <button className="view_button" style={{width: "40%"}}>
                                                    BOOK NOW
                                                </button>
                                                <button className="view_button" style={{width: "50%"}}>
                                                    VIEW PROFILE
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card_flex_2">
                                            <div style={{marginTop: "30px"}}>
                                                <div>
                                                    <p className="small_text">
                                                        <span><img src="./Images/clock.svg" alt=""/></span>
                                                        Availability
                                                    </p>
                                                    <p className="small_bold_text">60 hrs/month</p>
                                                </div>
                                                
                                                <div>
                                                    <p className="small_text">
                                                        <span>
                                                            <img src="./Images//education.svg" alt=""/>
                                                        </span>Skill
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                            <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                                <p className="slider_card_skills-1">Tennis - 4</p>
                                                <p className="slider_card_skills-2">Running - 1</p>
                                            </div>
                                            
                                        
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" >
                                <div className="slider_card" style={{padding: "20px",margin: "50px"}} >
                                
                                    <div >
                                        <div  className="card_flex_1">
                                            <div >
                                                <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                                </div>
                                                <div style={{marginTop: "10px"}}>
                                                    <div >
                                                        <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px",margin: "0px !important"}}>Daniela V.</p>
                                                    </div>
                                                    <div className="rating_card">
                                                        <i className="fa-sharp fa-solid fa-star"></i>
                                                        <i className="fa-sharp fa-solid fa-star"></i>
                                                        <i className="fa-sharp fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star-half-stroke"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <div style={{display:"flex" , gap:"5px"}}>
                                                        <p className="small_text" style={{margin: "5px !important"}}>Hourly rate :</p>
                                                        <p className="small_bold_text" style={{margin: "5px !important"}}>$10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                            <div>
                                                <button className="view_button" style={{width: "40%"}}>
                                                    BOOK NOW
                                                </button>
                                                <button className="view_button" style={{width: "50%"}}>
                                                    VIEW PROFILE
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card_flex_2">
                                            <div style={{marginTop: "30px"}}>
                                                <div>
                                                    <p className="small_text">
                                                        <span><img src="./Images/clock.svg" alt=""/></span>
                                                        Availability
                                                    </p>
                                                    <p className="small_bold_text">60 hrs/month</p>
                                                </div>
                                                
                                                <div>
                                                    <p className="small_text">
                                                        <span>
                                                            <img src="./Images//education.svg" alt=""/>
                                                        </span>Skill
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                            <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                                <p className="slider_card_skills-1">Tennis - 4</p>
                                                <p className="slider_card_skills-2">Running - 1</p>
                                            </div>
                                            
                                        
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero_section_info" >
                        <div>
                            <p style={{color: "black"}}>You are
                                not alone!
                            </p>
                            <p style={{color: "black"}}>Thinking about a new hobby, but don't know where to start? Or already have a hobby, but need a partner?
                                <br/>
                                BOOK NOW Belong, a place where you can find your hobby or passion, someone to enjoy it with (or even monetize it off) and a community to belong to.
                            </p>
                        </div>
                        <button>
                            JOIN US
                        </button>
                    </div>
                    
                </div>
                
                <div className="hero_bg_design">
                    <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b98a333300b89_pattern_1.svg" alt=""/>
                </div>

            </div>

            <div style={{position: "relative"}}>
                <div className="categories">
                    <div>
                        <div>
                            <div>
                                <img src="./Images/categories/basketball.png" alt=""/>
                                <p className="bold_names">Basketball</p>
                            </div>
                            <p style={{fontSize: "16px",marginTop: "-10px"}} className="gray_subtext">Guarding the goal from the ball</p>
                            <p className="semibold_text">Search <span>
                                <svg style={{marginRight: "-20px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-lineBOOK NOW="round" className="cursor-pointer hover:text-primary dark:hover:text-primary-light duration-200"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </span></p>
                        </div>
                        <div>
                            <div>
                                <img src="./Images/categories/basketball.png" alt=""/>
                                <p className="bold_names">Basketball</p>
                            </div>
                            <p style={{fontSize: "16px",marginTop: "-10px"}} className="gray_subtext">Guarding the goal from the ball</p>
                            <p className="semibold_text">Search <span>
                                <svg style={{marginRight: "-20px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-lineBOOK NOW="round" className="cursor-pointer hover:text-primary dark:hover:text-primary-light duration-200"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </span></p>
                        </div>
                        <div>
                            <div>
                                <img src="./Images/categories/basketball.png" alt=""/>
                                <p className="bold_names">Basketball</p>
                            </div>
                            <p style={{fontSize: "16px",marginTop: "-10px"}} className="gray_subtext">Guarding the goal from the ball</p>
                            <p className="semibold_text">Search <span>
                                <svg style={{marginRight: "-20px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-lineBOOK NOW="round" className="cursor-pointer hover:text-primary dark:hover:text-primary-light duration-200"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </span></p>
                        </div>
                        <div>
                            <div>
                                <img src="./Images/categories/running.png" alt=""/>
                            <p className="bold_names">Running</p>
                            </div>
                            <p style={{fontSize: "16px",marginTop: "-10px"}} className="gray_subtext">Make running day to day habit for healthy life-style</p>
                            <p className="semibold_text">Search <span>
                                <svg style={{marginRight: "-20px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-lineBOOK NOW="round" className="cursor-pointer hover:text-primary dark:hover:text-primary-light duration-200"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </span></p>
                        </div>
                        <div>
                            <div>
                                <img src="./Images/categories/squash.png" alt=""/>
                            <p className="bold_names">Squash</p>
                            </div>
                            <p style={{fontSize: "16px",marginTop: "-10px"}} className="gray_subtext">Paying squash and make your mind relax</p>
                            <p className="semibold_text">Search <span>
                                <svg style={{marginRight: "-20px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-lineBOOK NOW="round" className="cursor-pointer hover:text-primary dark:hover:text-primary-light duration-200"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </span></p>
                        </div>
                        <div>
                            <div>
                                <img src="./Images/categories/tennis.png" alt=""/>
                            <p className="bold_names">Tennis</p>
                            </div>
                            <p style={{fontSize: "16px",marginTop: "-10px"}} className="gray_subtext">How to run up the stairs, effectively</p>
                            <p className="semibold_text">Search <span>
                                <svg style={{marginRight: "-20px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-lineBOOK NOW="round" className="cursor-pointer hover:text-primary dark:hover:text-primary-light duration-200"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </span></p>
                        </div>
                    </div>
                    <p className="semibold_text" style={{display: "flex",justifyContent: "flex-end",marginTop: "10px",marginRight: "15%"}}>Browse all categories <span>
                        <svg style={{marginRight: "-20px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-lineBOOK NOW="round" className="cursor-pointer hover:text-primary dark:hover:text-primary-light duration-200"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </span></p>
                    
                </div>
            <div className="slider_box">
                <div style={{marginBottom: "-90px"}}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
                        <ol className="carousel-indicators  carosuellist">
                            <li data-target="#slider " data-slide-to="0" className="active"><p></p></li>
                            <li data-target="#slider " data-slide-to="1" ><p></p></li>
                            <li data-target="#slider " data-slide-to="2" ><p></p></li>
                        </ol>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="next_person">
                                <p className="bold_names" style={{paddingTop: "20px",fontSize: "20px",fontWeight: "400",paddingLeft: "20px",paddingRight: "20px",textAlign: "center"}}>Our site features thousands of Players ready for hire</p>
                                <p className="bold_names" style={{fontSize: "16px",paddingBottom: "20px",paddingLeft: "20px",paddingRight: "20px",textAlign: "center"}}>One of these could be your next Player:</p>
                                <div>
                                    <div className="next_person_card">
                                        <div>
                                            <img src="https://remoteco.com/uploads/profile/image_upload_fc903da4feeffec8f1d01674b747986d.jpg" alt=""/>
                                            <div>
                                                <p className="bold_names" style={{margin: "5px !important"}}>Rene Victoria</p>
                                                <div className="rating_card">
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star-half-stroke"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <p className="gray_subtext">Tennis Player</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="gray_subtext">
                                                <span><img src="./Images/clock.svg" alt=""/></span> Availability:
                                                <br/>
                                                <span className="semibold_text" style={{fontSize: "12px !important"}}>120 hrs/month</span>
                                            </p>
                                            <p className="semibold_text" style={{fontSize: "12px !important"}}>
                                                $ <span className="bold_names" style={{fontSize: "12px"}}>700</span>USD/month
                                            </p>
                                        </div>
                                        
                                    </div>
                                    <div className="next_person_card">
                                        <div>
                                            <img src="./Images/peoples/img.png" alt=""/>
                                            <div>
                                                <p className="bold_names" style={{margin: "5px !important"}}>Damon S.</p>
                                                <div className="rating_card">
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star-half-stroke"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <p className="gray_subtext">Football player</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="gray_subtext">
                                                <span><img src="./Images/clock.svg" alt=""/></span> Availability:
                                                <br/>
                                                <span className="semibold_text" style={{fontSize: "12px !important"}}>120 hrs/month</span>
                                            </p>
                                            <p className="semibold_text" style={{fontSize: "12px !important"}}>
                                                $ <span className="bold_names" style={{fontSize: "12px"}}>700</span>USD/month
                                            </p>
                                        </div>
                                        
                                    </div>
                                    <div className="next_person_card">
                                        <div>
                                            <img src="./Images/peoples/Rectangle 140.png" alt=""/>
                                            <div>
                                                <p className="bold_names" style={{margin: "5px !important"}}>Stafen M.</p>
                                                <div className="rating_card">
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star-half-stroke"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <p className="gray_subtext">Squash Player</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="gray_subtext">
                                                <span><img src="./Images/clock.svg" alt=""/></span> Availability:
                                                <br/>
                                                <span className="semibold_text" style={{fontSize: "12px !important"}}>120 hrs/month</span>
                                            </p>
                                            <p className="semibold_text" style={{fontSize: "12px !important"}}>
                                                $ <span className="bold_names" style={{fontSize: "12px"}}>700</span>USD/month
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="next_person">
                                <p className="bold_names" style={{paddingTop: "20px",fontSize: "20px",fontWeight: "400",paddingLeft: "20px",paddingRight: "20px",textAlign: "center"}}>Our site features thousands of Players ready for hire</p>
                                <p className="bold_names" style={{fontSize: "16px",paddingBottom: "20px",paddingLeft: "20px",paddingRight: "20px",textAlign: "center"}}>One of these could be your next Player:</p>
                                <div>
                                    <div className="next_person_card">
                                        <div>
                                            <img src="https://remoteco.com/uploads/profile/image_upload_fc903da4feeffec8f1d01674b747986d.jpg" alt=""/>
                                            <div>
                                                <p className="bold_names" style={{margin: "5px !important"}}>Rene Victoria</p>
                                                <div className="rating_card">
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star-half-stroke"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <p className="gray_subtext">Tennis Player</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="gray_subtext">
                                                <span><img src="./Images/clock.svg" alt=""/></span> Availability:
                                                <br/>
                                                <span className="semibold_text" style={{fontSize: "12px !important"}}>120 hrs/month</span>
                                            </p>
                                            <p className="semibold_text" style={{fontSize: "12px !important"}}>
                                                $ <span className="bold_names" style={{fontSize: "12px"}}>700</span>USD/month
                                            </p>
                                        </div>
                                        
                                    </div>
                                    <div className="next_person_card">
                                        <div>
                                            <img src="./Images/peoples/img.png" alt=""/>
                                            <div>
                                                <p className="bold_names" style={{margin: "5px !important"}}>Damon S.</p>
                                                <div className="rating_card">
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star-half-stroke"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <p className="gray_subtext">Football player</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="gray_subtext">
                                                <span><img src="./Images/clock.svg" alt=""/></span> Availability:
                                                <br/>
                                                <span className="semibold_text" style={{fontSize: "12px !important"}}>120 hrs/month</span>
                                            </p>
                                            <p className="semibold_text" style={{fontSize: "12px !important"}}>
                                                $ <span className="bold_names" style={{fontSize: "12px"}}>700</span>USD/month
                                            </p>
                                        </div>
                                        
                                    </div>
                                    <div className="next_person_card">
                                        <div>
                                            <img src="./Images/peoples/Rectangle 140.png" alt=""/>
                                            <div>
                                                <p className="bold_names" style={{margin: "5px !important"}}>Stafen M.</p>
                                                <div className="rating_card">
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star-half-stroke"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <p className="gray_subtext">Squash Player</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="gray_subtext">
                                                <span><img src="./Images/clock.svg" alt=""/></span> Availability:
                                                <br/>
                                                <span className="semibold_text" style={{fontSize: "12px !important"}}>120 hrs/month</span>
                                            </p>
                                            <p className="semibold_text" style={{fontSize: "12px !important"}}>
                                                $ <span className="bold_names" style={{fontSize: "12px"}}>700</span>USD/month
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="next_person">
                                <p className="bold_names" style={{paddingTop: "20px",fontSize: "20px",fontWeight: "400",paddingLeft: "20px",paddingRight: "20px",textAlign: "center"}}>Our site features thousands of Players ready for hire</p>
                                <p className="bold_names" style={{fontSize: "16px",paddingBottom: "20px",paddingLeft: "20px",paddingRight: "20px",textAlign: "center"}}>One of these could be your next Player:</p>
                                <div>
                                    <div className="next_person_card">
                                        <div>
                                            <img src="https://remoteco.com/uploads/profile/image_upload_fc903da4feeffec8f1d01674b747986d.jpg" alt=""/>
                                            <div>
                                                <p className="bold_names" style={{margin: "5px !important"}}>Rene Victoria</p>
                                                <div className="rating_card">
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star-half-stroke"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <p className="gray_subtext">Tennis Player</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="gray_subtext">
                                                <span><img src="./Images/clock.svg" alt=""/></span> Availability:
                                                <br/>
                                                <span className="semibold_text" style={{fontSize: "12px !important"}}>120 hrs/month</span>
                                            </p>
                                            <p className="semibold_text" style={{fontSize: "12px !important"}}>
                                                $ <span className="bold_names" style={{fontSize: "12px"}}>700</span>USD/month
                                            </p>
                                        </div>
                                        
                                    </div>
                                    <div className="next_person_card">
                                        <div>
                                            <img src="./Images/peoples/img.png" alt=""/>
                                            <div>
                                                <p className="bold_names" style={{margin: "5px !important"}}>Damon S.</p>
                                                <div className="rating_card">
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star-half-stroke"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <p className="gray_subtext">Football player</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="gray_subtext">
                                                <span><img src="./Images/clock.svg" alt=""/></span> Availability:
                                                <br/>
                                                <span className="semibold_text" style={{fontSize: "12px !important"}}>120 hrs/month</span>
                                            </p>
                                            <p className="semibold_text" style={{fontSize: "12px !important"}}>
                                                $ <span className="bold_names" style={{fontSize: "12px"}}>700</span>USD/month
                                            </p>
                                        </div>
                                        
                                    </div>
                                    <div className="next_person_card">
                                        <div>
                                            <img src="./Images/peoples/Rectangle 140.png" alt=""/>
                                            <div>
                                                <p className="bold_names" style={{margin: "5px !important"}}>Stafen M.</p>
                                                <div className="rating_card">
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star-half-stroke"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <p className="gray_subtext">Squash Player</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="gray_subtext">
                                                <span><img src="./Images/clock.svg" alt=""/></span> Availability:
                                                <br/>
                                                <span className="semibold_text" style={{fontSize: "12px !important"}}>120 hrs/month</span>
                                            </p>
                                            <p className="semibold_text" style={{fontSize: "12px !important"}}>
                                                $ <span className="bold_names" style={{fontSize: "12px"}}>700</span>USD/month
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="category_bg_design">
                <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b986fa9300b8a_pattern_2.svg" alt=""/>
            </div>
            </div>

            <div>
                <div className="empl_cards_container">
                    <p className="bold_names" style={{textAlign: "center",fontSize: "36px",marginBottom: "50px",color: "black"}}>Some of our Remote Workers</p>
                    <div className="empl_cards_box">
                        <div className="slider_card"  >
                                        
                            <div >
                                <div  className="card_flex_1">
                                    <div >
                                        <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                        </div>
                                        <div style={{marginTop: "10px"}}>
                                            <div >
                                                <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px",margin: "0px !important"}}>Daniela V.</p>
                                            </div>
                                            <div className="rating_card">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star-half-stroke"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </div>
                                            <div style={{display:"flex" , gap:"5px"}}>
                                                <p className="small_text" style={{margin: "5px !important"}}>Hourly rate :</p>
                                                <p className="small_bold_text" style={{margin: "5px !important"}}>$10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                    <div>
                                        <button className="view_button" style={{width: "40%"}}>
                                            BOOK NOW
                                        </button>
                                        <button className="view_button" style={{width: "50%"}}>
                                            VIEW PROFILE
                                        </button>
                                    </div>
                                </div>
                                <div className="card_flex_2">
                                    <div style={{marginTop: "30px"}}>
                                        <div >
                                            <p className="small_text">
                                                <span><img src="./Images/clock.svg" alt=""/></span>
                                                Availability
                                            </p>
                                            <p className="small_bold_text">60 hrs/month</p>
                                        </div>
                                        
                                        <div>
                                            <p className="small_text">
                                                <span>
                                                    <img src="./Images//education.svg" alt=""/>
                                                </span>Skill
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                        <p className="slider_card_skills-1">Tennis - 4</p>
                                        <p className="slider_card_skills-2">Running - 1</p>
                                    </div>
                                    
                                
                                </div>
                                
                            </div>
                        </div>
                        <div className="slider_card"  >
                                        
                            <div >
                                <div  className="card_flex_1">
                                    <div >
                                        <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                        </div>
                                        <div style={{marginTop: "10px"}}>
                                            <div>
                                                <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px"}}>Daniela V.</p>
                                            </div>
                                            <div style={{display:"flex" , gap:"5px"}}>
                                                <p className="small_text">Hourly rate :</p>
                                                <p className="small_bold_text" >$10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                    <div>
                                        <button className="view_button" style={{width: "40%"}}>
                                            BOOK NOW
                                        </button>
                                        <button className="view_button" style={{width: "50%"}}>
                                            VIEW PROFILE
                                        </button>
                                    </div>
                                </div>
                                <div className="card_flex_2">
                                    <div style={{marginTop: "30px"}}>
                                        <div >
                                            <p className="small_text">
                                                <span><img src="./Images/clock.svg" alt=""/></span>
                                                Availability
                                            </p>
                                            <p className="small_bold_text">60 hrs/month</p>
                                        </div>
                                        
                                        <div>
                                            <p className="small_text">
                                                <span>
                                                    <img src="./Images//education.svg" alt=""/>
                                                </span>Skill
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                        <p className="slider_card_skills-1">Tennis - 4</p>
                                        <p className="slider_card_skills-2">Running - 1</p>
                                    </div>
                                    
                                
                                </div>
                                
                            </div>
                        </div>
                        <div className="slider_card"  >
                                        
                            <div >
                                <div  className="card_flex_1">
                                    <div >
                                        <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                        </div>
                                        <div style={{marginTop: "10px"}}>
                                            <div >
                                                <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px",margin: "0px !important"}}>Daniela V.</p>
                                            </div>
                                            <div className="rating_card">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star-half-stroke"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </div>
                                            <div style={{display:"flex" , gap:"5px"}}>
                                                <p className="small_text" style={{margin: "5px !important"}}>Hourly rate :</p>
                                                <p className="small_bold_text" style={{margin: "5px !important"}}>$10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                    <div>
                                        <button className="view_button" style={{width: "40%"}}>
                                            BOOK NOW
                                        </button>
                                        <button className="view_button" style={{width: "50%"}}>
                                            VIEW PROFILE
                                        </button>
                                    </div>
                                </div>
                                <div className="card_flex_2">
                                    <div style={{marginTop: "30px"}}>
                                        <div >
                                            <p className="small_text">
                                                <span><img src="./Images/clock.svg" alt=""/></span>
                                                Availability
                                            </p>
                                            <p className="small_bold_text">60 hrs/month</p>
                                        </div>
                                        
                                        <div>
                                            <p className="small_text">
                                                <span>
                                                    <img src="./Images//education.svg" alt=""/>
                                                </span>Skill
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                        <p className="slider_card_skills-1">Tennis - 4</p>
                                        <p className="slider_card_skills-2">Running - 1</p>
                                    </div>
                                    
                                
                                </div>
                                
                            </div>
                        </div>
                        <div className="slider_card"  >
                                        
                            <div >
                                <div  className="card_flex_1">
                                    <div >
                                        <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                        </div>
                                        <div style={{marginTop: "10px"}}>
                                            <div >
                                                <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px",margin: "0px !important"}}>Daniela V.</p>
                                            </div>
                                            <div className="rating_card">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star-half-stroke"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </div>
                                            <div style={{display:"flex" , gap:"5px"}}>
                                                <p className="small_text" style={{margin: "5px !important"}}>Hourly rate :</p>
                                                <p className="small_bold_text" style={{margin: "5px !important"}}>$10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                    <div>
                                        <button className="view_button" style={{width: "40%"}}>
                                            BOOK NOW
                                        </button>
                                        <button className="view_button" style={{width: "50%"}}>
                                            VIEW PROFILE
                                        </button>
                                    </div>
                                </div>
                                <div className="card_flex_2">
                                    <div style={{marginTop: "30px"}}>
                                        <div >
                                            <p className="small_text">
                                                <span><img src="./Images/clock.svg" alt=""/></span>
                                                Availability
                                            </p>
                                            <p className="small_bold_text">60 hrs/month</p>
                                        </div>
                                        
                                        <div>
                                            <p className="small_text">
                                                <span>
                                                    <img src="./Images//education.svg" alt=""/>
                                                </span>Skill
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                        <p className="slider_card_skills-1">Tennis - 4</p>
                                        <p className="slider_card_skills-2">Running - 1</p>
                                    </div>
                                    
                                
                                </div>
                                
                            </div>
                        </div>
                        <div className="slider_card"  >
                                        
                            <div >
                                <div  className="card_flex_1">
                                    <div >
                                        <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                        </div>
                                        <div style={{marginTop: "10px"}}>
                                            <div >
                                                <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px",margin: "0px !important"}}>Daniela V.</p>
                                            </div>
                                            <div className="rating_card">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star-half-stroke"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </div>
                                            <div style={{display:"flex" , gap:"5px"}}>
                                                <p className="small_text" style={{margin: "5px !important"}}>Hourly rate :</p>
                                                <p className="small_bold_text" style={{margin: "5px !important"}}>$10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                    <div>
                                        <button className="view_button" style={{width: "40%"}}>
                                            BOOK NOW
                                        </button>
                                        <button className="view_button" style={{width: "50%"}}>
                                            VIEW PROFILE
                                        </button>
                                    </div>
                                </div>
                                <div className="card_flex_2">
                                    <div style={{marginTop: "30px"}}>
                                        <div >
                                            <p className="small_text">
                                                <span><img src="./Images/clock.svg" alt=""/></span>
                                                Availability
                                            </p>
                                            <p className="small_bold_text">60 hrs/month</p>
                                        </div>
                                        
                                        <div>
                                            <p className="small_text">
                                                <span>
                                                    <img src="./Images//education.svg" alt=""/>
                                                </span>Skill
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                        <p className="slider_card_skills-1">Tennis - 4</p>
                                        <p className="slider_card_skills-2">Running - 1</p>
                                    </div>
                                    
                                
                                </div>
                                
                            </div>
                        </div>
                        <div className="slider_card"  >
                                        
                            <div >
                                <div  className="card_flex_1">
                                    <div >
                                        <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                        </div>
                                        <div style={{marginTop: "10px"}}>
                                            <div >
                                                <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px",margin: "0px !important"}}>Daniela V.</p>
                                            </div>
                                            <div className="rating_card">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star-half-stroke"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </div>
                                            <div style={{display:"flex" , gap:"5px"}}>
                                                <p className="small_text" style={{margin: "5px !important"}}>Hourly rate :</p>
                                                <p className="small_bold_text" style={{margin: "5px !important"}}>$10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                    <div>
                                        <button className="view_button" style={{width: "40%"}}>
                                            BOOK NOW
                                        </button>
                                        <button className="view_button" style={{width: "50%"}}>
                                            VIEW PROFILE
                                        </button>
                                    </div>
                                </div>
                                <div className="card_flex_2">
                                    <div style={{marginTop: "30px"}}>
                                        <div >
                                            <p className="small_text">
                                                <span><img src="./Images/clock.svg" alt=""/></span>
                                                Availability
                                            </p>
                                            <p className="small_bold_text">60 hrs/month</p>
                                        </div>
                                        
                                        <div>
                                            <p className="small_text">
                                                <span>
                                                    <img src="./Images//education.svg" alt=""/>
                                                </span>Skill
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                        <p className="slider_card_skills-1">Tennis - 4</p>
                                        <p className="slider_card_skills-2">Running - 1</p>
                                    </div>
                                    
                                
                                </div>
                                
                            </div>
                        </div>
                        <div className="slider_card"  >
                                        
                            <div >
                                <div  className="card_flex_1">
                                    <div >
                                        <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                        </div>
                                        <div style={{marginTop: "10px"}}>
                                            <div >
                                                <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px",margin: "0px !important"}}>Daniela V.</p>
                                            </div>
                                            <div className="rating_card">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star-half-stroke"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </div>
                                            <div style={{display:"flex" , gap:"5px"}}>
                                                <p className="small_text" style={{margin: "5px !important"}}>Hourly rate :</p>
                                                <p className="small_bold_text" style={{margin: "5px !important"}}>$10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                    <div>
                                        <button className="view_button" style={{width: "40%"}}>
                                            BOOK NOW
                                        </button>
                                        <button className="view_button" style={{width: "50%"}}>
                                            VIEW PROFILE
                                        </button>
                                    </div>
                                </div>
                                <div className="card_flex_2">
                                    <div style={{marginTop: "30px"}}>
                                        <div >
                                            <p className="small_text">
                                                <span><img src="./Images/clock.svg" alt=""/></span>
                                                Availability
                                            </p>
                                            <p className="small_bold_text">60 hrs/month</p>
                                        </div>
                                        
                                        <div>
                                            <p className="small_text">
                                                <span>
                                                    <img src="./Images//education.svg" alt=""/>
                                                </span>Skill
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                        <p className="slider_card_skills-1">Tennis - 4</p>
                                        <p className="slider_card_skills-2">Running - 1</p>
                                    </div>
                                    
                                
                                </div>
                                
                            </div>
                        </div>
                        <div className="slider_card"  >
                                        
                            <div >
                                <div  className="card_flex_1">
                                    <div >
                                        <div><img style={{width: "80px"}} src="https://www.remoteco.com/uploads/profile/image_upload_300afc47783285f28e9bb9341c64319b.jpg" alt=""/>
                                        </div>
                                        <div style={{marginTop: "10px"}}>
                                            <div >
                                                <p style={{color:"#47433d",fontWeight: "600",fontSize: "18px",margin: "0px !important"}}>Daniela V.</p>
                                            </div>
                                            <div className="rating_card">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star-half-stroke"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </div>
                                            <div style={{display:"flex" , gap:"5px"}}>
                                                <p className="small_text" style={{margin: "5px !important"}}>Hourly rate :</p>
                                                <p className="small_bold_text" style={{margin: "5px !important"}}>$10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="small_bold_text" style={{marginTop: "15px",marginBottom: "15px"}}>I am ambisious and driven, Im an informatic Player</p>
                                    <div>
                                        <button className="view_button" style={{width: "40%"}}>
                                            BOOK NOW
                                        </button>
                                        <button className="view_button" style={{width: "50%"}}>
                                            VIEW PROFILE
                                        </button>
                                    </div>
                                </div>
                                <div className="card_flex_2">
                                    <div style={{marginTop: "30px"}}>
                                        <div >
                                            <p className="small_text">
                                                <span><img src="./Images/clock.svg" alt=""/></span>
                                                Availability
                                            </p>
                                            <p className="small_bold_text">60 hrs/month</p>
                                        </div>
                                        
                                        <div>
                                            <p className="small_text">
                                                <span>
                                                    <img src="./Images//education.svg" alt=""/>
                                                </span>Skill
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div style={{marginTop: "10px",marginBottom: "10px"}}>
                                        <p className="slider_card_skills-1">Tennis - 4</p>
                                        <p className="slider_card_skills-2">Running - 1</p>
                                    </div>
                                    
                                
                                </div>
                                
                            </div>
                        </div> 
                        
                    </div>
                    <p className="semibold_text" style={{display: "flex",justifyContent: "flex-end",marginTop: "10px",marginRight: "50px"}}>Browse all categories <span>
                        <svg style={{marginRight: "-20px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-lineBOOK NOW="round" className="cursor-pointer hover:text-primary dark:hover:text-primary-light duration-200"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </span></p>
                </div>
            </div>

            <div className="time_zone_container">
            <div className="time_zone">
                <div style={{paddingTop: "120px",marginLeft: "50px",width: "50%"}}>
                    <p className="semibold_text" style={{fontSize: "26px",color: "#000"}}>
                        <span style={{color: "#F55327"}}>Search and reach out</span>
                        to "Players" one by one
                    </p>
                    <p className="semibold_text" style={{fontWeight: "400",fontSize: "18px"}}>
                        Use our search tool to find Players that fit your criteria.
                    </p>
                    <ul className="find_workers_li">
                        <li className="semibold_text" style={{fontWeight: "400",fontSize: "18px"}}>
                            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/40/check-304167_960_720.png" alt=""/>
                            <p>
                                Filter your searches by keyword, professions, skills, English proficiency, payment methods, and more.
                            </p>
                        </li>
                        <li className="semibold_text" style={{fontWeight: "400",fontSize: "18px"}}>
                            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/40/check-304167_960_720.png" alt=""/>
                            <p>View detailed profiles that highlight the Players experience and answer your most important questions.</p>
                        </li>
                    </ul>
                    <div className="find_workers_input">
                        <input type="text" placeholder="Search Remote Players"/>
                        <button>SEARCH</button>
                    </div>
                </div>
                <div>
                    <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b98029d300b91_belong_hero.png" alt=""/>
                </div>
            </div>
            </div>

            <div style={{margin: "50px 0px"}}>
                <div className="find_workers">
                    <div style={{position: "relative"}}>
                        <p style={{fontSize: "52px",color: "#000",textAlign: "center",fontWeight: "900 !important",padding: "0 !important"}}>
                            Start Belonging!
                        </p>
                        <p style={{width: "60%",textAlign: "center",margin: "auto",fontSize: "22px"}}>
                            Doing things you actually enjoy offline allows you to meet new people. Having things in common makes it easier to grow together and brings happiness to your life through belonging to something.
                        </p>
                        <div className="find_workers_box">
                            <div>
                                <video width="300" height="540" frameborder="0" loop="" muted="" playsinline="" autoplay="" webboost_found_paused="true" webboost_processed="true" webboost_userplayed="true">
                                    <source type="video/mp4" src="./Images/vedio.mp4"/>
                                </video>
                            </div>
                            <div>
                                <div>
                                    <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b984d0e300b85_u_fire.svg" alt=""/>
                                    <div>
                                        <p>BOOK NOW Belong and pick activities you like</p>
                                        <p>30+ activities to choose from, pick yours and start getting better at it.</p>
                                    </div>
                                </div>
                                <div className="line_big"></div>
                                <div>
                                    <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b98ab47300b82_u_link.svg" alt=""/>
                                    <div>
                                        <p>Connect with people nearby over interests</p>
                                        <p>Search by interest, location, and your proficiency . </p>
                                    </div>
                                </div>
                                <div className="line_big"></div>
                                <div>
                                    <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b9831f7300b84_u_users-alt.svg" alt=""/>
                                    <div>
                                        <p>Invite them for a round and start belonging!</p>
                                        <p>Only a BOOK NOWt round of an activity you both like will bring a sense of real connection, happiness and belonging, so go ahead!</p>
                                    </div>
                                </div>
                                <div className="line_big"></div>
                                <div>
                                    <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b98c7e5300b88_u_pound.svg" alt=""/>
                                    <div>
                                        <p>Make money off your passion via helping others </p>
                                        <p>Continue to develop your passion and you will soon be able to monetize your via Belong – sign up now and stay tuned.</p>
                                    </div>
                                </div>
                                <div className="book_now_btn">
                                    <button>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div style={{position: "absolute",top: "-50px",right: "0"}}>
                            <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b98a333300b89_pattern_1.svg" alt=""/>
                        </div>
                    </div>
            
                </div>
            </div>
        
            <div className="bottom_hero">
                <div>
                    <div>
                        <p className="bold_names" style={{fontSize: "48px",color: "#f2f4f7",fontWeight: "700"}}>Are you a coach or plan to be one?</p>
                        <p style={{color: "#888d9e",fontSize: "20px"}}>Even better – we’re planning something special for you too!</p>
                        <button>JOIN US</button>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer_container">
                    <div><img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b98d4ff300b80_Logo_w.svg" alt=""/></div>
                    <div className="footer_container_flex">
                        <div>
                            <p className="bold_names" style={{color: "#fff"}}>For Investors</p>
                            <p className="semibold_text" style={{color: "#888d9e",marginTop: "-10px"}}>invesrinbelong@gmail.com</p>
                        </div>
                        <div>
                            <p className="bold_names" style={{color: "#fff"}}> For Partners</p>
                            <p className="semibold_text" style={{color: "#888d9e",marginTop: "-10px"}}>partnerwithbelong@gmail.com</p>
                        </div>
                        <div>
                            <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b98f184300b7e_twitter-fill%201.svg" alt="" style={{paddingRight: "15px"}}/>
                            <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b98d3e3300b7d_instagram-fill%201.svg" alt="" style={{paddingRight: "15px"}}/>
                            <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b98aa5c300b7f_facebook-fill%201.svg" alt="" style={{paddingRight: "15px"}}/>
                            <img src="https://uploads-ssl.webflow.com/610c139c483b98bae0300b73/610c139c483b9835cf300b8d_tiktok-fill.svg" alt="" style={{paddingRight: "15px"}}/>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex",justifyContent: "space-between",color: "#888d9e",marginTop: "10px"}}>
                    <p >Terms & conditions</p>
                    <p>All Right Reserev @</p>
                </div>
            </div>
        </div>
    )
}
export default Home
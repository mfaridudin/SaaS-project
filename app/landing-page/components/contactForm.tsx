export default function ContactForm() {
    return (
        <div>
            <div className="section-full bg-white content-inner" style={{
                backgroundImage: "url(images/background/bg1.jpg)",
                backgroundSize: "cover"
            }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 m-b30 wow fadeInLeft" data-wow-delay="0.3s">
                            <img src="images/about/about-3.png" className="img-move2" alt=""/>
                        </div>
                        <div className="col-lg-7 col-md-7 m-b30 wow fadeInRight" data-wow-delay="0.3s">
                            <div className="contact-box contact-white">
                                <div className="section-head text-left text-white">
                                    <h2 className="title">Say hi to your team <br />of experts</h2>
                                    <p>Before we put our thinking caps on, tell us a few things <br />about yourself</p>
                                </div>
                                <div className="dzFormMsg"></div>
                                <form method="post" className="dzForm" action="script/contact.php">
                                    <input type="hidden" value="Contact" name="dzToDo"/>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <input name="dzName" type="text" required className="form-control" placeholder="Enter your name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <textarea name="dzMessage" rows={4} className="form-control" required placeholder="Your message here"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <button name="submit" type="submit" value="Submit" className="btn radius-xl red btn-md btn-aware">SEND<span></span></button>
                                            </div>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

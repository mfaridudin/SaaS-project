export default function CustomerBox() {
    return (
        <div>
            <div className="section-full bg-white customer-area-one" style={{
                backgroundImage: "url(/images/background/bg7.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center left",
                backgroundSize: "50%",
            }}>

                <div className="container">
                <div className="section-head text-center">
                    <h2 className="title">Build a brand customers love</h2>
                    <p>We are an Creative agency, based in New York. Vision Every company is performing best online. Mission Helping businesses to find the perfect and most succesful strategy, to be online.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="row sp0 counter-area1">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6 wow zoomIn" data-wow-delay="0.2s">
                                <div className="counter-box counter-box1 img-move">
                                    <div className="counter-info">
                                        <h4 className="title">Projects</h4>
                                        <span className="counter">30</span>
                                        <span>K</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6 wow zoomIn" data-wow-delay="0.4s">
                                <div className="counter-box counter-box2 img-move">
                                    <div className="counter-info">
                                        <h4 className="title">Cups of Coffee</h4>
                                        <span className="counter">451</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6 wow zoomIn" data-wow-delay="0.6s">
                                <div className="counter-box counter-box3 img-move2">
                                    <div className="counter-info">
                                        <h4 className="title">Customers</h4>
                                        <span className="counter">120</span>
                                        <span>K</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6 wow zoomIn" data-wow-delay="0.8s">
                                <div className="counter-box counter-box4 img-move2">
                                    <div className="counter-info">
                                        <h4 className="title">Clients</h4>
                                        <span className="counter">130</span>
                                        <span>K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0.8s">
                        <div className="customer-box1">
                            <div className="dlab-media img-move2">
                                <img src="images/about/about-2.png" alt="" />
                            </div>
                            <p className="font-20">We start by analyzing your design and sorting it out. We’ll extract all the necessary images, logos, and icons.</p>
                            <h5>Increase customer lifetime value</h5>
                            <p className="m-b0">Let our AI power your entire customer journey, from awareness through purchase, to increase sales, average order value, and loyalty, and get a centralized picture of cost, ROI, and impact.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default function FeaturedBox() {
    return (
        <>
            <div className="section-full bg-white text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInUp " data-wow-delay="0.2s">
                            <div className="icon-bx-wraper featured-box style1 shadow radius-md zigzag">
                                <div className="icon-xl m-b20">
                                    <a href="javascript:void(0)" className="icon-cell"><img src="images/icon/icon1.png" alt=""/></a>
                                </div>
                                <div className="icon-content">
                                    <h2 className="dlab-tilte">User Interface Design</h2>
                                    <p>Let us put your website in front of consumers at the moment in time they are searching for your products & services. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon-bx-wraper m-t60 featured-box style1 shadow radius-md">
                                <div className="icon-xl m-b20">
                                    <a href="javascript:void(0)" className="icon-cell"><img src="images/icon/icon2.png" alt=""/></a>
                                </div>
                                <div className="icon-content">
                                    <h2 className="dlab-tilte">Digital Marketing Agency</h2>
                                    <p>Working together, we will use our knowledge of SEO to bring more leads to your business through your website.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="icon-bx-wraper featured-box style1 shadow radius-md">
                                <div className="icon-xl m-b20">
                                    <a href="javascript:void(0)" className="icon-cell"><img src="images/icon/icon3.png" alt=""/></a>
                                </div>
                                <div className="icon-content">
                                    <h2 className="dlab-tilte">Visual design Strategy</h2>
                                    <p>The same way you review and analyze your job reports by cost, ROI, customer satisfaction<br/>  and much more </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

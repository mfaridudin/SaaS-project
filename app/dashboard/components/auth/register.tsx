import Link from "next/link";

export default function RegisterPage() {
    return (
        <div>
            <div className="fix-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="card mb-0 h-auto">
                                <div className="card-body">
                                    <div className="text-center mb-3">
                                        <a href="index.html"><img className="logo-auth" src="/dashboard/images/logo-full.png" alt="" /></a>
                                    </div>
                                    <h4 className="text-center mb-4">Sign up your account</h4>
                                    <form action="index.html">
                                        <div className="form-group mb-4">
                                            <label className="form-label" htmlFor="username">Username</label>
                                            <input type="text" className="form-control" placeholder="Enter username" id="username" />
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="form-label" htmlFor="email">Email</label>
                                            <input type="email" className="form-control" placeholder="hello@example.com" id="email" />
                                        </div>
                                        <div className="mb-sm-4 mb-3 position-relative">
                                            <label className="form-label" htmlFor="dlab-password">Password</label>
                                            <input type="password" id="dlab-password" className="form-control" value="123456" />
                                            <span className="show-pass eye">
                                                <i className="fa fa-eye-slash"></i>
                                                <i className="fa fa-eye"></i>
                                            </span>
                                        </div>

                                        <div className="mb-sm-4 mb-3 position-relative">
                                            <label className="form-label" htmlFor="dlab-password">Confirm Password</label>
                                            <input type="password" id="dlab-password" className="form-control" value="123456" />
                                            <span className="show-pass eye">
                                                <i className="fa fa-eye-slash"></i>
                                                <i className="fa fa-eye"></i>
                                            </span>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Already have an account? <Link className="text-primary" href="login">Sign in</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

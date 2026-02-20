"use client"

import Link from "next/link"

export default function LoginPage() {
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
                                    <h4 className="text-center mb-4">Sign in your account</h4>
                                    <form action="/dashboard">
                                        <div className="form-group mb-4">
                                            <label className="form-label" htmlFor="username">Username</label>
                                            <input type="text" className="form-control" placeholder="Enter username" defaultValue={"tes"} id="username" />
                                        </div>
                                        <div className="mb-sm-4 mb-3 position-relative">
                                            <label className="form-label" htmlFor="dlab-password">Password</label>
                                            <input type="password" id="dlab-password" className="form-control" defaultValue="123456" />
                                            <span className="show-pass eye">
                                                <i className="fa fa-eye-slash"></i>
                                                <i className="fa fa-eye"></i>
                                            </span>
                                        </div>
                                        <div className="form-row d-flex flex-wrap justify-content-between mb-2">
                                            <div className="form-group mb-sm-4 mb-1">
                                                <div className="form-check custom-checkbox ms-1">
                                                    <input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
                                                    <label className="form-check-label" htmlFor="basic_checkbox_1">Remember my preference</label>
                                                </div>
                                            </div>
                                            <div className="form-group ms-2">
                                                <Link href="page-forgot-password.html">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Don't have an account? <Link className="text-primary" href="register">Sign up</Link></p>
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

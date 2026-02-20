"use client"

import Link from "next/link";
import BlogList from "../components/blog/blogList";
import { useEffect } from "react";

export default function page() {
    useEffect(() => {
        function initSelect() {
            const $ = (window as any).jQuery

            if ($ && $.fn.selectpicker) {
                $(".default-select").selectpicker("destroy")
                $(".default-select").selectpicker()
            }
        }

        if ((window as any).jQuery?.fn?.selectpicker) {
            initSelect()
        } else {
            window.addEventListener("selectpicker-ready", initSelect)
        }

        return () => {
            window.removeEventListener("selectpicker-ready", initSelect)
        }
    }, [])

    useEffect(() => {
        const $ = (window as any).jQuery;

        if ($) {
            $(".SlideToolHeader").off("click").on("click", function (this: HTMLElement) {
                const parent = $(this).closest(".cm-content-box");

                parent.find(".cm-content-body").slideToggle();
                const icon = $(this).find("i");

                if (icon.hasClass("fa-angle-down")) {
                    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
                } else {
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            });
        }
    }, []);
    return (
        <>
            <div className="container-fluid">
                {/* <!-- Row --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="filter cm-content-box box-primary">
                            <div className="content-title SlideToolHeader">
                                <div className="cpa">
                                    <i className="fa-sharp fa-solid fa-filter me-2"></i>Filter
                                </div>
                                <div className="tools">
                                    <a href="javascript:void(0);" className="expand handle"><i className="fal fa-angle-down"></i></a>
                                </div>
                            </div>
                            <div className="cm-content-body form excerpt">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-3 col-sm-6">
                                            <label className="form-label">Title</label>
                                            <input type="text" className="form-control mb-xl-0 mb-3" id="exampleFormControlInput1" placeholder="Title" />
                                        </div>
                                        <div className="col-xl-3  col-sm-6 mb-3 mb-xl-0">
                                            <label className="form-label">Status</label>
                                            <select className="form-control default-select h-auto wide" aria-label="Default select example">
                                                <option selected>Select Status</option>
                                                <option value="1">Published</option>
                                                <option value="2">Draft</option>
                                                <option value="3">Trash</option>
                                                <option value="4">Private</option>
                                                <option value="5">Pending</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-sm-6">
                                            <label className="form-label">Date</label>
                                            <div className="input-hasicon mb-sm-0 mb-3">
                                                <input name="datepicker" className="form-control bt-datepicker" />
                                                <div className="icon"><i className="far fa-calendar"></i></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 align-self-end">
                                            <div>
                                                <button className="btn btn-primary me-2" title="Click here to Search" type="button"><i className="fa fa-filter me-1"></i>Filter</button>
                                                <button className="btn btn-danger light" title="Click here to remove filter" type="button">Remove Filter</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 pb-3">
                            <ul className="d-flex align-items-center flex-wrap">
                                <li><Link href="blogs/add-blog" className="btn btn-primary btn-sm">Add Blog</Link></li>
                                <li><Link href="blogs/blog-categories" className="btn btn-primary btn-sm mx-1">Blog Category</Link></li>
                            </ul>
                        </div>
                        {/* blog list */}
                        <BlogList />
                    </div>
                </div>
            </div>
        </>
    )
}

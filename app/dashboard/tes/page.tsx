"use client"

export default function page() {

    return (
        <>
            <div className="container-fluid">
                <div className="row kanban-bx px-3">
                    <div className="col-xl-3 col-md-6 px-0">
                        <div className="kanbanPreview-bx">
                            <div className="draggable-zone dropzoneContainer">
                                <div className="sub-card align-items-center d-flex justify-content-between mb-4">
                                    <div>
                                        <h4 className="mb-0">To-Do List (<span className="totalCount">24</span>)</h4>
                                    </div>
                                    <div className="plus-bx">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-plus"></i></a>
                                    </div>
                                </div>
                                <div className="card draggable-handle draggable">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="sub-title">
                                                <svg className="me-2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="5" cy="5" r="5" fill="#FFA7D7" />
                                                </svg>
                                                Deisgner
                                            </span>
                                            <div className="dropdown">
                                                <div className="btn-link" data-bs-toggle="dropdown">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#717579" />
                                                        <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#717579" />
                                                        <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#717579" />
                                                    </svg>
                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="mb-0"><a href="javascript:void(0);" className="text-black">Create wireframe for landing page phase 1</a></h5>
                                        <div className="progress default-progress my-4">
                                            <div className="progress-bar bg-design progress-animated" style={{ width: "45%", height: "7px" }} role="progressbar">
                                                <span className="sr-only">45% Complete</span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-between align-items-center kanban-user">
                                            <ul className="users col-6">
                                                <li><img src="images/contacts/pic11.jpg" alt="" /></li>
                                                <li><img src="images/contacts/pic22.jpg" alt="" /></li>
                                                <li><img src="images/contacts/pic33.jpg" alt="" /></li>
                                            </ul>
                                            <div className="col-6 d-flex justify-content-end">
                                                <span className="fs-14"><i className="far fa-clock me-2"></i>Due in 4 days</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 px-0">
                        <div className="kanbanPreview-bx">
                            <div className="draggable-zone dropzoneContainer">
                                <div className="sub-card align-items-center d-flex justify-content-between mb-4">
                                    <div>
                                        <h4 className="mb-0">On Progress(<span className="totalCount">2</span>)</h4>
                                    </div>
                                    <div className="plus-bx">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-plus"></i></a>
                                    </div>
                                </div>
                                <div className="card draggable-handle draggable">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-success">
                                                <svg className="me-2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="5" cy="5" r="5" fill="#09BD3C" />
                                                </svg>
                                                UPDATE
                                            </span>
                                            <div className="dropdown">
                                                <div className="btn-link" data-bs-toggle="dropdown">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#717579" />
                                                        <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#717579" />
                                                        <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#717579" />
                                                    </svg>
                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="mb-0"><a href="javascript:void(0);" className="text-black">Update information in footer section</a></h5>
                                        <div className="progress default-progress my-4">
                                            <div className="progress-bar bg-success progress-animated" style={{ width: "45%", height: "7px" }} role="progressbar">
                                                <span className="sr-only">45% Complete</span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-between align-items-center kanban-user">
                                            <ul className="users col-6">
                                                <li><img src="images/contacts/pic11.jpg" alt="" /></li>
                                                <li><img src="images/contacts/pic22.jpg" alt="" /></li>
                                                <li><img src="images/contacts/pic33.jpg" alt="" /></li>
                                            </ul>
                                            <div className="col-6 d-flex justify-content-end">
                                                <p className="mb-0"><i className="far fa-clock me-2"></i>Due in 4 days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 px-0">
                        <div className="kanbanPreview-bx">
                            <div className="draggable-zone dropzoneContainer">
                                <div className="sub-card align-items-center d-flex justify-content-between mb-4">
                                    <div>
                                        <h4 className="mb-0">To Verify(<span className="totalCount">3</span>)</h4>
                                    </div>
                                    <div className="plus-bx">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-plus"></i></a>
                                    </div>
                                </div>
                                <div className="card draggable-handle draggable">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-danger">
                                                <svg className="me-2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="5" cy="5" r="5" fill="#FC2E53" />
                                                </svg>
                                                BUGS FIXING
                                            </span>
                                            <div className="dropdown">
                                                <div className="btn-link" data-bs-toggle="dropdown">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#717579" />
                                                        <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#717579" />
                                                        <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#717579" />
                                                    </svg>
                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="mb-0"><a href="javascript:void(0);" className="text-black">Update information in footer section</a></h5>
                                        <div className="progress default-progress my-4">
                                            <div className="progress-bar bg-danger progress-animated" style={{ width: "45%", height: "7px" }} role="progressbar">
                                                <span className="sr-only">45% Complete</span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-between align-items-center kanban-user">
                                            <ul className="users col-6">
                                                <li><img src="images/contacts/pic11.jpg" alt="" /></li>
                                                <li><img src="images/contacts/pic22.jpg" alt="" /></li>
                                                <li><img src="images/contacts/pic33.jpg" alt="" /></li>
                                            </ul>
                                            <div className="col-6 d-flex justify-content-end">
                                                <p className="mb-0"><i className="far fa-clock me-2"></i>Due in 4 days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 px-0">
                        <div className="kanbanPreview-bx">
                            <div className="draggable-zone dropzoneContainer">
                                <div className="sub-card align-items-center d-flex justify-content-between mb-4">
                                    <div>
                                        <h4 className="mb-0">Done(<span className="totalCount">3</span>)</h4>
                                    </div>
                                    <div className="plus-bx">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-plus"></i></a>
                                    </div>
                                </div>
                                <div className="card draggable-handle draggable">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-danger">
                                                <svg className="me-2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="5" cy="5" r="5" fill="#FC2E53" />
                                                </svg>
                                                BUGS FIXING
                                            </span>
                                            <div className="dropdown">
                                                <div className="btn-link" data-bs-toggle="dropdown">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#717579" />
                                                        <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#717579" />
                                                        <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#717579" />
                                                    </svg>
                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="mb-0"><a href="javascript:void(0);" className="text-black">Update information in footer section</a></h5>
                                        <div className="progress default-progress my-4">
                                            <div className="progress-bar bg-danger progress-animated" style={{ width: "45%", height: "7px" }} role="progressbar">
                                                <span className="sr-only">45% Complete</span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-between align-items-center kanban-user">
                                            <ul className="users col-6">
                                                <li><img src="images/contacts/pic11.jpg" alt="" /></li>
                                                <li><img src="images/contacts/pic22.jpg" alt="" /></li>
                                                <li><img src="images/contacts/pic33.jpg" alt="" /></li>
                                            </ul>
                                            <div className="col-6 d-flex justify-content-end">
                                                <p className="mb-0"><i className="far fa-clock me-2"></i>Due in 4 days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

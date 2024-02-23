import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default function HomeCard() {
    return (
        <div>
            <div className="card-deck">
                <div className="card">
                    <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTel-1qACqvNtWRp-5sKs_12hAAKnbJ4J2k9w&s" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_xVbhkAsbd9oSRSrc59H1vEGPQCQTXxTKg&s" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGSj628JwF40JWX9yc2P9lo94PbzwYdpXMg&s" alt="404" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=4" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=5" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=6" alt="404" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=7" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=8" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=9" alt="404" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className="card-deck">
                <div className="card">
                    <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTel-1qACqvNtWRp-5sKs_12hAAKnbJ4J2k9w&s" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_xVbhkAsbd9oSRSrc59H1vEGPQCQTXxTKg&s" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGSj628JwF40JWX9yc2P9lo94PbzwYdpXMg&s" alt="404" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=4" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=5" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=6" alt="404" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=7" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=8" alt="404" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="https://picsum.photos/1920/1080?random=9" alt="404" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

import './Card.css';
import React from 'react'

export default function index({ images, title, description, price, brand }) {
    return (

        <>
            <div>
                <div className="containerr ">
                    <div className="cardd">
                        <div className="card-headerr">

                            <img src={!images[0] ? "https://res.cloudinary.com/teepublic/image/private/s--UNm73W6m--/t_Preview/b_rgb:191919,c_limit,f_auto,h_630,q_90,w_630/v1606803184/production/designs/16724220_0.jpg" : images[0]} alt="Img Not Found" />
                        </div>
                        <div className="card-bodyy">
                            <span className="tagg tag-teall">Brand : {brand}</span>
                            <h4>
                                {title}
                            </h4>
                            <p>
                                {description}
                                <br />
                                <br />
                                <span className='love'> ORDER NOW </span><span className='loveu'> LIMITED STOCK </span>
                            </p>
                            <p> RS : {price} Pkr </p>
                        </div>
                    </div>
                    <div className="cardd">
                        <div className="card-headerr">
                            <img src={!images[1] ? "https://res.cloudinary.com/teepublic/image/private/s--UNm73W6m--/t_Preview/b_rgb:191919,c_limit,f_auto,h_630,q_90,w_630/v1606803184/production/designs/16724220_0.jpg" : images[1]} alt="Img Not Found" />
                        </div>
                        <div className="card-bodyy">
                            <span className="tagg tag-teall">Brand : {brand}</span>
                            <h4>
                                {title}-use
                            </h4>
                            <p>
                                {description}
                                <br />
                                <br />
                                <span className='love'> ORDER NOW </span><span className='loveu'> LIMITED STOCK </span>
                            </p>
                            <p> RS : {price} Pkr </p>
                        </div>
                    </div>
                    <div className="cardd">
                        <div className="card-headerr">
                            <img src={!images[2] ? "https://res.cloudinary.com/teepublic/image/private/s--UNm73W6m--/t_Preview/b_rgb:191919,c_limit,f_auto,h_630,q_90,w_630/v1606803184/production/designs/16724220_0.jpg" : images[2]} alt="Img Not Found" />
                        </div>
                        <div className="card-bodyy">
                            <span className="tagg tag-teall">Brand : {brand}</span>
                            <h4>
                                {title}-new
                            </h4>
                            <p>
                                {description}
                                <br />
                                <br />
                                <span className='love'> ORDER NOW </span><span className='loveu'> LIMITED STOCK </span>
                            </p>
                            <p> RS : {price} Pkr </p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

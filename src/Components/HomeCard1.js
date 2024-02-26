import React, { useEffect, useRef, useState } from 'react';

function ScrollableCards() {
    const scrollImagesRef = useRef(null);
    const [scrollLength, setScrollLength] = useState(0);
    const leftButtonRef = useRef(null);
    const rightButtonRef = useRef(null);

    useEffect(() => {
        const scrollImages = scrollImagesRef.current;
        const updateScrollLength = () => {
            if (scrollImages) {
                setScrollLength(scrollImages.scrollWidth - scrollImages.clientWidth);
            }
        };
        updateScrollLength();
        window.addEventListener('resize', updateScrollLength);
        return () => {
            window.removeEventListener('resize', updateScrollLength);
        };
    }, []);

    useEffect(() => {
        const scrollImages = scrollImagesRef.current;
        const leftButton = leftButtonRef.current;
        const rightButton = rightButtonRef.current;

        const checkScroll = () => {
            if (scrollImages) {
                const currentScroll = scrollImages.scrollLeft;
                if (currentScroll === 0) {
                    leftButton.setAttribute("disabled", "true");
                    rightButton.removeAttribute("disabled");
                } else if (currentScroll === scrollLength) {
                    rightButton.setAttribute("disabled", "true");
                    leftButton.removeAttribute("disabled");
                } else {
                    leftButton.removeAttribute("disabled");
                    rightButton.removeAttribute("disabled");
                }
            }
        };

        if (scrollImages) {
            scrollImages.addEventListener('scroll', checkScroll);
            return () => {
                scrollImages.removeEventListener('scroll', checkScroll);
            };
        }
    }, [scrollLength]);

    const leftScroll = () => {
        if (scrollImagesRef.current) {
            scrollImagesRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const rightScroll = () => {
        if (scrollImagesRef.current) {
            scrollImagesRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="cover">
            <button ref={leftButtonRef} className="left" onClick={leftScroll}>
                <i className="fas fa-angle-double-left"></i>
            </button>
            <div ref={scrollImagesRef} className="scroll-images">
                <div className="child">
                    <a href="https://classroom.google.com/c/NTkxMDY3Mjc5MDg4?pli=1" target='blank'><img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 1" />

                        <h4 className=''>RS : 300000</h4>
                        <p>ajshxsjhdwg sgid sgiuwd ygs</p></a>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 2" />
                    <h4>Card 2</h4>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 1" />
                    <h4>Card 1</h4>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 2" />
                    <h4>Card 2</h4>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 1" />
                    <h4>Card 1</h4>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 2" />
                    <h4>Card 2</h4>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 1" />
                    <h4>Card 1</h4>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 2" />
                    <h4>Card 2</h4>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 1" />
                    <h4>Card 1</h4>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 2" />
                    <h4>Card 2</h4>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 1" />
                    <h4>Card 1</h4>
                </div>
                <div className="child">
                    <img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 2" />
                    <h4>Card 2</h4>
                </div>

            </div>
            <button ref={rightButtonRef} className="right" onClick={rightScroll}>
                <i className="fas fa-angle-double-right"></i>
            </button>
        </div>
    );
}

export default ScrollableCards;

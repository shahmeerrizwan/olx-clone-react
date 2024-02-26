import React from 'react';
import ReactCardSlider from 'react-card-slider-component';

const HomeCard1 = () => {
    const handleClick = (url) => {
        window.open(url, '_blank'); // Open the URL in a new tab
    };

    const slides1 = [
        {
            image: "https://images.olx.com.pk/thumbnails/435883108-800x600.webp",
            title: "Rs 10,500,000",
            description: "Toyota Hilux Revo Dual AC",
            clickEvent: () => handleClick("https://www.olx.com.pk/item/toyota-hilux-revo-dual-ac-iid-1084390854") // Assign a function to the clickEvent property
        },
        {
            image: "https://images.olx.com.pk/thumbnails/433867303-800x600.webp",
            title: "Rs 9,850,000",
            description: "Toyota Revo 2018 Better than Vezel Prado",
            clickEvent: () => handleClick("https://www.olx.com.pk/item/toyota-revo-2018-better-than-vezel-prado-iid-1084055452")
        },
        {
            image: "https://images.olx.com.pk/thumbnails/435871237-800x600.webp",
            title: "Rs 11,050,000",
            description: "2021 revo new tv 03123597704 num hai",
            clickEvent: () => handleClick("https://www.olx.com.pk/item/2021-revi-new-tv-iid-1084388778")
        },
        {
            image: "https://images.olx.com.pk/thumbnails/435843423-800x600.webp",
            title: "Rs 9,631,000",
            description: "Toyota corolla cross hybrid",
            clickEvent: () => handleClick("https://www.olx.com.pk/item/mercedes-c250-avantgarde-cgi-turbo-iid-1083044763")
        },
        {
            image: "https://images.olx.com.pk/thumbnails/435806482-800x600.webp",
            title: "Rs 3,050,000",
            description: "Mercedes C180 Sunroof elegance model 1.8L supercharged",
            clickEvent: () => handleClick("https://www.olx.com.pk/item/mercedes-c180-sunroof-elegance-model-iid-1084378273")
        },
        {
            image: "https://images.olx.com.pk/thumbnails/427659471-800x600.webp",
            title: "Rs 5,650,000",
            description: "2Mercedes C250 Avantgarde cgi turbo",
            clickEvent: () => handleClick("https://www.olx.com.pk/item/mercedes-c250-avantgarde-cgi-turbo-iid-1083044763")
        },
        // Add more slides with their respective clickEvent functions
    ];

    return (
        <div>
            <h1 className='cars'> Cars For Sell </h1>
            <ReactCardSlider slides={slides1} />
        </div>
    );
};

export default HomeCard1;

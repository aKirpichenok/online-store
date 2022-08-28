import React from 'react';

const HomeUI = ({ divName, title, imgSRC, onClick }) => {
    const clas = `home-categories__${divName} category`
    return <div className={clas}>
    <div className="category-before">
        <div></div>
    </div>
    <button onClick={onClick}>
            {title}
    </button> 
    <img src={imgSRC} alt={divName} />
</div>
}

export default HomeUI
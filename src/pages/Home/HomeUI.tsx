import React from 'react';

const HomeUI = ({ divName, title, imgSRC, onClick }) => {
    const clas = `home-categories__${divName} category`
    return <div className={clas} onClick={onClick}>
    <div className="category-before">
        <div></div>
        <button>
            {title}
        </button> 
    </div>
    <img src={imgSRC} alt={divName} />
</div>
}

export default HomeUI
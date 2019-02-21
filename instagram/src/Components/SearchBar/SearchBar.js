import React from 'react';
import './SearchBar.css';

const SearchBar = props =>{
        return( 
            <div className = 'search-wrap'>
                <div className= 'search'>
                    <div className= 'left-search'>
                        <img src = 'https://cdn130.picsart.com/259430940027212.png?r1024x1024'
                                    alt = 'insta logo' id = 'insta-logo' />
                        <h1 className= 'insta-head'> Instagram</h1>
                    </div>
                    <div className='mid-search'>
                            <input
                                name = 'input search'
                                id='search-bar' 
                                type="search"        
                                placeholder= " 🔍 Search"
                                onKeyDown={props.searchForPosts}
                            />
                    </div>
                    <div className="right-search">
                        <img id='explore' src= 'https://static.thenounproject.com/png/782776-200.png' alt="explore icon"/>
                        <img id ='like-icon' src='http://vision3films.com/wp-content/uploads/2014/07/RcAK6z4cL.png?w=640' alt="like icon"/>
                        <img id= 'profile'  src='http://www.anthygenus.com.br/mobile/admthy/front/img/icon-user.png' alt="profile icon"/>
                    </div>
                </div>
            </div>
        );
};

export default SearchBar;
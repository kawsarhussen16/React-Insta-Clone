import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            term: ""
        }
    }
    render() {
    return( 
        <div className = 'search-wrap'>
            <div className= 'search'>
                <div className= 'left-search'>
                    <img src = 'http://sternmccafferty.com/wp-content/uploads/2017/06/instagram-icon_1057-2227.jpg'
                                alt = 'insta logo' id = 'insta-logo' />
                    <h1> Instagram</h1>
                </div>
                <div className='mid-search'>
                    <form onSubmit={this.submitHandler}>
                        <input
                            id='search-bar' 
                            type="text"        
                            placeholder="Search" 
                            // value={this.state.input}       
                            onKeyDown={this.searchPosts}
                        />
                    </form> 
                </div>
                <div className="right-search">
                    <img id='explore' src= 'https://static.thenounproject.com/png/782776-200.png' alt="explore icon"/>
                    <img id ='like-icon' src='http://vision3films.com/wp-content/uploads/2014/07/RcAK6z4cL.png?w=640' alt="like icon"/>
                    <img id= 'profile'  src='http://www.anthygenus.com.br/mobile/admthy/front/img/icon-user.png' alt="profile icon"/>
                </div>
            </div>
        </div>
    )
    }
}  


export default SearchBar;
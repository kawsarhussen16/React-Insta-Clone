import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    width: 100%;
    overflow: hidden;
    .search{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 10%;
        @media (max-width: 500px) {
            width: 130%;    
        }
        .left-search{
            width: 33%;
            display: flex;
            flex-wrap: wrap;
            @media (max-width: 500px) {
                    margin-left: -45%;
                    width: 40%;
                }
            img{
                width: 70px;
                height: 70px;
                margin-top: -2%;
                @media (max-width: 500px) {
                        width: 40px;
                        height: 40px;
                    }
            }
            h1{
                font-family: Luminari,'fantasy' ;
                margin: 0;
                font-size: 22px;
                padding: 2%;
                @media (max-width: 500px) {
                    font-size: 20px;
                    padding-top: 0%;
                }

            }
            
        }
        .mid-search{
            width: 33%;
            @media (max-width: 500px) {
                    display: none;     
                }
            #search-bar{
                width: 70%;
                text-align: center;
                font-size: 25px;
                margin-top: 1rem;
            }
        }
        .right-search{
            width: 30%;
            display: flex;
            justify-content: flex-end;
            #like-icon{
                width: 30px;
                height: 30px;
                padding-left: 4%;
            }
            #profile{
                width: 30px;
                height: 30px;
                padding-left: 4%;
            }
            #explore{
                width: 30px;
                height: 30px;
                padding-left: 4%;
            }
        }
        
    }
`;
const SearchBar = props =>{ 
        return( 
            <NavBar className = 'search-wrap'>
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
            </NavBar>
        );
};

export default SearchBar;
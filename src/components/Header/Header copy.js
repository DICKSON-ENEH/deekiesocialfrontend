import React from "react"
import styled from "styled-components"
import {BsSearch} from "react-icons/bs"
import {AiFillHome, AiOutlineHeart} from "react-icons/ai"
import {BiAddToQueue} from "react-icons/bi"
import pic from "/ig.gif"
const Header = ()=>{
    return(
        <Div>
            <Wrapper>
                <Hold>
                <Logo>
                    social build
                </Logo>
                <SearchBar>
                    <Icon/>
                    <Seachinput/>
                </SearchBar>
                </Hold>
                <Hold>
                    <HomeIcon/>
                    <Homeque/>
                    <Homeheart/>
                    <Image src ={pic}/>
                </Hold>
            </Wrapper>
        </Div>
    )
}

export default Header

const Div = styled.div`
width:100;
display:flex;
justify-content:center;
align-items:center;
height:70px;
border-bottom:1px solid silver
`
const Wrapper = styled.div`
width:90%;
display:flex;
align-items:center;
height:100%;
justify-content:space-between;
`
const Hold = styled.div`
display:flex;
height:100%;
align-items:center
`
const Logo = styled.div`
margin-right:40px;
font-weight:500;
font-size:25px;
font-style:italic
`

const SearchBar= styled.div`
display:flex;
align-items:center;
width:350px;
border:1px solid silver;
border-radius:5px;
background:lightgrey

`
const Icon = styled(BsSearch)``
const HomeIcon = styled(AiFillHome)``
const Homeque = styled(BiAddToQueue)``
const Homeheart = styled(AiOutlineHeart)``
const Image = styled.div``
const Seachinput = styled.input`
outline:none;
border:0;
background:transparent;
font-size:20px;
::placeholder{
    font-family:montserrat;

}

`
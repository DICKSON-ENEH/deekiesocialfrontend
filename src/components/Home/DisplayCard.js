import React from "react"
import styled from "styled-components"
import pix from "./ig.gif"

const DisplayCard =({setDisplay})=>{
    return(
        <Container
        onMouseEnter={()=>{
            setDisplay(true)
          }}
          onMouseLeave={()=>{
              setDisplay(false)

          }}
        
        >
            <Wrapper>
                <Top>
                    <Image src={pix}/>
                    <Holder>
                        <Name>
                            name
                        </Name>
                        <DisplayName>displayname</DisplayName>
                        <Realname>real name</Realname>
                        <Follwed>follwed by
                            <span>another name</span>
                        </Follwed>
                    </Holder>
                </Top>
            </Wrapper>
        </Container>
    )
}
export default DisplayCard

const Container = styled.div`
background:white;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        width:350px;
        font-size:12px;
        border-radius:4px;
        z-index:12
`
const Wrapper = styled.div``
const Top = styled.div`
display:flex;
padding:10px 0;
margin-right:20px;
`
const Image = styled.img`
width:100px;
height:100px;
border-radius:50%;
object-fit:cover
`
const Holder = styled.div``
const Name = styled.div`
color:lightblue
`
const DisplayName = styled.div``
const Realname = styled.div`
font-size:13px;
margin-bottom:15px; 
color:silver
`
const Follwed = styled.div`
color:grey
`
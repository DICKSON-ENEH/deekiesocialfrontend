import React , {useState}from "react"
import styled from "styled-components"
import pix from "./ig.gif"
import {FiSettings} from "react-icons/fi"
import {BsGrid3X3, BsBookmark, BsPersonBoundingBox} from "react-icons/bs"
import { MdSlowMotionVideo } from "react-icons/md";

const Detailscreen =()=>{

    const [post, setPost] = useState(true);
	const [video, setVideo] = useState(false);
	const [save, setSave] = useState(false);
	const [tag, setTag] = useState(false)
        
    return(
        
<Container>
    <Wrapper>
        <Top>
           
            <Image src ={pix}/>
            <Contents>
                <NameDetails>
                    <ProfileName>Dickson eneh</ProfileName>
                <EditButton>Edit profile</EditButton>
                <Icon/>
                </NameDetails>
                <NameDetails>
                   <Posts>
                   <Count>{0}</Count>
                <Title>posts</Title>
                   </Posts>
                   <Posts>
                   <Count>{0}</Count>
                <Title>follower</Title>
                   </Posts>
                   <Posts>
                   <Count>{0}</Count>
                <Title>following</Title>
                   </Posts>
               
                </NameDetails>
<Detail>
    <Name>deekie</Name>
    <Bio>A software developer interested in diresupy=tion and adoption of moidern days technology</Bio>
    <Webaddress href="github.com/dickson-eneh">

        connect with me
    </Webaddress>
</Detail>
            </Contents>
        </Top>
        <Nav>
<NavHolder  
	bg={post ? "bg" : ""}
    onClick={() => {
        setPost(true);
        setVideo(false);
        setSave(false);
        setTag(false);
    }}
>
<NavIcon/>

    <Title cap fs>
        post
    </Title>
</NavHolder>
<NavHolder
bg={video ? "bg" : ""}
onClick={() => {
    setPost(false);
    setVideo(true);
    setSave(false);
    setTag(false);
}}
>
<NavIcon1/>

    <Title cap fs>
        video
    </Title>
</NavHolder>
<NavHolder 
bg={save ? "bg" : ""}
onClick={() => {
    setPost(false);
    setVideo(false);
    setSave(true);
    setTag(false);
}}
>
<NavIcon2/>

    <Title cap fs>
        save
    </Title>
</NavHolder>
<NavHolder  
bg={tag ? "bg" : ""}
onClick={() => {
    setPost(false);
    setVideo(false);
    setSave(false);
    setTag(true);
}}
>
<NavIcon3/>

    <Title cap fs>
        Tags
    </Title>
</NavHolder>
        </Nav>
<Postimage>

    <Imagepost src={pix}/>
    <Imagepost src={pix}/>
    <Imagepost src={pix}/>
</Postimage>

    </Wrapper>
</Container>

    )
}
export default Detailscreen

const Imagepost = styled.img`
width:250px;
height:250px;
object-fit:cover;
border:1px solid green
`
const Postimage = styled.div`
width:100%;
justify-content:space-between;
display:flex;
flex-wrap:wrap
`
const Nav = styled.div`

width: 100%;
	display: flex;
	justify-content: center;
	border-top: 1px solid silver;
	/* border-bottom: 1px solid silver; */
	padding: 20px 0;

`
const NavIcon3 = styled(BsPersonBoundingBox)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavIcon2 = styled(BsBookmark)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavIcon1 = styled(MdSlowMotionVideo)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavIcon = styled(BsGrid3X3)`
	font-size: 10px;
	margin-right: 3px;
`;
const NavHolder = styled.div`
display: flex;
	align-items: center;
	margin-right: 30px;
	position: relative;
	:after {
		content: "";
		height: 2px;
		background-color: ${({ bg }) => (bg ? "purple" : "transparent")};
		width: 100%;
		position: absolute;
		top: -21px;
	}
	cursor: pointer;

`
const Container = styled.div`
background:#fafafa;
height:100%;
min-height:calc(100vh - 70px);
width:100%;
padding-top:70px;
display:flex;
justify-content:center;
`
const Wrapper = styled.div`
background:white;
width:768px
`
const Top = styled.div`
margin:20px 40px;
display:flex
`
const Image = styled.img`
width:150px;
height:150px;
border-radius:50%;
background:green
`
const Contents = styled.div`
display:flex;
flex-direction:column;

`
const NameDetails = styled.div`
display:flex;
margin:20px 10px;
/* justify-content:center; */
align-items:center
`
const ProfileName = styled.div`
font-size:25px;
font-weight:lighter;
margin-right:20px;
`
const EditButton = styled.div`
padding:20px 30px ;
background:lightgray;
font-weight:lighter;
margin-right:20px;
font-size:12px;
:hover{
    cursor:pointer
}

`
const Icon = styled(FiSettings)``

const Count = styled.div`
font-weight:500;
margin-right:5px;

`
const Title = styled.div`
text-transform: ${({ cap }) => (cap ? "uppercase" : "normal")};
	font-size: ${({ fs }) => (fs ? "10px" : "12px")};
	font-weight: ${({ fs }) => (fs ? "500" : "normal")};
	color: ${({ fs }) => (fs ? "lightgray" : "black")};
`
const Posts= styled.div`
display:flex;
margin-right:20px;
font-size:13px
`
const Detail = styled.div`
font-size:13px;

`
const Name = styled.div`
font-weight:500
`
const Bio = styled.div``
const Webaddress = styled.a``
import styled,{css} from "styled-components";

const getButtonStyles = (props)=>{
    console.log(props);
    if(props.isGoogleSignIn){
        return googleSignInStyle;
    }

    return props.inverted ? invertedStyle : buttonStyles;
}

const invertedStyle = css`
background-color: white;
color: black;
border: 1px solid black;

&:hover {
  background-color: black;
  color: white;
  border: none;
}
`;
const googleSignInStyle = css`
background-color: #4285f4;
color: white;
border: none;
&:hover{
    background-color: #357ae8;
    border: none;
}
`;

const buttonStyles = css`
        background-color: black;
        color: white;
        border: none;

        &:hover{
            background-color: white;
            color: black;
            border: 1px solid black;
        }
`;

export const CustomButtonContainer = styled.button`
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 12px;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

${getButtonStyles}

`;




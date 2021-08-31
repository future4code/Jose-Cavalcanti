import styled from "styled-components";

export const MainContainer = styled.div`
background-color: #1A173B; 
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const VertMainContainer = styled.div`
background-color: #1A173B; 
width: 100vw;
height:200vh;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 1em;
`

export const Vert2MainContainer = styled.div`
background-color: #1A173B; 
width: 100vw;
height:120vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 5%;
padding-top: 1em;
`

export const BoxContainer = styled.div`
background-color: #577955; 
width: 60%;
height:60%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5%;
box-shadow: 0.2em 0.4em;
`

export const ButtonsContainer = styled.div`
gap: 5em;
display: flex;
justify-content: space-evenly;
`

export const Title = styled.p`
padding: 3% 0; 
font-size: 2em;
color: #A4EA73; 
`
export const TripCard = styled.div`
background-color: #577955; 
width: 70vh;
display: flex;
flex-direction: column;
margin: 1em 0;
padding: 0.5em;
color: white;
gap:0.1em;
`

export const AdminList = styled.div`
display: flex;
border: 1px solid black;
background-color: #577955; 
width: 70vh;
justify-content: space-between;
align-items: center;
padding: 0.4em;
margin: 0.8em;
color: white;    
`

export const Input = styled.input`
font-size: 1em;
padding: 0.5em;
margin: 0.5em;
width: 80%;
background: white;
border: none;
border-radius: 3px;
::placeholder {
color: #1A173B;
}
`

export const Select = styled.select`
font-size: 1em;
padding: 0.5em;
margin: 0.5em;
width: 80%;
background: white;
border: none;
border-radius: 3px;
::placeholder {
color: #1A173B;
}
`
export const FormButton = styled.button`
border-radius: 5px;
background-color: #A4EA73;
padding: 0.7em ;
font-weight: bolder;
color: #1A173B;
`

export const FormDiv = styled.div`
width: 80%;
display: flex;
justify-content: center;
margin-bottom: 2em;
`

export const TripName = styled.p`
:hover {
cursor: pointer
}
`
export const ContFlex = styled.div`
width:100%;
display: flex;
`

export const RightImg = styled.img`
max-width: 300px;
margin-right: 5em;
`
export const FormContainer = styled.div`
margin-left: 2em;
`
import styled from 'styled-components';

export const ProfileWrapper = styled.div`
margin-top: 20px;
display: grid;
justify-content: center;


`
export const ProfileCard = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
background-color: white;
border-radius: 5px;
height: 300px;
justify-content: space-evenly;

`
export const UserAvatar = styled.img`
margin-top: 20px;
width: 100px;
background-color: grey;
border-radius: 50%;
`
export const ProfileParagraph = styled.p`
font-weight: bold;
`
export const ProfileInfo = styled.p`
font-weight: lighter;
`
export const Stats = styled.ul`
display: flex;
justify-content: center;
background-color: #797979;
border-radius: 0px 0px 5px 5px;
`
export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
border: solid 0.1px;
border-color: #C8C8C8;
padding: 10px;
width: 70px;
`
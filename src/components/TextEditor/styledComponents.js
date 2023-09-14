import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 100vh;
    display:flex;
    background-color: #25262c;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const ResponsiveContainerr = styled.div`
    width: 90%;
    max-width: 1140px;
    display: flex;
    background-color: #1b1c22;
    padding:20px;
    @media (max-width: 576px){
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        height: 80vh;
    }
`

export const LeftPart = styled.div`
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items:center;
    @media (max-width: 576px){
        width: 100%;
        height:40vh;
        margin-bottom: 15px;
    }
`

export const Heading = styled.h1`
    color: #ffffff;
    font-family: "Roboto";
    font-size: 28px;
    margin-bottom: 25px;
    text-align: center;
`

export const Image = styled.img`
    width: 80%;
    max-width: 300px;
    margin-top: 40px;
    margin-bottom: 40px;
    @media (max-width: 576px){
        margin-top: 10px;
        margin-bottom: 10px;
        max-width: 150px;
    }
    
`
export const RightPart = styled.div`
    display:flex;
    flex-direction:column;
    border: 1px solid #f1f5f9;
    background-color:  #25262c;
    width:50%;
    border-radius: 8px;
    @media (max-width: 576px){
        width: 100%;
        height:70%;
        margin-top:10px;
    }
`

export const ButtonsContainer = styled.ul`
    display:flex;
    align-items:center;
    padding-left: 14px;
    margin-top:auto;
    margin-bottom:auto;
    padding-top: 10px;
`
export const BtnLi = styled.li`
    padding-left: 0;
    list-style-type:none;
`

export const Btn1 = styled.button`
    border:none;
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.color};
`

export const Btn2 = styled.button`
    border:none;
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.color};
`
export const Btn3 = styled.button`
    border:none;
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.color};
`

export const TextArea = styled.textarea`
    width:50%;
    background-color:  #25262c;
    color: #f8fafc;
    padding-left: 10px;
    outline:none;
    width: 100%;
    height:87%;
    margin-top:auto;
    font-size: 16px;
    padding-top: 10px;
    border:none;
    border-top: 1px solid #cbd5e1;
    font-weight: ${props => props.bold? 'bold': 'normal'};
    text-decoration: ${props => props.underline? 'underline': 'normal'};
    font-style: ${props => props.italic? 'italic': 'normal'};

`
import React from 'react';
import styled from 'styled-components';
import shop from '../images/shop.jpg'

const Footer = () => {
    return(
        <FooterStyle>
            <p>Get In Touch!</p>
            <LeftStyle>
                <div>
                    <h3> Find US Here: </h3>
                    331 Ladera Dr <br />
                    Vallejo CA 94591
                </div>
            </LeftStyle>
            <RightStyle>
            <img src =  {shop}   alt="inside of the store front of the watering can"/>
            </RightStyle>
            <Bottom>
                <p>copyright Bloom Tech 2021</p>
            </Bottom>
        </FooterStyle>
    );
}

export default Footer;

const FooterStyle = styled.div`
    padding: 1em;
    background-color: #266035;
    display:flex;
    align-items: center;
    justify-content: space-between;

    p,  {
        width:100%;
        font-weight: bold;
        font-size: 1.5em;
    }
    
`

const LeftStyle  = styled.div`
    width:100%;
    color:#fff;
    display:flex;
    justify-content: center;
    align-items:center;
    div {
        width: 100%; 
    }    
`
const RightStyle  = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items:center;
    img {
        width:100%
    }
`
const Bottom = styled.div`
    width:100%;
    text-align:right;
    margin-right:5%;
    margin-top:2%;
    p {
        width:100%;
        color:#fff;
    }
`
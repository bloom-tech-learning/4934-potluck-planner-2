
import styled from 'styled-components';
import shop from '../images/shop.jpg'

const Footer = () => {
    return(
        <FooterStyle>            
                <h2>Get In Touch!</h2>            
            <LeftStyle>  
                <div>
                    <img src =  {shop}   alt="inside of the store front of the watering can"/>
                </div>                
            </LeftStyle>
            <RightStyle>
                <div>
                    <h3> Find US Here: </h3>
                    <address>
                        123 Plant Lane<br/>
                        Bloomfield, Ontario<br/>
                        Canada L2G 0X7 <br/>
                    </address>  
                    <label htmlFor="phoneNumber">+1-613-978-8282</label><br/>
                    <label htmlFor="email">info@thewateringcan.ca</label><br/>                   
                </div>
                
            </RightStyle>            
            <Bottom>
                <p>copyright Bloom Tech 2021</p>
            </Bottom>
        </FooterStyle>
    );
}

export default Footer;

const FooterStyle = styled.div`
    background-color:orange;
    display:flex;
    flex-wrap:wrap;
    color:#fff;    
    h2 {
        text-align:center;
        color:#fff;
        width:100%;
    } 
    h3 {
        color:#fff;
        text-align:left;
    }     
`
const LeftStyle  = styled.div`
    width:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    div {
        width:30%;
    }
`
const RightStyle  = styled.div`
    width:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    div {
        line-height:2;
        width:30%;
    } 
`
const Bottom = styled.div`
    width:100%;
    text-align:right;
    p {
        margin-right:3%;
        margin-top:5%;
    }
`
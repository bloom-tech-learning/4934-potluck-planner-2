import styled from 'styled-components';
import header from '../images/header.jpg';
import about_img from '../images/about-img.jpg';
import succulants from '../images/food2.jpg';
import cacti from '../images/food3.jpg';
import tropicals from '../images/food4.jpg';

const Home = () => {
    return (
    <>
        <HomeSection>
            <div>
                <h1>Perfect Potluck</h1>
                <button>Create a Meal</button>
            </div>
        </HomeSection>
        <AboutSection image={ about_img }>
            <div>
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, consequuntur exercitationem! Officiis vel magnam ipsum eius incidunt illo minima nostrum eum harum! Blanditiis tenetur odio corrupti consequatur, reiciendis dolorem quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, porro? Repellat mollitia, qui eveniet ab voluptatibus repellendus, quod dolore minus at, illo exercitationem odio maiores alias laborum atque expedita eius!</p>
            </div>
        </AboutSection>
        <ShopSection>
            <h2>Our Plants</h2>
            <ContainerSection>
                <Succulants>
                    <div>
                        <img src = { succulants } />
                    </div>  
                </Succulants>                  
                <TextSection>
                    <div>
                        <h2>Succulants</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum blanditiis voluptates est, ipsum odio repudiandae eligendi numquam esse autem beatae sequi natus, omnis, veritatis magnam atque iusto nesciunt similique.</p>
                        <button>Shop Now!</button>
                    </div>
                </TextSection>
                <TextSection>
                    <div>
                        <h2>Cacti</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas nobis debitis inventore ratione quasi porro repudiandae, tempora mollitia doloremque aliquam vero accusantium maxime consequatur libero quas reprehenderit esse sint?</p>
                        <button>Shop Now!</button>
                    </div>
                </TextSection>
                <Cacti>
                    <div>
                        <img src = { cacti } />
                    </div>  
                    
                </Cacti>
                <Tropicals>
                    <div>
                        <img src = { tropicals } />
                    </div>  
                </Tropicals>                  
                <TextSection>
                    <div>
                        <h2>Tropicals</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis architecto assumenda eligendi ea optio recusandae illo cum nam quis vitae, iure laboriosam quod minima maiores! Nihil doloribus error rem.</p>
                        <button>Shop Now!</button>
                    </div>
                </TextSection>
            </ContainerSection>
        </ShopSection>
    </>        
    )
}

export default Home;

const HomeSection= styled.div`
    background-image:url(${header});
    background-size:cover;
    background-repeat:no-repeat;
    height:90vh;
    width: 100%;
    
    display:flex;
    justify-content: center;
    align-items: center;
    
    text-align:center;
    background-position: bottom;
        button {
            color:#266035;
            border:2px solid #266035;
        }        
`

const AboutSection = styled.div`
    background-image:url(${about_img});
    background-position: center; 

    display:flex;
    justify-content: flex-end;
    align-items:center;
        div{
                width:22%;
                margin-right:10%;
            }
`

const ShopSection = styled.div`
    padding-bottom:0;            
`
const ContainerSection = styled.div`
    display:flex;
    flex-wrap:wrap;           
`
const Succulants = styled.div`
    width:50%;         
`
const TextSection = styled.div`
    width:50%;         
    display:flex;
    justify-content: center;
    align-items: center;
    padding:6%;
    text-align:center; 
        div {
            width:50%
        }  
        button{
            background-color:#266035;
            color:#fff;
        }    
`
const Cacti = styled.div`    
    width:50%;         
`
const Tropicals = styled.div`    
    width:50%;         
`
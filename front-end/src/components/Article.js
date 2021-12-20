import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Article = (props)=> {
    const {article, handleDelete, handleEditSelect} = props;

    return(<div data-testid = "article" >
        <ArticleStyle>
            <Container>
                {/* <p>{moment(article.class_date.format("ddd, MMM Do YYYY"))}</p> */}
                {/* // <img src={`https://picsum.photos/id/${article.image}/300/300`}/> */}
            </Container>
            <Container>
                <h1 data-testid="headline">{article.class_name}</h1>
                <p data-testid="author">By {article.instructor || "Associated Coacher"}</p>
                <h3 data-testid="summary">{article.type_description}</h3>
                <p data-testid="body">{article.class_location}</p>
            </Container>
        </ArticleStyle>
        
        <ButtonContainer>
            <button data-testid="deleteButton" onClick={()=> {handleDelete(article.id)}}>Delete</button>                
            <button data-testid="editButton" onClick={()=> {handleEditSelect(article.id)}}>Edit</button>
        </ButtonContainer>
    </div>);
}

export default Article;


const ArticleStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5em; 
    background: grey;
`

const Container = styled.div`
    padding: 0.5em; 
`

const ButtonContainer = styled.div`
    padding: 1em;
    text-transform: uppercase;
    text-align:right;

    button {
        width: 100px;
        padding:0.5em;
    }
`
import styled from 'styled-components' 


export const Span = styled.span`
	padding: .5em;
	margin: 1em;
	font-family: Arial, sans-serif;
`
    
export const Button = styled(Span)`
	padding: 0;
	float: right;
  	border: 0.0625rem solid rgb(105, 118, 132);
  	padding: 12px 12px;
  	margin: 0;
  	text-decoration: none;
  	background: #fff;
  	color: #697684;
  	font-family: museo-sans, sans-serif;
  	font-size: 1rem;
  	line-height: 1;
  	cursor: pointer;
  	border-radius: 3px;
  	transition: background 250ms ease-in-out, transform 150ms ease;
  &:hover {
      transition: 300ms ease-in-out;
      background: #4264DD;
        color: #fff;
	  }
`
export const Label = styled.span `
	font-family: Arial,sans-serif;
`

export const Input = styled.input `
	height: 1em;
	margin: .5em;
`

export const Panel = styled.div `
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`
export const BigTextInput = styled(Input) `
	height: 100px;
	width: 50%;
`



// Styling for log in and sign up

export const Container = styled.div`
    min-height: 1000px;
    background-color: #54376E;
    width: 100vw;

    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
`

export const FormWrap = styled.div`
    height: 100%auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
    @media screen and (max-width: 280px) {
        height: 80%;
    }
    `;

export const FormHeading = styled.h1`
    margin-bottom: 40px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;


export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border-color: #000;
    border-radius: 4px;

    @media screen and (max-width: 480px){
        max-width:220px;

    }

    @media screen and (max-width: 375px){
        max-width:170px;
    }
    @media screen and (max-width: 280px) {
        min-width:120px;    
    }
`;

export const FormButton = styled.button`
    background: #fff;
    padding: 16px 0;
    border-color: #4264DD;
    border-radius: 16px;
    color: #4264DD;
    font-size: 20px;
    cursor: pointer;
    margin-top: 60px;

    @media screen and (max-width: 280px) {
        max-width:80px;
    }
    
    &:hover {
        transition: all 0.2 ease-in-out;
        background: #4264DD;
        color: #fff;
    }
`;


export const Form = styled.form`
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 480px){
        padding: 32px 32px;
        max-width:250px;
    }
    @media screen and (max-width: 375px){
        padding: 32px 32px;
        max-width:200px;
    }
    @media screen and (max-width: 280px){
        padding: 32px 32px;
        max-width:155px;
    }
`;

export const FormContent = styled.div`
    margin-top: 120px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
    @media screen and (max-width: 280px) {
        padding: 5px;
    }
`;

// styling for children cards
export const ChildCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    `
    export const ChildCardWrapper = styled.div`
	margin: 0 auto;
	background: #fff;
    padding: 40px;
	display: flex;
    width: 200px;
    height: 200px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: left;
	border-radius: 10px;
	max-width: 640px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	transition: all 0.2 ease-in-out;
	&:hover ${Button} {
		display: inline;
		transition: 250ms ease-in-out, transform 150ms ease;
  }
`
	
// styling for cards
export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
`
// Wrapper defining a column view
export const CardWrapper = styled.div`
	margin: 0 auto;
	background: #fff;
    padding: 40px;
	display: flex;
    width: 600px;
    height: 600px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: left;
	border-radius: 10px;
	max-width: 640px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	transition: all 0.2 ease-in-out;
	&:hover ${Button} {
		display: inline;
		transition: 250ms ease-in-out, transform 150ms ease;
  }
`
export const Text = styled.p`
    font-family: museo-sans, sans-serif;

	font-weight: 500;
	text-align: left;
`

export const ContentWrapper = styled.div`
	padding: 16px 24px;
	display: grid;
    grid-template-columns: 1fr 1fr;
	`
    export const ContentWrapperWishes = styled.div`
	padding: 16px 24px;
	display: grid;
    grid-template-columns: 1fr ;
	`

export const ListingsWrapper = styled.div`
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 50px;
padding: 0 50px;
justify-content: space-between;


@media screen and (max-width: 1340px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    padding: 0 50px;

}
`

export const ChildrenCardsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
    grid-gap: 16px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        /* padding: 0 20px; */
    }
`
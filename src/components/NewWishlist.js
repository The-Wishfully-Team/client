import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {Container, FormWrap, FormHeading, Form, FormInput, FormLabel, FormContent, Button} from './Styled'
import {createWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'
import ChildrenNavbar from './Navbar/ParentNavbar'

function useQuery() {
	return new URLSearchParams(useLocation().search);
  }

export default function NewWishlist() {
	let query = useQuery();

	const initialFormState = {
		name: '',
		child_profile_id: query.get("child_profile_id")
    
	}
	console.log(query)
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	const {dispatch} = useGlobalState()
	const id = initialFormState.child_profile_id



	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value		
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		createWishlist({...formState})
		.then((wishlist) => {
			dispatch({type: 'addWishlist', data: wishlist})
			history.push(`/child/${id}`)
		})
		.catch((error) => console.log(error))

	}
	console.log("rendering New Wishlist")
	return (
		<div>
			<Container>
				<ChildrenNavbar />
				<FormWrap>
					<FormContent>
						<Form>
						<FormHeading>Here you can create your wishlist:</FormHeading>

							<FormLabel>Wishlist:</FormLabel>
							<FormInput type='text' name='name' value={formState.name} onChange={handleChange}></FormInput>
							<Button style={{width: '50px'}}onClick={handleClick}>Create Wishlist</Button>
					</Form>
				</FormContent>
			</FormWrap>

		</Container>

		</div>
	)
}

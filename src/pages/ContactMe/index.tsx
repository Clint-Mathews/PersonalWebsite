import React, { useEffect } from 'react'
import { Container, FormContent, FormWrap, Icon ,Form, FormH1, FormLabel, FormInput, FormButton} from './styles'

const ContactMe = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <Container>
            <FormWrap>
                <Icon to='/PersonalWebsite'>Clint</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Contact Me using.</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput required type='email' />
                        <FormLabel htmlFor='for'>Content</FormLabel>
                        <FormInput required type='text' />
                        <FormButton type='submit'>Send Query</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default ContactMe

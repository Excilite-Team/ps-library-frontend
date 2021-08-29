import { Container } from 'react-bootstrap';
import React from 'react';
import Helmet from 'react-helmet';

export default function Layout({title = "PS Library", description = "Library management system", children}) {
    return (
        <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Excilite" />
        </Helmet>
        <Container>
            {
                children
            }
        </Container>
        </>
    )
}
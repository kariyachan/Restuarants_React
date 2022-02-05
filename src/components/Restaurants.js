import React from 'react'
import { Card , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Restaurants({item}) {
    return (
        <>
        <Link to={`restaurants/${item.id}`}>
            <Card className="my-3 p-3 rounded" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.photograph} />
                <Card.Body>
                    <Card.Title><strong>{item.name}</strong></Card.Title>
                    <Card.Text>
                        <strong>Cuisine : {item.cuisine_type}</strong>
                    </Card.Text>
                    <Card.Text>
                        <strong>{item.neighborhood}</strong>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Link>
        </>
    )
}

import React from 'react'
import Toast from 'react-bootstrap\Toast';

export function Confirmation({ toggle }) {
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className="mr-auto">Your Order Is In The Oven</strong>
            </Toast.Header>
            <Toast.Body>Your pizza will be with you shortly</Toast.Body>
        </Toast>
    );
}

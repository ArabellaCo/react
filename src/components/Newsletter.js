import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, valid }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status])

    const submit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            valid({
                Email: email
            })
    }

    const clearFields = () => {
        setEmail('');
    }
    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3> Subscribe to me!!<br /></h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={submit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
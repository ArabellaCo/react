import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/me.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [imgJump, setImgJump] = useState(0);
    const [charDelete, setCharDelete] = useState(false);
    const [message, setMessage] = useState('');
    const [time, setTime] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toAddText = ["Bella", "Ara", "Arabella"];
    const period = 2000;

    useEffect(() => {
        let second = setInterval(() => {
            sec();
        }, time);

        return () => { clearInterval(second) };
    }, [message])

    const sec = () => {
        let i = imgJump % toAddText.length;
        let paragraph = toAddText[i];
        let updated = charDelete ? paragraph.substring(0, message.length - 1) : paragraph.substring(0, message.length + 1);

        setMessage(updated);

        if (charDelete) {
            setTime(prevTime => prevTime / 2);
        }

        if (!charDelete && updated === paragraph) {
            setCharDelete(true);
            setIndex(prevIndex => prevIndex - 1);
            setTime(period);

        } else if (charDelete && updated === '') {
            setCharDelete(false);
            setImgJump(imgJump + 1);
            setIndex(1);
            setTime(500);

        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>

                        <TrackVisibility>
                            {({ Visible }) =>
                                <div className={Visible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`My name is `}<span className="AddText" dataperiod="1000" data-rotate='["Bella", "Ara", "Arabella"]'><span className="wrap">{message}</span></span></h1>
                                    <p>Hello! I'm Arabella Siachongco, a collage student and web developer based out of Baguio.
                                        I love to make eye-catching designs and user-friendly websites.
                                        I am always open to learning about new opportunities.
                                    </p>
                                </div>}
                        </TrackVisibility>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ Visible }) =>
                                <div className={Visible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

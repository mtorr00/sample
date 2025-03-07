import {useState,useEffect} from 'react'

import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Exciting","Daunting","Terrifying"]
    const [text,setText] = useState('')
    const [delta, setDelta] = useState(300-Math.random()*100)
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)}
    },[text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText=isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length+1)
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum +1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to the React Playground</span>
                        <h1>{`Space: `}<span className="wrap">{text}</span></h1>
                        <p>Space is the boundless three-dimensional extent in which objects and events have relative position and direction.[1] In classical physics, physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.

</p><p>Debates concerning the nature, essence and the mode of existence of space date back to antiquity; namely, to treatises like the Timaeus of Plato, or Socrates in his reflections on what the Greeks called khôra (i.e. "space"), or in the Physics of Aristotle (Book IV, Delta) in the definition of topos (i.e. place), or in the later "geometrical conception of place" as "space qua extension" in the Discourse on Place (Qawl fi al-Makan) of the 11th-century Arab polymath Alhazen.[2] Many of these classical philosophical questions were discussed in the Renaissance and then reformulated in the 17th century, particularly during the early development of classical mechanics. In Isaac Newton's view, space was absolute—in the sense that it existed permanently and independently of whether there was any matter in the space.[3] Other natural philosophers, notably Gottfried Leibniz, thought instead that space was in fact a collection of relations between objects, given by their distance and direction from one another. In the 18th century, the philosopher and theologian George Berkeley attempted to refute the "visibility of spatial depth" in his Essay Towards a New Theory of Vision. Later, the metaphysician Immanuel Kant said that the concepts of space and time are not empirical ones derived from experiences of the outside world—they are elements of an already given systematic framework that humans possess and use to structure all experiences. Kant referred to the experience of "space" in his Critique of Pure Reason as being a subjective "pure a priori form of intuition".

</p><p>In the 19th and 20th centuries mathematicians began to examine geometries that are non-Euclidean, in which space is conceived as curved, rather than flat. According to Albert Einstein's theory of general relativity, space around gravitational fields deviates from Euclidean space.[4] Experimental tests of general relativity have confirmed that non-Euclidean geometries provide a better model for the shape of space.</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="HeaderImg" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
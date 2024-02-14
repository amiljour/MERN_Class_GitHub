import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = "https://akabab.github.io/superhero-api/api";

const Hero = (props) => {

    const [hero, setHero] = useState(null);

    const navigate = useNavigate();
    console.log(navigate);

    // grab the url variable :id
    const { id } = useParams();
    console.log('id: ', id);

    useEffect(() => {
        axios.get(BASE_URL + `/id/${id}.json`)
            .then((res) => {
                console.log("✅✅✅", res.data);
                setHero(res.data);
            })
            .catch((serverErr) => {
                console.log("❌❌❌", serverErr);
                // handle the error!!
                navigate("/error", { replace: true });
            });
    }, []);

    return (
        <fieldset>
            <legend>Hero.jsx</legend>
            🦸‍♂️🦹🦹‍♂️🦸‍♀️
            <hr />
            {/* {JSON.stringify(hero)} */}
            {
                hero ? <>
                    <h2>{hero.name}</h2>
                    <img src={hero.images.sm} alt="" />
                </> : <h4>loading...</h4>
            }
        </fieldset>
    );
};

export default Hero;
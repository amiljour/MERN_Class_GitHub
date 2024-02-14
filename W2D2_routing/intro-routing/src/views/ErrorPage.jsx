import { useNavigate } from "react-router-dom";

const ErrorPage = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <h1>sorry not found</h1>
            <button onClick={() => navigate("/form")}>GO BACK 👈</button >
        </>
    );
};

export default ErrorPage;
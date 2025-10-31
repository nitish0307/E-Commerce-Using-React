import { Header } from "../components/Header";
import { useNavigate } from "react-router";
import './NotFoundPage.css'


export function NotFoundPage() {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <>
      
      <title>Page Not Found</title>
      <Header />
      <div className="page-container">
        <h2 className="error404">
          ERROR <span className="e404">404</span>
          </h2>
        <h1 className="not-found-page">
          Page Not Found</h1>
        <h3 className="message-oops">
          You Might Have Landed on a Wrong Page :(
        </h3>
        <button className="back-to-home-btn" onClick={handleBackHome}>Back To Home</button>
      </div>
    </>
  )
}
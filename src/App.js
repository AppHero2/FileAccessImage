import './App.css';

function App() {
  
  const MY_CLIENT_ID = "9i9ftsjkkrocnfx";
  const MY_REDIRECT_URI = "http://localhost:3000/auth";

  const handleOAuth2 = () => {
    const newPageUrl = `https://www.dropbox.com/oauth2/authorize?client_id=${MY_CLIENT_ID}&redirect_uri=${MY_REDIRECT_URI}&response_type=code`;
    window.open(newPageUrl, "_self");
  }
  return (
    <div className="App">
      <button onClick={handleOAuth2}>
        OAuth 2  
      </button>      
    </div>
  );
}

export default App;

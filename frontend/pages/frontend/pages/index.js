import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';

export default function Home() {
  const { user, error, isLoading } = useUser();

  const sendTokenToBackend = async () => {
    const res = await fetch('/api/token');
    const data = await res.json();

    if (data.token) {
      await axios.post(`${process.env.BACKEND_API}/auth/callback`, {
        token: data.token,
        email: user.email,
      });
      alert('Token sent to backend!');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {!user ? (
        <a href="/api/auth/login">Login</a>
      ) : (
        <div>
          <p>Welcome {user.name}</p>
          <button onClick={sendTokenToBackend}>Send Token to Backend</button>
          <a href="/api/auth/logout">Logout</a>
        </div>
      )}
    </div>
  );
}

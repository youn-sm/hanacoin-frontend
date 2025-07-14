import { LoginBox } from '../components/LoginComponents/LoginBox';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Login(props) {
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('https://hanacoin.hasclassmatching.com/users/login', {
        username,
        password
      });
      
      const token = response.data.access_token;
      localStorage.setItem('token', token); 
      props.setToken(token)
      props.setUsername(username)
      navigate('/home'); 
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
  <LoginBox handleLogin={handleLogin} />
  );
}
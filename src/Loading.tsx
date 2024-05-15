import { useEffect } from 'react';
import { reSizing } from './redux/loading.slice';
import { useAppDispatch } from './redux/index.slices';

const Loading = () => {
    const dispatch = useAppDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
        dispatch(reSizing(false))
    }, 100); // Adjust the duration as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={loadingContainerStyle}>
      <div style={spinnerStyle}></div>
      <h1 style={loadingTextStyle}>Loading...</h1>
    </div>
  );
};

// Explicitly typed loadingContainerStyle function
const loadingContainerStyle ={
  display: 'flex',
  flexDirection: 'column' as const, // Ensure TypeScript recognizes the value as a FlexDirection
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  transition: 'opacity 1s ease', // Add a CSS transition for opacity
};

const spinnerStyle = {
  border: '6px solid rgba(0, 0, 0, 0.3)',
  borderRadius: '50%',
  borderTop: '6px solid #333',
  width: '50px',
  height: '50px',
  animation: 'spin 1s linear infinite'
};

const loadingTextStyle = {
  marginTop: '20px',
  fontSize: '24px',
  color: '#333'
};

const spinKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = spinKeyframes;
document.head.appendChild(styleElement);

export default Loading;

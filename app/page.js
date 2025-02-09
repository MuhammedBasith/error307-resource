

'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/error307');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>CSE COST Association</h1>
        <h2 style={styles.subheading}>Coming Soon</h2>
        <p style={styles.description}>
          We're working hard on something exciting. Stay tuned for the launch!
        </p>

        <div style={styles.countdown}>
          <h3 style={styles.countdownHeading}>Launch Countdown</h3>
          <p style={styles.countdownTimer}>00 : 00 : 00 : 00</p> {/* Placeholder for actual countdown */}
        </div>

        <button style={styles.button} onClick={handleButtonClick}>
          Go to Error 307
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fc', // light background
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    textAlign: 'center',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#1f2a44', // Dark blue color
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '2rem',
    fontWeight: '500',
    color: '#2c3e50', // Dark grey color
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#7f8c8d', // Grey text
    marginBottom: '30px',
  },
  countdown: {
    marginBottom: '30px',
  },
  countdownHeading: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#34495e',
  },
  countdownTimer: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#e74c3c',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1.2rem',
    backgroundColor: '#3498db', // Blue button color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};


import { Colors } from '@constants/colors';

const NotFound = ({ text = 'Not Found.' }: { text: string | null }) => {
  return (
    <p
      style={{
        color: Colors.standard_light_white,
        position: 'absolute',
        left: '50%',
        marginTop: '50px',
        transform: 'translate(-50%)',
        fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
      }}>
      {text}
    </p>
  );
};

export default NotFound;

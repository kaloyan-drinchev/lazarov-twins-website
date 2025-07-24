import { useParams } from 'react-router-dom';

const SingleProgramView: React.FC = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Single Program View</h2>
      <p>Program ID: {id}</p>
      {/* TODO: Display program details here */}
    </div>
  );
};

export default SingleProgramView; 
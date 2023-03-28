import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="loading text-center m-4">
      <h2>Cargando...</h2>
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
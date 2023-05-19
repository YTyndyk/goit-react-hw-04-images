import { BallTriangle } from 'react-loader-spinner';

const Loader = props => {
  return (
    <BallTriangle
      height="100"
      width="100"
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass="BallTriangle-wrapper"
      wrapperStyle={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      visible={true}
    />
  );
};
export default Loader;

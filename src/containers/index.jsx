import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlayer } from 'appActions/player';

const Container = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPlayer());
  });
  return <div>shit</div>;
}
Container.displayName = 'Container';
export default Container;
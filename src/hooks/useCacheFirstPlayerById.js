import { useEffect, useState }  from 'react';
import { fetchPlayer } from 'appActions/player';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerById } from 'appSelectors/player';


const useCacheFirstPlayerById = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const player = useSelector((state)=>getPlayerById(state,id));
  useEffect(()=> {
    (async ()=>{
      setLoading(true);
      if(id) {
        await dispatch(fetchPlayer({id}));
      }
      setLoading(false);
    })();
    
    
    
  },[dispatch,id])

  return {
    player,
    loading
  }

}
export default useCacheFirstPlayerById;
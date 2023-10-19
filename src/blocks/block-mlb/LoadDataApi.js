import React from 'react'

const handleApiCall=()=>{
  console.log('making api call')
}
//TIENE QUE SER ASYNC PORQUE HACE LLAMADO
export default function LoadDataApi() {
  let JsonData = '';
  useEffect(() => {
    JsonData !== '' ? JsonData : handleApiCall();
    return () => {
      cleanup
    };
  }, [input]);

  return (
    <div>LoadDataApi</div>
  )
}

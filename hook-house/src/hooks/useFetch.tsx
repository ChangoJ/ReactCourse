import { useEffect, useState } from 'react';


const localCache:any = {};


export const useFetch = ( url:any ) => {
  
  const [state, setState] = useState({
    data: null ,
    isLoading: true,
    hasError: false,
    error: {
      code: "",
      message: "",
    },
  });

  useEffect(() => {
    getFetch();

  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: {
        code: "",
        message: "",
      },
    });
  }


  const getFetch = async() => {

    if ( localCache[url] ) {
      console.log('Usando caché');
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: {
          code: "",
          message: "",
        },
      });
      return;
    }



    setLoadingState();

    const resp = await fetch(url);

    // sleep
    await new Promise( resolve => setTimeout(resolve, 1500) );

    if ( !resp.ok ) {
      setState({
        data:null,
        isLoading: false,
        hasError: true,
        error: {
          code: String(resp.status),
          message: resp.statusText,
        }
      });
      return;
    }
  
    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: {
        code: "",
        message: "",
      },
    })

    // Manejo del caché
    localCache[url] = data;

  }
  
  


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }

}
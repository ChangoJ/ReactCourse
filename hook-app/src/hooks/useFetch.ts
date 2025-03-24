import { useEffect, useState } from "react";

const localCache:any = {};

export const useFetch = (url:string) => {
  const [state, setState] = useState<{
    data: any;
    isLoading: boolean;
    hasError: boolean;
    error: { code: number; message: string } | null;
  }>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });


  useEffect(() =>{
    getFetch();
  },[url])

  const setLoadingState = () =>{
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
    })




  }


  const getFetch = async() =>{


    if(localCache[url]){
      console.log("usando cache")
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null
      })

      return;
    }

    setLoadingState();
    const resp = await fetch(url); 

    if(!resp.ok){
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error:{
          code: resp.status,
          message: resp.statusText,
        }
      })
      return
    }
    const data = await resp.json();

    await new Promise(resolve => setTimeout(resolve, 3000))

    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null
    })

    //manejo cache

    localCache[url] = data;
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

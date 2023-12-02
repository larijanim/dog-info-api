export function fetchData({setData,setLoading,setErr}){
    fetch("https://dog.ceo/api/breeds/list/all")
     .then(response=>response.json())
     .then(data=>{
      const breeds = data.message;
    const breedNames = Object.keys(breeds);
    const breedsWithSubBreeds = breedNames.reduce((z, breedName) => {
       if (Array.isArray(breeds[breedName]) && breeds[breedName].length>0 ) {
        const subBreeds = breeds[breedName];
        subBreeds.forEach((subBreed) => {
          z.push(`${breedName}/${subBreed}`);
          });
      } else {
        z.push(breedName);
      }
      return z;
    }, []);
    setData(breedsWithSubBreeds);
    })
     .catch(err=>setErr('err'))
     .finally(()=>setLoading(false))     
     }
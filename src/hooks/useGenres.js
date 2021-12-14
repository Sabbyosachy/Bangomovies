
const useGenres = (selectedGens) => {
   if(selectedGens.length<1){
       return "";
   }
   const gensresId=selectedGens.map((g)=>g.id);
   return gensresId.reduce((prev,curr)=>prev+","+curr);
};

export default useGenres;
import React from 'react';
import ContentLoader from "react-content-loader";


export const LoadingCards = () => {
   return  <ContentLoader 
   speed={2}
   width={290}
   height={354}
   viewBox="0 0 290 354"
   backgroundColor="#f3f3f3"
   foregroundColor="#ecebeb"
 >
   <rect x="50" y="8" rx="3" ry="3" width="267" height="165" /> 
   <rect x="50" y="190" rx="3" ry="3" width="267" height="15" /> 
   <rect x="50" y="210" rx="3" ry="3" width="67" height="12" />  
   <rect x="50" y="245" rx="3" ry="3" width="30" height="20" />  
   <circle cx="270" cy="250" r="20" />
  </ContentLoader>
}
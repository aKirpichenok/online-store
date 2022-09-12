import React from 'react';
import ContentLoader from "react-content-loader";


export const LoadingMenu = () => {
   return  <ContentLoader 
   speed={2}
   width={210}
   height={250}
   viewBox="0 0 290 354"
   backgroundColor="#f3f3f3"
   foregroundColor="#ecebeb"
 >
   <rect x="0" y="0" rx="3" ry="3" width="200" height="60" /> 
   <rect x="0" y="80" rx="3" ry="3" width="200" height="60" /> 
   <rect x="0" y="160" rx="3" ry="3" width="200" height="60" />  
   <rect x="0" y="240" rx="3" ry="3" width="200" height="60" /> 
  </ContentLoader>
}
import React, { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Document, Page, pdfjs } from 'react-pdf';
import { useMediaQuery } from 'react-responsive'
// import "react-loader-spinner/dist/loader/";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
const  Brochure = ()=> {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if(isDesktopOrLaptop){
    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'60vh'}}>
        <button style={{zIndex:'100'}} onClick={()=>{
          if(pageNumber>1){
            setPageNumber(pageNumber-1)
          }
        }}><i class="fa-solid fa-circle-arrow-left"></i></button>
        <div style={{width:'50vw', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Document loading={<RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />} file={{url:'https://apiscalant.live/brodownload'}} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document><br/>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <button style={{zIndex:'100'}} onClick={()=>{
        if(pageNumber<numPages){
          setPageNumber(pageNumber+1)
        }
      }}><i class="fa-solid fa-circle-arrow-right"></i></button>
  
      </div>
    );
  }

  if(isTabletOrMobile){
    return (
      <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight:'60vh'}}>
        
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Document loading={<RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />} file={{url:'https://apiscalant.live/brodownload'}} onLoadSuccess={onDocumentLoadSuccess}>
          <Page width='350' pageNumber={pageNumber} />
        </Document><br/>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
     <div style={{display:'flex', gap:'2rem'}}>
     <button style={{zIndex:'100'}} onClick={()=>{
          if(pageNumber>1){
            setPageNumber(pageNumber-1)
          }
        }}><i class="fa-solid fa-circle-arrow-left"></i></button>
      <button style={{zIndex:'100'}} onClick={()=>{
        if(pageNumber<numPages){
          setPageNumber(pageNumber+1)
        }
      }}><i class="fa-solid fa-circle-arrow-right"></i></button>
     </div>
  
      </div>
    );
  }
}

export default Brochure
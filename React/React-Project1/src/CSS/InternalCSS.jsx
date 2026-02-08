
const InternalCSS = ()=>{
    return(
        <>
        <style>
           {` .internalcss{
                color:green;
                border:2px solid red;
            }
        `}
        </style>
        <h1 className="internalcss">This is Internal CSS</h1>
        </>
    );
};
export default InternalCSS;
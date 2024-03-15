export default function StudentFees(){
    return(<div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:"-50px"}}>
        <h4>Please scan the QR code below to make your payment:</h4>
        <img style={{width:"300px",height:"300px"}} src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"/>
        <a href="#" style={{marginTop:"20px"}}>Fee Payment Google Form</a>
    </div>)
}
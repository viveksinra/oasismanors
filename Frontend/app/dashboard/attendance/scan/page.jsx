'use client';
import React,{useState, useEffect} from 'react'
import {Stack,Chip,Divider,Grid   } from '@mui/material/';
import { AiOutlineScan,AiOutlineQrcode } from "react-icons/ai";
import {employeeService} from "../../../services"
import QRCode from 'qrcode'

function ScanAttendance() {
    const [qrMode, setMode] = useState(false)
    
    const generateQR = async text => {
    try {
      console.log(await QRCode.toDataURL(text))
    } catch (err) {
      console.error(err)
    }
  }
  
  const getQR = async ()=>{
    let response = await employeeService.getEmployee(`api/v1/employee/empLeave/random/generate`, "")

    var canvas = document.getElementById('canvas')
    QRCode.toCanvas(canvas, 'sample text', function (error) {
        if (error) console.error(error)
        console.log('success!');
      })
  }
  useEffect(() => {
    const interval = setInterval(
        () => getQR(),
        120000,
    );

    return () => clearInterval(interval);
}, [qrMode]);
  
  return (
    <main style={{background:"#fff",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"10px",padding:20}}>
        <Grid container spacing={2}>
            <Grid item xs={12} className='center'>
            <Stack direction="row" spacing={2} sx={{alignItems:"center"}}>
            <Chip avatar={<AiOutlineScan/>} sx={{cursor:"pointer"}} onClick={()=>setMode(false)} label="Scan For Attendance" color={qrMode ? "default": "info"} variant="outlined" />
            <Divider flexItem sx={{border:"1px solid lightsteelblue", height:"40px", transform: "rotate(30deg)"}}/>
            <Chip avatar={<AiOutlineQrcode/>} sx={{cursor:"pointer"}} onClick={()=>setMode(true)} label="Show QR" color={qrMode ? "info": "default"} variant="outlined" />
            </Stack>
            </Grid>
            <Grid item xs={12}>
            <canvas id="canvas"></canvas>
            </Grid>
        </Grid>

     
      
       
        Scan Me
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dicta temporibus! Beatae debitis eos accusantium saepe! Itaque eligendi ducimus suscipit dignissimos ut ullam. Modi tempora quas maiores odio est ad dicta quae, officia consequuntur iste repellendus veritatis non provident, nisi esse eos. Magnam pariatur inventore enim dolor deleniti quae eaque odio quisquam reiciendis possimus ab alias cum eveniet quasi aliquam, blanditiis numquam voluptatum officiis libero, consequuntur labore deserunt. Eos ipsam veritatis magnam quam repellat autem. Recusandae cupiditate commodi, id temporibus aut pariatur debitis nisi culpa optio ad facilis molestias totam, facere reprehenderit doloribus delectus officiis obcaecati, assumenda nulla vel? Sequi nam nihil dolorum aperiam, consequatur illo laboriosam quas error distinctio, nesciunt facilis adipisci vitae, quis laborum voluptas cupiditate facere repellat. Quo molestiae magnam neque perferendis adipisci? Eveniet ipsum eligendi voluptates iusto ducimus placeat quos illo a ullam suscipit doloremque porro exercitationem, libero aspernatur velit eos molestiae, quidem nihil id, sunt debitis laborum saepe? Quidem soluta nulla eos officiis tenetur quos ullam cumque! Iste laboriosam neque dicta voluptatibus eveniet doloremque tenetur, velit ipsum, maiores commodi quis error laborum, et sint esse ad. Animi neque nesciunt mollitia, cupiditate voluptates voluptatem, harum ratione assumenda eum eveniet temporibus in commodi blanditiis distinctio exercitationem ullam iusto ea ipsa eius? Nostrum mollitia libero pariatur deserunt, quidem quis placeat suscipit soluta est nobis. Libero quas ipsa esse hic! Distinctio pariatur molestiae natus beatae dignissimos magni modi doloremque cupiditate unde, velit laudantium nobis reprehenderit dolorum suscipit expedita quae sed quibusdam. Quam possimus expedita molestias impedit consequatur aperiam nobis adipisci, molestiae nostrum atque accusamus autem vel odio beatae doloremque consequuntur sed labore aut modi blanditiis aliquam accusantium cum. Excepturi, et molestias corrupti maiores recusandae voluptas adipisci molestiae totam ex quidem nisi tempora nesciunt dolorum ipsa. Mollitia earum expedita commodi dicta porro aliquam? Illo atque beatae, vitae blanditiis voluptatem fugit aliquid similique aliquam sequi autem? Consequatur reprehenderit debitis tempore inventore quis repudiandae eum in. Modi, vitae voluptatem optio libero voluptatibus a laudantium quia placeat quos perferendis reiciendis non alias repellat quis nesciunt nam maiores earum labore doloremque! Officia tempora ipsam quasi, vitae dolorem fuga, sapiente voluptatibus facilis, mollitia soluta hic molestias accusantium optio? Distinctio ipsa eligendi asperiores tenetur fuga numquam, optio veritatis facilis cupiditate possimus, architecto incidunt inventore est, cumque porro autem labore! Sed sunt architecto consequatur molestiae laboriosam. Blanditiis illo temporibus accusantium numquam eligendi earum provident possimus et obcaecati rem? Eius debitis ad sunt autem illum animi sed, expedita neque voluptatum nemo? In iste aperiam, beatae nostrum nihil impedit, molestiae laudantium repudiandae nemo asperiores magnam ducimus ullam voluptates debitis nisi saepe aspernatur quis error veritatis autem ratione numquam sequi adipisci? Quas ullam reprehenderit illum saepe itaque labore assumenda, dolore, facilis rem nostrum tempora pariatur unde quasi blanditiis! Voluptatem repellat unde dolore molestias quibusdam sunt nisi rem aliquam temporibus fuga ullam, optio dolorem, quisquam quod incidunt enim aut laudantium nemo ab. Error neque fugiat beatae deleniti, recusandae sed adipisci impedit cumque mollitia necessitatibus tempore. Delectus, deserunt rem. Incidunt minima vitae voluptates cumque ab. Illo vero rem hic nihil quisquam ipsam.    
    </main>
  )
}

export default ScanAttendance
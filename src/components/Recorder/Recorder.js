import React from 'react';
import './Recorder.css'
import { Link } from 'react-router-dom';

const Recorder = () => {

const handleButton = async () => {
    let stream = await navigator.mediaDevices.getDisplayMedia({
        video: true
      })
    
     
      const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") 
                 ? "video/webm; codecs=vp9" 
                 : "video/webm"
        let mediaRecorder = new MediaRecorder(stream, {
            mimeType: mime
        })
    
        let chunks = []
        mediaRecorder.addEventListener('dataavailable', function(e) {
            chunks.push(e.data)
        })
        // mediaRecorder.ondataavailable((e) => {
        //   chunks.push(e.data)
        // })
    
        mediaRecorder.addEventListener('stop', function(){
          let blob = new Blob(chunks, {
              type: chunks[0].type
          })
          
          let url = URL.createObjectURL(blob)
    
          let video = document.querySelector("video")
          video.src = url
    
          let a = document.createElement('a')
          a.href = url
          a.download = 'video.webm'
          a.click()
      })
       
        mediaRecorder.start()
        };
  return(
    <>
   <center>
   <div id='record'>
     <h1 >Rekord Now!</h1>
     <b>Your Online Screen Recording Platform</b>
     <video className="video" width="60%" controls></video>
    <div className="dv">
    <button className="record-btn" onClick={handleButton}>record</button>
    <Link to='/'><button className="record-btn">Home</button></Link>
    </div>
    <h4>Press the record button to start recording</h4>
    </div>
   </center>
    </>
  )
}

export default Recorder;
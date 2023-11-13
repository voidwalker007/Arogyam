import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useEffect, useMemo, useRef, useState } from "react";



const Video = () => {

   

 const myMeeting = async (element: any) => {
        // generate Kit Token
    const roomID="1234"

         const appID = 1255627497;
         const serverSecret = "50cd0bd1ddfec5480135fa0256602142";
     const newLocal:string = "Hello"
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, newLocal, "akshay");
   
   
        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
         zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Personal link',
               url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                 '?roomID=' +
                 roomID,
             },
           ],
           scenario: {
             mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
           },
         });
   
   
     };
  return (
    <div className="h-full w-full flex flex-col align-middle border border-red-500">
    <div
    className="w-full  h-full p-5"
    ref={myMeeting}
    
  >

  </div>
  </div>
  );
};
export default Video;

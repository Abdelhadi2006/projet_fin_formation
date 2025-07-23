import React from "react";
import '../SubPages/Male.css'

function Planning() {

  return (
   <>
        <div>
            
            <div className='TIME'>
                <p>Days</p>
                <p>8-10</p>
                <p>10-12</p>
                <p>12-14</p>
                <p>14-16</p>
            </div>
            <div className='Days'>
                <p className='Sunday'>Sunday</p>
                <p className='Monday'>Monday</p>
                <p className='Sunday'>Tuesday</p>
                <p className='Monday'>Wednesday</p>
                <p className='Sunday'>Thursday</p>
                <p className='Monday'>Friday</p>
                <p className='Saturday'>Saturday</p>
            </div>

        </div>
        
   </>
  );
}

export default Planning;

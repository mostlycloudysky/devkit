import React, {useEffect, useState} from 'react'
import Confetti from 'react-confetti'

function Github() {

  const [confettiFlag, setConfettiFlag] = useState("true")

  useEffect(() => {
    const timer = setTimeout(() => setConfettiFlag("false"), 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
     {confettiFlag === 'true' ? <Confetti /> : 'Confetti load is complete' }
    </div>
  )
}

export default Github


function Summary({isTrans,transcript}:{isTrans:boolean,transcript:string}) {
  return (
    <>
    {isTrans ? 
    <div className="mx-auto backdrop-blur-sm bg-white/20  w-5/6 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <h1 className="text-white">{transcript}</h1>
    </div>
    :null
}
    </>
  )
}

export default Summary

import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import axios from "axios";

const App: React.FC = () => {
  const [link, setLink] = useState<string>("");
  const [transcript, setTranscript] = useState<string>("")
  const [isTrans,setIstrans] = useState<boolean>(false)
  const [isLoad,setLoad] = useState<boolean>(false)

  function extractYouTubeVideoId(link: string): string | null {
    const youtubeRegex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = link.match(youtubeRegex);

    const videoId = match && match[1];

    return videoId || null;
  }

  function extractTextFromXML(xmlString: any) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlString, "text/xml");
    let textNodes = xmlDoc.getElementsByTagName("text");
    let result = "";

    for (let i = 0; i < textNodes.length; i++) {
      result += textNodes[i].textContent?.trim() + "\n";
    }

    return result;
  }

  const getTranscript = async (id: string) => {
    const options = {
      method: "POST",
      url: "https://http-cors-proxy.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        Origin: "www.example.com",
        "X-Requested-With": "www.example.com",
        "X-RapidAPI-Key": "28747d7182mshee9f1794b624a29p174df5jsn6c80cf169e4a",
        "X-RapidAPI-Host": "http-cors-proxy.p.rapidapi.com",
      },
      data: {
        url: `https://youtubetranscript.com/?server_vid2=${id}`,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return extractTextFromXML(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const handilSubmit = async(e:any) => {
    e.preventDefault()
    setLoad(true)
    const videoId: string | null = extractYouTubeVideoId(link);
    if(videoId==null){

    }else{
      let transcripted:string | undefined = await getTranscript(videoId)
      if(transcripted!=undefined){
        setTranscript(transcripted)
        
        setIstrans(true)
        setLoad(false)
      }
      
    }
  };

  return (
    <div
      className="leading-normal tracking-normal text-indigo-400 pb-5 bg-cover bg-fixed bg-[url('/header.png')] "
      style={{ minHeight: "100vh" }}
    >
      <NavBar />
      <Hero isLoad={isLoad}  link={link} setlink={setLink} submit={handilSubmit} />
      <Summary isTrans={isTrans} transcript={transcript}/>
    </div>
  );
};

export default App;

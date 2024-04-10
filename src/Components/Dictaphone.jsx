import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Dictaphone({ action, waitForBackEnd }) {
  const {
    transcript,
    browserSupportsSpeechRecognition,
    listening
  } = useSpeechRecognition();
  useEffect(() => {
    if (!listening && !waitForBackEnd)
      SpeechRecognition.startListening();

  }, [listening, waitForBackEnd])

  useEffect(() => {
    if (transcript !== "" && !listening)
      action(transcript)
  }, [transcript, listening])



  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <p>{transcript}</p>
    </>

  );
}

export default Dictaphone;

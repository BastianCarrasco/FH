import React, { useState, useEffect } from 'react';

const VoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Verifica si el navegador soporta la API de Web Speech
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'es-ES';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      setTranscript(finalTranscript);

      // Verifica si el transcript incluye los comandos específicos
      if (finalTranscript.toLowerCase().includes('comando 1')) {
        handleResponse('Cami esto está funcionando');
      } else if (finalTranscript.toLowerCase().includes('comando 2')) {
        handleResponse('AL gerard es un gato');
      } else {
        setResponse('');
      }
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  const handleResponse = (message) => {
    setResponse(message);
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  };

  const toggleListening = () => {
    setIsListening((prevState) => !prevState);
  };

  return (
    <div>
      <button style={{ backgroundColor: isListening ? "red" : "green" }} onClick={toggleListening}>
        {isListening ? 'Detener' : 'Iniciar'} Reconocimiento de Voz
      </button>
      <p>Transcripción: {transcript}</p>
      {response && <p>Respuesta: {response}</p>}
    </div>
  );
};

export default VoiceRecognition;

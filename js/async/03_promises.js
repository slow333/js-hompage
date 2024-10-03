function handleCallButton(evt) {
  setStatusMessage("Calling...");
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((chatStream) => {
      selfViewElem.srcObject = chatStream;
      chatStream
        .getTracks()
        .forEach((track) => myPeerConnection.addTrack(track, chatStream));
      setStatusMessage("Connected");
    })
    .catch((err) => {
      setStatusMessage("Failed to connect");
    });
}
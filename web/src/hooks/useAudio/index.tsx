import React from "react";

export const useAudio = (url: string): [() => void, (url: string) => void] => {
  const [audio, _setAudio] = React.useState(
    new Audio(require(`../../constants/audio/${url}`))
  );

  const setAudio = (_url: string) => {
    _setAudio(new Audio(require(`../../constants/audio/${_url}`)));
  };

  const play = () => {
    audio.play();
  };

  return [play, setAudio];
};

import React from "react";
import { is } from "date-fns/esm/locale";

const rootAudioPayh = "../../constants/audio";

const getAudio = (audio: any): HTMLAudioElement => new Audio(audio);

export const useAudio = (url: string): [() => void, (url: string) => void] => {
  const [audio, _setAudio] = React.useState(
    getAudio(require(`../../constants/audio/${url}`))
  );
  const [playing, _setPlaying] = React.useState(false);

  const setAudio = (_url: string) => {
    _setAudio(getAudio(require(`../../constants/audio/${_url}`)));
  };

  const play = () => {
    _setPlaying(true);
  };

  React.useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  React.useEffect(() => {
    audio.addEventListener("ended", () => _setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => _setPlaying(false));
    };
  }, []);

  return [play, setAudio];
};

import {useState, useRef, useEffect} from 'react';

type Arguments = {
  interval?: number,
  maxTicks?: number,
};

const useIntervalTimer = ({interval=100, maxTicks=0}: Arguments) => {
  const [tick, setTickState] = useState(1);
  const [started, setStarted] = useState(true);
  const tickRef = useRef(tick);
  const startedRef = useRef(started);
  useEffect(() => {
    const update = () => {
      if(!startedRef.current) {
        return;
      }
      if(maxTicks <= 0 || tickRef.current < maxTicks) {
        tickRef.current = tickRef.current + 1;
        setTickState(tickRef.current);
        window.setTimeout(update, interval);
      } else {
        setStarted(false);
      }
    }
    const timer = window.setTimeout(update, interval);
    return () => window.clearTimeout(timer);
  }, [interval, maxTicks, started]);

  const stop = () => {
    startedRef.current = false;
    setStarted(false);
  };
  const start = () =>  {
    startedRef.current = true;
    setStarted(true);
  }

  const setTick = (tick: number) => {
    tickRef.current = tick;
    setTickState(tick);
  }

  return {tick, started, stop, start, setTick};
}

export default useIntervalTimer;

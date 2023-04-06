import { useEffect, useState } from 'react';
import { Subject } from 'rxjs'

const subject = new Subject();

interface State {
  scores: Scores;
}

export interface Scores {
  teams: Match[];
}

export interface Match {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  timestamp: number;
}

const useStore = () => {
  const [state, setState] = useState<State>({scores: {teams: []}});

  useEffect(() => {
    const subscription = subject.subscribe((state) => {
      setState(state as State);
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const add = (newState: Match) => {
    const updatedState = {
      scores: {
        teams: [
          ...(state && state.scores.teams),
          newState
        ]
      }
    }
    setState(updatedState);
    subject.next(updatedState);
  }

  const update = (newState: Match) => {
    const updatedState = state.scores.teams.map(item => item.timestamp === newState.timestamp ? {...item, ...newState} : item);
    setState({
      scores: {
        teams: updatedState
      }
    });
    subject.next({
      scores: {
        teams: updatedState
      }
    });
  }

  const clear = () => {
    subject.next({});
  }
  
  return { add, update, clear, state };
}

export default useStore;
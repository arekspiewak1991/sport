import { useEffect, useRef, useState } from 'react';
import { Subject } from 'rxjs'

const subject = new Subject();

interface State {
  scores: Scores;
}

export interface Scores {
  teams: Match[];
}

interface Match {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
}

const initialState: State = {
  scores: {
    teams: [
      {
        homeTeam: "",
        homeScore: 0,
        awayTeam: "",
        awayScore: 0
      }
    ]
  }
};

const useStore = () => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    console.log("useEffect inside useStore");
    const subscription = subject.subscribe((state: State) => {
      setState(state);
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const add = (newState: Match) => {
    console.log("Add inside useStore: ", JSON.stringify(newState));
    console.log("Current ", JSON.stringify(state));
    const updatedState = {
      ...state,
      scores: {
        teams: [
          ...state.scores.teams,
          newState
        ]
      }
    }
    setState(updatedState);
    subject.next(updatedState);
  }
  
  const clear = () => {
    subject.next({});
  }
  
  return { add, clear, state };
}

export default useStore;
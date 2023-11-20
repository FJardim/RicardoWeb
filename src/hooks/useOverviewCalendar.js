import {
    addMonths,
    endOfMonth as fnsEndOfMonth,
    getDay,
    isBefore,
    startOfMonth as fnsStartOfMonth,
    subMonths,
    addDays
} from 'date-fns';
import { useCallback } from 'react';
import { useReducer } from 'react';

const ACTION_TYPES = {
    INCREMENT_MONTH: 'increment_month',
    DECREMENT_MONTH: 'decrement_month',
  };
  
  function createInitialState(date) {
    const startOfMonth = fnsStartOfMonth(date);
    const endOfMonth = fnsEndOfMonth(date);
    const startingDayOfWeekNumber = startOfMonth.getDay();
    const endingDayOfWeekNumber = endOfMonth.getDay();
  
    const datesOfFirstWeek = [];
    const datesOfMonth = [];
  
    if (startingDayOfWeekNumber > 0) {
      const missingDays = [...Array(startingDayOfWeekNumber)].map(() => null);
      datesOfFirstWeek.push(...missingDays);
      datesOfMonth.push(datesOfFirstWeek);
    } else {
      datesOfMonth.push([]);
    }
  
    let currentDate = startOfMonth;
  
    while (isBefore(currentDate, endOfMonth)) {
      if (currentDate.getDay() === 0) {
        datesOfMonth.push([currentDate]);
      } else {
        datesOfMonth[datesOfMonth.length - 1].push(currentDate);
      }
  
      currentDate = addDays(currentDate, 1);
    }
  
    if (endingDayOfWeekNumber < 6) {
      const missingDays = [...Array(6 - endingDayOfWeekNumber)].map(() => null);
  
      datesOfMonth[datesOfMonth.length - 1].push(...missingDays);
    }
  
    return {
      selectedDate: date,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      startOfMonth: startOfMonth,
      firstDayOfWeek: getDay(startOfMonth),
      endOfMonth: endOfMonth,
      datesOfMonth,
    };
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case ACTION_TYPES.INCREMENT_MONTH: {
        // pasarle el siguiente mes, esto no es confiable
        return createInitialState(addMonths(state.selectedDate, 1));
      }
      case ACTION_TYPES.DECREMENT_MONTH: {
        // pasarle el siguiente mes, esto no es confiable
        return createInitialState(subMonths(state.selectedDate, 1));
      }
    }
  
    throw Error('Unknown action: ' + action.type);
  }

const useOverviewCalendar = ({initialDate} = {initialDate: new Date()}) => {
    const [state, dispatch] = useReducer(reducer, initialDate, createInitialState);
    
    const decrementMonth = useCallback( () => dispatch({type: ACTION_TYPES.DECREMENT_MONTH}), []);
    const incrementMonth = useCallback( () => dispatch({type: ACTION_TYPES.INCREMENT_MONTH}), []);
    
    return {
        state,
        decrementMonth,
        incrementMonth,
    }
}

export default useOverviewCalendar;
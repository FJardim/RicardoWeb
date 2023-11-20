import useAxios from './useAxios';

const useMealPeriodsForDayOverview = ({day, options, ...axiosConfig} = {}) => {
  const [{data, error, loading}, getMealPeriods] = useAxios(
    {url: `/scheduled-recipes/overview/${day}`, ...axiosConfig},
    {useCache: false, ...options},
  );

  return [{mealPeriods: data ?? [], error, loading}, getMealPeriods];
};

export default useMealPeriodsForDayOverview;

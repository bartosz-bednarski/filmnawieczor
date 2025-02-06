interface submitHandlerArgsType {
  dateRangeStart: string;
  dateRangeEnd: string;
  setError: (
    value: React.SetStateAction<{
      dateRangeStart: boolean;
      dateRangeEnd: boolean;
    }>
  ) => void;
  addDateRangeFilter: () => void;
  setDateRangeStart: (dateRangeStart: string) => void;
  setDateRangeEnd: (dateRangeEnd: string) => void;
  onHide: () => void;
}

type submitHandlerType = ({}: submitHandlerArgsType) => void;

export const submitHandler: submitHandlerType = ({
  dateRangeStart,
  dateRangeEnd,
  setError,
  addDateRangeFilter,
  setDateRangeEnd,
  setDateRangeStart,
  onHide,
}) => {
  if (dateRangeStart === '') {
    setError((state) => ({
      dateRangeStart: true,
      dateRangeEnd: state.dateRangeEnd,
    }));
  }
  if (Number(dateRangeStart) < 0) {
    setError((state) => ({
      dateRangeStart: true,
      dateRangeEnd: state.dateRangeEnd,
    }));
  }
  if (dateRangeEnd === '') {
    setError((state) => ({
      dateRangeStart: state.dateRangeStart,
      dateRangeEnd: true,
    }));
  }
  if (Number(dateRangeStart) > Number(dateRangeEnd)) {
    setError({
      dateRangeStart: true,
      dateRangeEnd: true,
    });
  }
  if (Number(dateRangeStart) < 1900) {
    setError((state) => ({
      dateRangeStart: true,
      dateRangeEnd: state.dateRangeEnd,
    }));
  }
  if (Number(dateRangeEnd) < 1900) {
    setError((state) => ({
      dateRangeStart: state.dateRangeStart,
      dateRangeEnd: true,
    }));
  }
  if (
    dateRangeStart !== '' &&
    dateRangeEnd !== '' &&
    Number(dateRangeStart) <= Number(dateRangeEnd) &&
    Number(dateRangeStart) >= 0 &&
    Number(dateRangeStart) >= 1900 &&
    Number(dateRangeEnd) >= 1900
  ) {
    addDateRangeFilter();
    setDateRangeStart('');
    setDateRangeEnd('');
    setError({dateRangeEnd: false, dateRangeStart: false});
    onHide();
  }
};

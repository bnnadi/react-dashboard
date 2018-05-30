const timesheetActions = {
    INIT_DATA: 'TIMESHEET_INIT_DATA',
    INIT_DATA_SAGA: 'TIMESHEET_INIT_DATA_SAGA',
    initData: () => ({ type: timesheetActions.INIT_DATA_SAGA }),
};

export default timesheetActions;
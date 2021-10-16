import * as types from "../constants/doctor.constant";

const initialState = {
    doctors: [],
    loading: false,
};

const doctorReducer = (state = initialState, action) => {
    console.log("this action", action)
    const { type, payload } = action;

    switch (type) {
        case types.GET_DOCTORS_REQUEST:
            return { ...state, loading: true };
        case types.GET_DOCTORS_SUCCESS:
            return { ...state, doctors: payload, loading: false };
        case types.GET_DOCTORS_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default doctorReducer;
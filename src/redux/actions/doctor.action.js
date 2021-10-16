import { toast } from "react-toastify";
import * as types from "../constants/doctor.constant";
import api from "../../apiService";

const getDoctors = () => async (dispatch) => {
    dispatch({ type: types.GET_DOCTORS_REQUEST, payload: null });
    try {
        let url = `${process.env.REACT_APP_BACKEND_API}/doctors`;
        const data = await api.get(url);
        console.log("doctors array", data)
        dispatch({ type: types.GET_DOCTORS_SUCCESS, payload: data });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_DOCTORS_FAILURE, payload: error });
    }
};


// const getDoctorDetail = (doctorId) => async (dispatch) => {
//     dispatch({ type: types.GET_DOCTOR_DETAIL_REQUEST, payload: null });
//     try {
//         let url = `${process.env.REACT_APP_BACKEND_API}/doctors/${doctorId}`
//         const data = await api.get(url);
//         console.log("this data", data)
//         dispatch({ type: types.GET_DOCTOR_DETAIL_SUCCESS, payload: data });
//     } catch (error) {
//         toast.error(error.message);
//         dispatch({ type: types.GET_DOCTOR_DETAIL_FAILURE, payload: error });
//     }
// };

const doctorActions = { getDoctors };
export default doctorActions;
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners';
import doctorAction from '../../redux/actions/doctor.action'
import DoctorCard from '../../components/DoctorCard/DoctorCard';

import './style.css'
import SortBar from '../../components/NavigationBar/SortBar';

const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(doctorAction.getDoctors());
    }, [dispatch]);

    const state = useSelector(state => state)
    const doctors = state.doctors.doctors
    const loading = state.doctors.loading



    return (
        <div className="container">
            <section className="filter-section">
                <SortBar />
            </section>
            <section className="card-section">
                {loading ? (
                    <div className="text-center">
                        <ClipLoader color="#f86c6b" size={150} loading={true} />
                    </div>
                ) : (
                    <div>
                        {doctors.map((doctor) => (
                            <DoctorCard {...doctor} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}

export default HomePage

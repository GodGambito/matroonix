import React from 'react';
import bgImg from '../../assets/img/appointment.jpg';
import appointmentData from './appointmentData';
import AppointmentItem from './AppointmentItem';

function Apointment() {
    return (
        <section className="make-appointment-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-12 col-lg-5">
                        <div className="appointment-notice-board">
                            <div
                                className="notice-board-banner bg-cover"
                                style={{ backgroundImage: `url(${bgImg})` }}
                            />
                            <div className="appointment-list">
                                <h2>Make Appointment</h2>

                                {appointmentData.map((data) => (
                                    <AppointmentItem
                                        key={data.id}
                                        day={data.day}
                                        time={data.time}
                                    />
                                ))}
                                <div className="appointment-time d-flex justify-content-between">
                                    <span>Saturday / Sunday</span>
                                    <span>Off Day</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-7 col-12 mt-5 mt-lg-0 px-lg-4">
                        <div
                            className="map-wrapper map-iframe"
                            style={{ width: '100%', height: '100%' }}
                        >
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1454.8469904741671!2d-81.56327575098179!3d28.373674798430788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7f6a0d006225%3A0x30fd336626c113ab!2sWalt%20Disney%20World%20Solar%20Farm!5e1!3m2!1ses!2scl!4v1686418508016!5m2!1ses!2scl"
                                style={{ border: '0', height: '100%', width: '100%' }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Apointment;

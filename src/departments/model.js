import Doctor from './doctor.js';

const fetchDoctorsData = async () => {
    const response = await fetch('/doctorsData.json');
    const doctorsData = await response.json();

    return doctorsData;
};  

const hydrateDoctorsData = async () => {
    const plainDoctorRegistry = await fetchDoctorsData();
    const doctorRegistry = plainDoctorRegistry.map((plainDoctorObject) => new Doctor(plainDoctorObject));

    return doctorRegistry;
};

export const departmentModel = {
    hydrateDoctorsData,
}
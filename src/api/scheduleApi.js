import $ from 'jquery';
class ScheduleApi {
    static getSchedule() {
        return (
            new Promise ((resolve, reject) => {
                $.ajax({
                    url: 'http://localhost:3000/api/schedule',
                    type: 'GET',
                    dataType: 'json',
                    contentType: 'application/json',
                    success: data => {
                        return resolve(data);
                    },
                    error: errorMessage => {
                        return reject(errorMessage);
                    }
                });
            })
        );

    }

    static saveScheduleItem(scheduleItem) {
        return (
            new Promise ((resolve, reject) => {
                $.ajax({
                    url: 'http://localhost:3000/api/schedule',
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(scheduleItem),
                    success: data => {
                        return resolve(data);
                    },
                    error: errorMessage => {
                        return reject(errorMessage);
                    }
                });
            })
        );
    }
}

export default ScheduleApi;
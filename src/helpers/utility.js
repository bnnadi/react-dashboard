import { Map } from 'immutable';

export function clearToken() {
    localStorage.removeItem('token');
}

export function getToken() {
    try {
        const token = localStorage.getItem('token');
        return new Map({token})
    } catch(e) {
        clearUser();
        return new Map();
    }
}

export function clearUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

export function getUser() {
    try {
        const user = localStorage.getItem('user');
        return new Map({user})
    } catch(e) {
        clearUser();
        return new Map();
    }
}

export function formatDate(str) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November","December"
    ]

    var parts = str.match(/(\d+)/g);
    var date = new Date(parts[0], parts[1]-1, parts[2])

    return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
}

export function timeDifference(givenTime) {
    givenTime = new Date(givenTime);
    const milliseconds = new Date().getTime() - givenTime.getTime();
    const numberEnding = number => {
        return number > 1 ? 's' : '';
    };
    const number = num => (num > 9 ? '' + num : '0' + num );
    const getTime = () => {
        let temp = Math.floor(milliseconds / 1000);
        const years = Math.floor(temp / 31536000);
        if (years) {
            const month = number(givenTime.getUTCMonth() + 1);
            const day = number(givenTime.getUTCDate());
            const year = givenTime.getUTCFullYear() % 100;
            return `${day}-${month}-${year}`;
        }
        const days = Math.floor((temp %= 31536000) / 86400);
        if (days) {
            const months = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ];
            const month = months[givenTime.getUTCMonth()];
            const day = number(givenTime.getUTCDate());
            return `${day} ${month}`;
        }
        const hours = Math.floor((temp %= 86400) / 3600);
        if (hours) {
            return `${hours} hour${numberEnding(hours)} ago`;
        }
        const minutes = Math.floor((temp %= 3600) / 60);
        if (minutes) {
            return `${minutes} minute${numberEnding(minutes)} ago`;
        }
        return 'a few seconds ago'; 
    };
    return getTime();
}

export function stringToInt(value, defValue = 0) {
    if (!value) {
        return 0;
    } else if (!isNaN(value)) {
        return parseInt(value, 10);
    }
    return defValue;
}

export function stringToPositiveInt(value, defValue = 0) {
    const val = stringToInt(value, defValue);
    return val > -1 ? val : defValue;
}
let date = new Date();

function getDaySuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

let day = date.getDate();
let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = monthNames[date.getMonth()];
let year = date.getFullYear();

let dayWithSuffix = day + getDaySuffix(day);

let formattedDate = `${dayWithSuffix} ${month}, ${year}`;

export default formattedDate;
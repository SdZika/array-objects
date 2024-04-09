const conferenceSchedule = {
    days: [
        {
            date: '2024-04-10',
            sessions: [
                {
                    title: 'JavaScript: The Future',
                    speaker: 'Alex Johnson',
                    attendees: 120
                },
                {
                    title: 'CSS for the Future Web',
                    speaker: 'Emily Davis',
                    attendees: 80
                }
            ]
        },
        {
            date: '2024-04-11',
            sessions: [
                {
                    title: 'Advanced Node.js',
                    speaker: 'Michael Brown',
                    attendees: 90
                },
                {
                    title: 'Scalable Vector Graphics (SVG)',
                    speaker: 'Laura White',
                    attendees: 60
                }
            ]
        }
    ]
};




for (let i = 0; i < conferenceSchedule.days.length; i++) {
    let totalAttendees = 0;
    let day = conferenceSchedule.days[i];
    
    for (let j = 0; j < day.sessions.length; j++) {
        let sessions = day.sessions[j];
        totalAttendees += sessions.attendees;
    }
    console.log(`Date: ${day.date}, Total Attendees: ${totalAttendees}`);
}

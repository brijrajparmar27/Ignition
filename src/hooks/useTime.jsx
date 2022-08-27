import { useEffect, useState } from "react"

const useTime = () => {
    const [now, setNow] = useState({});

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const getNow = () => {
        var currentTime = new Date();
        var hours = currentTime.getHours()>12?currentTime.getHours()-12:currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var day = days[currentTime.getDay()];
        var month = months[currentTime.getMonth()];
        var date = currentTime.getDate();
        return {
            hours,
            minutes,
            day,
            month,
            date,
        }
    }
    useEffect(() => {
        setInterval(() => {
            setNow(getNow());
        }, [1000])
    }, [])

    return { now }
}
export default useTime;
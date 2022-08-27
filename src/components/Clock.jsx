import useTime from "../hooks/useTime";
import "./clock.css"

const Clock = ()=>{
    const {now} = useTime();

    return(
        <div className="clock_contain">
            <p className="day">
                {now.day}
            </p>
            <p className="time">
                {now.hours}:{now.minutes}
            </p>
            <p className="date">
                {now.date} {now.month}
            </p>
        </div>
    );
}
export default Clock;
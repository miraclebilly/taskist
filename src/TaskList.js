

export default function TaskList({tasks}) {
    return(
        <div>
            <h2>TaskList:</h2>
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}
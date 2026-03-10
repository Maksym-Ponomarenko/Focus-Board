import { useAppDispatch, useAppSelector } from "@/store";
import { tasksActions } from "@/store/taskSlice";
import styles from "./TaskToggle.module.scss";

export const TasksToggle = () => {
    const dispatch = useAppDispatch();
    const listType = useAppSelector((state) => state.tasks.listType);

    return (
        <div className={styles.toggle}>
            <button
                type="button"
                className={`${styles.toggleButton} ${
                    listType === "tasks" ? styles.active : ""
                }`}
                onClick={() => dispatch(tasksActions.toggleListType("tasks"))}
            >
                Tasks
            </button>

            <button
                type="button"
                className={`${styles.toggleButton} ${
                    listType === "completedTasks" ? styles.active : ""
                }`}
                onClick={() => dispatch(tasksActions.toggleListType("completedTasks"))}
            >
                Completed
            </button>
        </div>
    );
};
import React, {FC} from 'react';
import Modal from "@/shared/components/Modal/Modal";
import TaskForm from "@/app/components/TaskForm/TaskForm";

export interface ICreateTaskModalProps {
    modalActive: boolean;
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTaskModal: FC<ICreateTaskModalProps> = ({modalActive, setModalActive}) => {
    return (
         <Modal active={modalActive} setActive={(value) => setModalActive(value)}>
            <TaskForm/>
        </Modal>
    );
};

export default CreateTaskModal;
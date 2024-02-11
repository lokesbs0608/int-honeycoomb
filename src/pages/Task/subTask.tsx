import styles from "../styles.module.scss";
import CustomInput from "../../Component/CustomInput";
import DragDrop from "../../Component/DropZone";
import Button from "@mui/material/Button/Button";
import { useState } from "react";
import { Modal } from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: "100%",
    bgcolor: "background.paper",
};

interface Props {
    open: any;
    onClose: () => void;
    onCreate: (data: any) => void
}
const subTask = ({ open, onClose, onCreate }: Props) => {
    const handleClose = () => onClose();
    const [values, setValues] = useState<any>({
        due_date: "",
        duration: "",
        status: "",
        id: 0,
        files: [],
        sub_task: [],
    });

    const handleTaskDetailsChange = (e: any) => {
        let { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };


    const MultiFilesUrl = (url: string) => {
        let temp = values?.files;
        temp.push(url);
        setValues({ ...values, files: temp });
    };

    const addTask = () => {
        setValues({ ...values, id: generateUUID() });
        if (
            values?.id &&
            values.title &&
            values?.reporting_to &&
            values?.assigned_to &&
            values?.Start_Date &&
            values.End_Date
        ) {
            onCreate(values)
        } else {
            alert("Fil The Details");
        }
    };
    function generateUUID() {
        let uuid = "";
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrs tuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < 6; i++) {
          uuid += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return uuid;
      }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={style}
        >
            <div style={{ width: '60%', height: '100%', padding: '30px', position: 'relative', left: '42%', overflow: 'scroll' }}>
                <div style={{ padding: '30px' }} className={styles.dashboard_bg}>
                    <div className="row p-4">
                        <div className="col-md-4 col-lg-3">
                            <CustomInput
                                id="title"
                                placeHolder="Enter Task Name"
                                title="Task title"
                                name="title"
                                onChange={handleTaskDetailsChange}
                            />
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <CustomInput
                                id="assigned_to"
                                placeHolder="Assignee"
                                title="Assignee"
                                name="assigned_to"
                                onChange={handleTaskDetailsChange}
                            />
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <CustomInput
                                id="reporting_to"
                                placeHolder="Reporting to"
                                title="Reporting"
                                name="reporting_to"
                                onChange={handleTaskDetailsChange}
                            />
                        </div>
                        <div className="col-md-4   col-lg-3">
                            <div className="row">
                                <div className="col-6">
                                    <CustomInput
                                        id="Start_Date"
                                        placeHolder="Start Date"
                                        title="Start Date"
                                        name="Start_Date"
                                        onChange={handleTaskDetailsChange}
                                        type="date"
                                    />
                                </div>
                                <div className="col-6">
                                    <CustomInput
                                        id="End_Date"
                                        placeHolder="End_Date"
                                        title="End date"
                                        name="End_Date"
                                        onChange={handleTaskDetailsChange}
                                        type="date"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-6">
                            <DragDrop onUpload={(url: string) => MultiFilesUrl(url)} />
                        </div>

                        <div className="col-6 my-3">
                            <CustomInput
                                id="comments"
                                placeHolder="Comments"
                                title="Comments"
                                name="Comments"
                                multiline={true}
                                onChange={handleTaskDetailsChange}
                                type="date"
                            />
                        </div>
                    </div>
                    <div>
                        <Button onClick={addTask}>Addd</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default subTask;

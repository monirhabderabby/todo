import { format } from "date-fns";
import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

const DayPickerModal = ({ modal, setIsPickDate, setDate }) => {
    const [date, setSelectedDate] = useState(new Date())
    const handleDeadline = () => {
        setDate(format(date, "PP"));
        setIsPickDate(false);
    }
    return (
                <React.Fragment>
                <Modal show={modal} onClose={() => setIsPickDate(false)}>
                    <Modal.Header>Pick a Deadline</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6 flex justify-center">
                            <DayPicker 
                            mode="single"
                            selected={date}
                            onSelect={setSelectedDate}
                            
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleDeadline}>I accept</Button>
                        <Button
                            color="gray"
                            onClick={() => setIsPickDate(false)}
                        >
                            Decline
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
    );
};

export default DayPickerModal;

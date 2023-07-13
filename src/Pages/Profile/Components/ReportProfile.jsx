import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../../Hooks/useAuthContext";

export default function ReportProfile({ isOpen, onOpen, onClose, reportedId }) {

  const navigate = useNavigate();
  const [reportMessage, setReportMessage] = useState("");
  const { user } = useAuthContext();
  const handleReport = async () => {
    try {
      const res = await axios.post(
        `https://back-ph2h.onrender.com/report/report_user/${reportedId}/?auth_token=${localStorage.getItem(
          "token"
        )}`,
        { report_messages: reportMessage, reporterId: user._id }
      );
      console.log(res);
      console.log("reported");
      navigate("/jobs");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Report The User!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div className="rating-Profile mb-2 text-center"></div>
            <FormControl mb={1}>
              <FormLabel>Report Reason</FormLabel>
              <Textarea
                placeholder="Report Message"
                value={reportMessage}
                onChange={(e) => setReportMessage(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                handleReport();
              }}
              colorScheme="red"
              mr={3}
            >
              Report
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

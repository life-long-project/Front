import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FinshJob({ isOpen, onOpen, onClose, job }) {
  const navigate = useNavigate();
  const [userRating, SetUserRating] = useState({
    rating: 5,
    feedback: "",
  });
  console.log(userRating);
  const handleSendRating = async () => {
    try {
      const res = await axios.post(
        `https://back-ph2h.onrender.com/rate/user/${job}/?auth_token=${localStorage.getItem(
          "token"
        )}`,
        userRating
      );
      console.log(res);
      // navigate("/jobs")
    } catch (error) {
      console.log(error);
    }
  };
  const handleFinish = async () => {
    console.log("finished");
    try {
      const res = await axios.post(
        `https://back-ph2h.onrender.com/jobs/update_status/${job}/?auth_token=${localStorage.getItem(
          "token"
        )}`,
        { is_finished: "true" }
      );
      console.log(res);
      navigate("/jobs");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Finish This Job!</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {" "}
          <div className="rating-Profile">
            <Rating
              className="ratingProfile"
              emptySymbol={<BsStarFill className="emptySymbol" />}
              fullSymbol={<BsStarFill className="fullSymbol" />}
              fractions={2}
              placeholderRating={5}
              initialRating={userRating.rating}
              onChange={(value) =>
                SetUserRating({ rating: value, feedback: userRating.feedback })
              }
            />
          </div>
          <FormControl mb={2}>
            <FormLabel>FeedBack</FormLabel>
            <Input
              placeholder="FeedBack"
              value={userRating.feedback}
              onChange={(e) =>
                SetUserRating({
                  rating: userRating.rating,
                  feedback: e.target.value,
                })
              }
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              handleSendRating();
              handleFinish();
            }}
            colorScheme="green"
            mr={3}
          >
            Finish
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

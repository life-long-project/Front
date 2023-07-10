import React, { useState } from "react";
import "./ApplyNewOffer.css";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Image,
  AspectRatio,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { AiFillFileAdd } from "react-icons/ai";
import axios from "axios";

export default function ApplyNewOffer({
  isOpen,
  onOpen,
  onClose,
  job,
  getJob,
  id,
}) {
  const [file, setFile] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);

  const [OfferData, setOfferData] = useState({
    price: "",
    message: "",
  });

  async function submitFormData(e) {
    e.preventDefault();
    setError(null);
    setSubmitLoading(true);
    try {
      const postResponse = await axios.post(
        `https://back-ph2h.onrender.com/offer/apply/${
          job._id
        }/?auth_token=${localStorage.getItem("token")}`,
        OfferData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSubmitLoading(false);
      console.log(postResponse);
      getJob(`https://back-ph2h.onrender.com/jobs/${id}`);
      onClose();
    } catch (error) {
      setError(error);
      setSubmitLoading(false);
      console.log(error);
    }
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setError(null);
          onClose();
        }}
        scrollBehavior="inside"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <>
            <ModalHeader>Apply New Offer</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {error && (
                <Alert status="warning">
                  <AlertIcon />
                  {/* {error.message} */}
                  sorry!...couldn't apply 
                </Alert>
              )}
              {!error && (
                <>
                  {/* <FormControl mb={2}>
                              <FormLabel>Job Title</FormLabel>
                              <Input placeholder="Job Title" value={job.job_name} disabled />
                            </FormControl>
                            <FormControl mb={2}>
                              <FormLabel>User Name</FormLabel>
                              <Input
                                placeholder="User Name"
                                value={job.user.full_name}
                                disabled
                              />
                            </FormControl> */}
                  <FormControl mb={2}>
                    <FormLabel>Offer Note ?</FormLabel>
                    <Textarea
                      placeholder="Add Your Offer Note"
                      onChange={(e) => {
                        setOfferData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }));
                      }}
                    />{" "}
                  </FormControl>
                  <FormControl mb={2}>
                    <FormLabel>Offer Price</FormLabel>
                    {/* <Input
                                placeholder="Enter Your Offer Price (LE)"
                                type="number"
                              /> */}

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children="E£"
                        fontSize="1.2em"
                      />
                      <Input
                        placeholder="Enter amount"
                        onChange={(e) => {
                          setOfferData((prev) => ({
                            ...prev,
                            price: e.target.value,
                          }));
                        }}
                      />
                      {/* <InputRightElement>
                      <CheckIcon color='green.500' />
                    </InputRightElement> */}
                    </InputGroup>
                  </FormControl>
                  <FormControl mb={2}>
                    <FormLabel className="custom-file-upload">
                      <AiFillFileAdd />
                    </FormLabel>
                    <Input
                      type="file"
                      className="d-none"
                      placeholder="Add Your Resume"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />{" "}
                    {file && (
                      <AspectRatio maxW="100%" ratio={1}>
                        <iframe
                          title="naruto"
                          src={URL.createObjectURL(file)}
                          objectFit="contain"
                        />
                      </AspectRatio>
                    )}
                  </FormControl>
                </>
              )}
            </ModalBody>

            <ModalFooter>
              {!error && (
                <Button
                  loadingText="Logining..."
                  colorScheme="green"
                  mr={3}
                  onClick={submitFormData}
                  isLoading={submitLoading}
                >
                  Apply
                </Button>
              )}

              <Button
                onClick={() => {
                  setError(null);
                  onClose();
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

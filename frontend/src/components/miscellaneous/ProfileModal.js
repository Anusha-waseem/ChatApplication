import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader bg='#e56abc'
            fontSize="40px"
            fontFamily="kalam"
            borderWidth='10px'
            borderColor='white'
            d="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          
          <ModalBody bg='#e56abc'
            d="flex"
            flexDir="column"
            alignItems="center"
            borderWidth='10px'
            borderColor='white'
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="250px"
              borderColor='black'
              borderWidth='10px'
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="kalam"
              textColor='black'

            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter borderWidth='5px' borderColor='white' bg='#e56abc'>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;

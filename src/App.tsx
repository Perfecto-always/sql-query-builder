import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Editable,
  EditablePreview,
  EditableTextarea,
} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [schema, setSchema] = useState("CREATE TABLE");

  function toggleModal() {
    setVisible(!visible);
  }

  return (
    <div className="App">
      <Button onClick={toggleModal}>Add schema for Tables</Button>
      <Modal isOpen={visible} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start typing your schema for table</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Editable placeholder="Enter your schema">
              <EditablePreview />
              <EditableTextarea
                value={schema}
                onChange={(e) => setSchema(e.target.value)}
              />
            </Editable>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={toggleModal}>
              Close
            </Button>
            <Button>Add your schemas</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;

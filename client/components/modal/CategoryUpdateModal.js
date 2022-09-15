import { EditOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Button } from "antd";

const CategoryUpdateModal = ({visible, setVisible, handleUpdate, updatingCategory}) => {
  return (
    <Modal
      title="Update Category"
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
    >
        <Form onFinish={handleUpdate} fields={
            [
                {name: ['name'], value: updatingCategory.name}
            ]
        }>
            <Form.Item name="name">
              <Input
                prefix={<EditOutlined className="site-form-item-icon" />}
                placeholder="Give it a name"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
    </Modal>
  );
};

export default CategoryUpdateModal;

import { useEffect, useState } from "react";
import { Layout } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Form, Input, Row, Col, Button, List } from "antd";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import CategoryUpdateModal from "../../../components/modal/CategoryUpdateModal";

const { Content, Sider } = Layout;

function Categories() {
  // state
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  //update state
  const [updatingCategory, setUpdatingCategory] = useState([]);
  const [visible, setVisible] = useState(false);
  //hooks

  const [form] = Form.useForm();

  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onFinish = async (values) => {
    // console.log("values => ", values);
    try {
      setLoading(true);
      const { data } = await axios.post("/category", values);
      setCategories([data, ...categories]);
      toast.success("Category created successfully");
      setLoading(false);
      form.resetFields(["name"]);
    } catch (err) {
      console.log(err);
      toast.error("Category create failed");
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
      const { data } = await axios.delete(`/category/${item.slug}`);
      setCategories(
        categories.filter((category) => category.slug !== data.slug)
      );
      toast.success("category deleted successfully");
    } catch (err) {
      console.log(error);
      toast.error("Category delete faild");
    }
  };

  const handleEdit = async (item) => {
    setUpdatingCategory(item);
    setVisible(true);
  };

  const handleUpdate = async (values)=> {
    try {
      const {data} = await axios.put(`/category/${updatingCategory.slug}`, values)
      const newCategories = categories.map(category=>  {
        if(category._id === data._id){
          return data
        }
        return category
      })
      setCategories(newCategories)
      toast.success('category update successfully')
      setVisible(false)
      setUpdatingCategory({})
    } catch (error) {
      console.log(error);
      toast.error('Category update fail')
    }
  }
  return (
    <AdminLayout>
      <Row>
        {/* first column */}
        <Col xs={22} sm={22} lg={10} offset={1}>
          <h1>Categories</h1>
          <p>Add new category</p>

          <Form onFinish={onFinish} form={form}>
            <Form.Item name="name">
              <Input
                prefix={<EditOutlined className="site-form-item-icon" />}
                placeholder="Give it a name"
              />
            </Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Col>
        {/* second column */}
        <Col xs={22} sm={22} lg={10} offset={1}>
          <List
            itemLayout="horizontal"
            dataSource={categories}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <a onClick={() => handleEdit(item)}>Edit</a>,
                  <a onClick={() => handleDelete(item)}>delete</a>,
                ]}
              >
                <List.Item.Meta title={item.name} />
              </List.Item>
            )}
          ></List>
        </Col>
        <CategoryUpdateModal
        updatingCategory={updatingCategory}
         handleUpdate={handleUpdate}
          visible={visible} 
          setVisible={setVisible} />
      </Row>
    </AdminLayout>
  );
}

export default Categories;

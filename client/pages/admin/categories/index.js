import { useEffect, useState } from "react";
import { Layout } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Form, Input, Row, Col, Button, List } from "antd";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-hot-toast";

const { Content, Sider } = Layout;

function Categories() {
  // state
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

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
      setCategories([data, ...categories])
      toast.success("Category created successfully");
      setLoading(false);
      form.resetFields(["name"]);
    } catch (err) {
      console.log(err);
      toast.error("Category create failed");
      setLoading(false);
    }
  };

  const handleDelete = async (item)=> {
    console.log(item, item.slug);
    try{
      const {data} = await axios.delete(`/category/${item.slug}`)
      setCategories(categories.filter(category => category.slug !== data.slug))
      toast.success('category deleted successfully')
    }
    catch(err){
      console.log(err);
      toast.error('Category delete faild')
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
                  <a>Edit</a>,
                  <a onClick={()=> handleDelete(item)}>delete</a>

                ]}
              >
                <List.Item.Meta title={item.name} />
              </List.Item>
            )}
          ></List>
        </Col>
      </Row>
    </AdminLayout>
  );
}

export default Categories;

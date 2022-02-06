import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import {
  SwitcherOutlined,
  UnorderedListOutlined,
  EditOutlined,
  StopOutlined,
  DeleteOutlined,
  CheckOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { signUpAdminApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import "./AddUserForm.scss";

export default function EditUserForm(props) {
  const { setIsVisibleModal, setReloadUsers } = props;
  const [userData, setUserData] = useState({});

  const addUser = (event) => {
    event.preventDefault();

    console.log("creando usuarios..");
  };

  return (
    <div className="add-user-form">
      <addForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
      />
    </div>
  );
}

function addForm(props) {
  const { userData, setUserData, addUser } = props;
  const { Option } = Select;

  return (
    <Form className="form-add" onSubmit={addUser}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined type="user" />}
              placeholder="Nombre"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

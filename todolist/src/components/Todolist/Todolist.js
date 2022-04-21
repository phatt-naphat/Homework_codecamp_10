import React , {useState} from 'react'
import { useEffect } from 'react';
import { List, Input, Button, Row, Col, Divider, Typography } from 'antd';
import _ from 'lodash';
import  axios  from 'axios';
import Todo from './Todo';
const { Text } = Typography;

export default function Todolist() {
    const[todoList, setTodoList] = useState([]);
    const[inputFeild, setInputFeild] = useState("");

    const fetchTodoList = async () => {
        const httpResponse = await axios.get("http://localhost:8000/todo-list");
        setTodoList(httpResponse.data);
    };

    useEffect(() => {
        fetchTodoList();
    }, []);

    const addTodoItem = async () => {
        await axios.post("http://localhost:8000/todo-list", { task: inputFeild });
        fetchTodoList();
    };

    const deleteTodoItem = async (id) => {
        await axios.delete(`http://localhost:8000/todo-list/${id}`);
        fetchTodoList();
    }

    return (
       <Row justify='center'>
            <Col>
                <Row justify='center'>
                    <Text type="warning">กรุณาใส่ Todo ที่ต้องการเพิ่ม</Text>
                </Row>
                <Row justify='center'>
                    <Col span={20}>
                        <Input value = {inputFeild} onChange = {(e)=> setInputFeild(e.target.value)} />
                    </Col>
                    <Col span={4}>
                        <Button style={{width: '100%'}} onClick={addTodoItem}>Add</Button>
                    </Col>
                </Row>

                <Divider />
                <List
                    style={{width: '450px'}}
                    header={<div>Todo List Page</div>}
                    bordered
                    dataSource={todoList}
                    renderItem={todo => (
                        <List.Item>
                            <Todo delete={deleteTodoItem} todo={todo} fetchData={fetchTodoList}/>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
  )
}

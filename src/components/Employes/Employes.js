import React from "react";
import axios from "axios";
import { Layout, Input, Button, List } from "antd";

const {  Content } = Layout;


const User = ({first_name, deleteUser}) => (
    <>
        <h4>{first_name}</h4>
        <Button onClick={deleteUser} size="small">delete user</Button>
    </>
);


const data = [
    {
        title: 'Title 1',
    },

];

class Emloyes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersOnPage: 12,
        };
        this.changeAddUser = this.changeAddUser.bind(this);
        this.submitAddUser = this.submitAddUser.bind(this);
    };

    componentDidMount() {
        axios.get(`https://reqres.in/api/users?per_page=${this.state.usersOnPage}`)
            .then((response) => {
                return response;
            })
            .then((data) => {
                const users = data.data.data;
                this.setState({users});
            })
    };


    deleteUser = index => this.setState({
        users: this.state.users.filter((user, i) => i !== index)
    });

    changeAddUser(event) {
        this.setState({value: event.target.value});
    };


    submitAddUser(event) {
        this.setState({users: [...this.state.users, {first_name: this.state.value}]});
        event.preventDefault();
        const form = event.target
        form.reset();
    };

    render() {

        return <Layout>

            <Content>

                <div>
                    {this.state.users.map((user, index) => (

                        <List
                            grid={{ gutter: 16, column: 3 }}
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <User key={index}
                                          {...user}
                                          deleteUser={() => this.deleteUser(index)} />
                                </List.Item>
                            )}
                        />

                    ))}
                    <form onSubmit={this.submitAddUser}>
                        <Input style={{ width: 200, margin: '0 10px' }} type="text" onChange={this.changeAddUser}/>
                        <Input style={{ width: 200, margin: '0 10px' }} type="submit" value="add user"/>
                    </form>
                </div>
            </Content>
        </Layout>


    }
};

export default Emloyes;


import * as React from "react";
import axios from "axios";
import { Layout, Input, Button, List } from "antd";
import {FormEvent} from "react";

const { Content } = Layout;


interface IUsers {
    first_name: string,
    deleteUser: () => void
}

const User : React.FC<IUsers> = ({first_name, deleteUser}) => (


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



type EmployesType = {
    users: any[],
    value: string,
    usersOnPage: number,
}


class Emloyes extends React.Component <{}, EmployesType> {


    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            value: "",
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


    deleteUser = (index: number) => this.setState({
        users: this.state.users.filter((user, i) => i !== index)
    });

    changeAddUser(event: { target: HTMLInputElement; }) {
        this.setState({value: (event.target.value)});
    };


    submitAddUser(event: FormEvent) {
        this.setState({users: [...this.state.users, {first_name: this.state.value}]});
        event.preventDefault();
        this.setState({value: ""})
    };

    render() {

        return <Layout>

            <Content>

                <div>
                    <form onSubmit={this.submitAddUser}>
                        <Input style={{ width: 200, margin: '10px 10px'  }} type="text" value={this.state.value} onChange={this.changeAddUser}/>
                        <Input style={{ width: 200, margin: '0 10px' }} type="submit" value="add user"/>
                    </form>
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

                </div>
            </Content>
        </Layout>
    }
};

export default Emloyes;


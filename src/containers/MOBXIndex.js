// import React from 'react';
// import { Route, Switch } from 'react-router-dom';

// class MOBXIndex extends React.Component {
//   render () {
//     return(
//       <Route>
//         <div> hahaha </div>
//       </Route>
//     )
//   } 
// } 

// export default MOBXIndex;

// import React, {Component} from 'react';
// import { render } from 'react-dom';
// import {observable} from 'mobx';
// import {observer} from 'mobx-react';

// // 最简单的 mobx 就是一个观察者模式

// class Store {
//   // 被观察者
//   @observable todos = [{
//     title: "完成 Mobx 翻译",
//     done: false,
//   }];
// }

// // 观察者
// @observer
// class TodoBox extends Component  {
//   render() {
//     return (
//       <ul>
//         {this.props.store.todos.map(todo => <li>{todo.title}</li>)}
//       </ul>
//     )
//   }
// }


// const store = new Store();

// render(
//   <TodoBox store={store} />,
//   document.getElementById('root')
// );



import {observable, action, computed, useStrict} from 'mobx';
import {observer} from 'mobx-react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Store {
    @observable todos = [
        {
            title: "todo标题",
            done: false,
        },
        {
            title: "已经完成 todo 的标题",
            done: true,
        }
    ];

    @action changeTodoTitle({index, title, done}) {
        this.todos[index].title = title
        this.todos[index].done = done
    }

    @action isShow(index) {
        this.todos[index].done = false
    }

    @computed get unfinishedTodos() {
        return this.todos.filter((todo) => todo.done)
    }
}

@observer
class Hello extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.store.unfinishedTodos.map((todo, index) => <li key={`list-${index}`} onClick={()=>{
                        this.props.store.isShow(index)
                    }}>{todo.title}</li>)}
                </ul>
                <div>
                    <input type="button" onClick={() => {
                        this.props.store.changeTodoTitle({
                            index: 0,
                            title: "修改后的todo标题",
                            done: !this.props.store.todos[0].done
                        });
                    }} value="点击我"/>
                </div>
            </div>
        )
    }
}

//实例化对象
const store = new Store();

ReactDOM.render(
    <Hello store={store}/>,
    document.getElementById("root")
)

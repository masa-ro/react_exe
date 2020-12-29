import React from 'react';

class Regist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputTitle : '',
            inputPrice : '',
        }
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangePrice(e){
        this.setState({
            inputPrice: e.target.value
        });
    }

    handleChangeTitle(e){
        this.setState({
            inputTitle: e.target.value
        });
    }

    handleClick(){
        this.props.addBook(this.state.inputTitle, this.state.inputPrice);
    }

    render(){
        return(
            <div>
                <h2>書籍登録</h2>
                <table>
                    <tr>
                        <td>Title :<input onChange={this.handleChangeTitle} value={this.state.inputTitle}></input></td>
                    </tr>
                    <tr>
                        <td>Price:<input onChange={this.handleChangePrice} value={this.state.inputPrice}></input></td>
                    </tr>
                </table>
                <button onClick={this.handleClick}>Regist</button>
            </div>
        );
    }
}

export default Regist;
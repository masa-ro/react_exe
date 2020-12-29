import React from 'react';
import Header from '../common/Header';
import Table from './Table';
import Regist from './Regist';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                id: 1, title: 'Java Book', price: 3000
                },
                {
                id: 2, title: 'React Book', price: 4000
                },
            ],
            uniqueId: 3,
        }

        this.addBook = this.addBook.bind(this);
        this.delete = this.delete.bind(this);
    }

    addBook(title, price){
        const{
          books, 
          uniqueId,
        } = this.state;
      
        const book = {
          title:title,
          price:price,
          id:uniqueId,
        };
      
        const newBooks = books.concat(book);
      
        this.setState({
          books: newBooks,
          uniqueId: uniqueId + 1
        });
    }

    delete(){
        const{
           books,
           uniqueId 
        } = this.state;

        const newBooks = [];
        for (let i = 0; i < (books.length - 1); i++) {
            newBooks.push(books[i]);
        }

        this.setState({
            books:newBooks,
            uniqueId: uniqueId - 1
        });

        // this.setState({
        //     books: this.state.books.slice(0, -1),
        // })
    }

    render(){
        return(
            <div>
                <Header admin={false} />
                <Table books={this.state.books} />
                <Regist addBook={this.addBook}/>
                <button onClick={this.delete}>Delete</button>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: 'NAMJU YOON',
      initials: 'KS',
      info: [
        {title: 'Birthday',},
        {title: 'Addresss', text: '123 Fulton St.'},
        {title: 'Phone', 'text': '010-5581-6654'},
        {title: 'Eamil', 'text': 'namju.yoon@naver.com'}
      ]
    }
  }

  render() {
    const {
      firstName, 
      initials, 
      info
    } = this.state
    return (
      <React.Fragment>
        <section className="card-container">
          <header className="card-header">
            <span initials={initials}></span>
            <h2> { firstName } </h2>
          </header>

          <main>
            <ul>
              {
                info.map((row, index) => {
                  return (
                    <li key={index}>
                      <span> {row.title} </span> {row.text ? row.text : 'n/a'}
                    </li>
                  )
                })
              }
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default Card;